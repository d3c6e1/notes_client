import BaseService from './BaseService';

export class NoteService extends BaseService {
    getAllNotes() {
        return super.request({
            url: '/notes',
        });
    }
}

export default new NoteService()