import BaseService from './BaseService';

export class NoteService extends BaseService {
    getNotes({filter}) {
        const url = filter.searchString ? `/notes/s/${filter.searchString}` : '/notes';
        return super.request({
            url: url,
        });
    }

    getNoteById(noteId){
        return super.request({
            url: `/notes/${noteId}`,
        });
    }
}

export default new NoteService()