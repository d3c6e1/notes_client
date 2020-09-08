import request from 'superagent';
import { each, keys, some, extend, isObject } from 'underscore';

import ServerError from '../lib/errors/ServerError';

import config from '../config';

function onSuccess(response) {
    let parsed = {};

    try {
        parsed = JSON.parse(response.text);
    } catch (e) {
        throw new Error('Response parse error', response.toString());
    }

    const status = response.status;

    if (status === 200 || status === 201) {
        return parsed;
    }

    throw new ServerError({ status, response });
}

// if server dead
function onFailure(response) {
    const { status, message, response: { body } } = response;
    throw new ServerError({ body, status, code: 'internal.server.error', message: body.message || message });
}

export default class BaseService {
    request(opts) {
        opts = {
            method: 'GET',
            url: null,
            body: null,
            type: 'form',
            params: null,
            callback: null,
            ...opts
        };

        const {remote} = config;

        // mock server
        if(!remote.isEnabled){
            // TODO mock server
        }
        // real server
        else {
            const { type, method } = opts;
            const url = `${remote.url}${opts.url}`;

            if (method === 'GET') {
                let rq = request.get(url)
                    .query(opts.params)
                    .timeout({response: config.responseTimeout});

                const {headers} = opts;
                if (headers) {
                    each(keys(headers), key => {
                        rq.set(key, headers[key]);
                    })
                }
                return rq.then(onSuccess, onFailure);
            }

            if (method === 'POST' || method === 'PUT') {
                let rq = request(method, url).type(type)
                    .timeout({response: config.responseTimeout});

                if (type === 'multipart/form-data') {
                    each(opts.body, (v, k) => {
                        if (v instanceof File) {
                            rq = rq.attach(k, v);
                        }

                        else {
                            if (isObject(v)) {
                                v = JSON.stringify(v);
                            }
                            rq = rq.field(k, v);
                        }
                    });
                } else {
                    rq = rq.send(opts.body);
                }

                return rq.then(onSuccess, onFailure);
            }

            if (method === 'DELETE') {
                return request
                    .del(url)
                    .timeout({response: config.responseTimeout})
                    .then(onSuccess, onFailure);
            }
        }
    }
}