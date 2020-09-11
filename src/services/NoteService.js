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

    deleteNote(noteId){
        return super.request({
            url: `/notes/${noteId}`,
            method: 'DELETE',
        });
    }

    updateNote(note){
        return super.request({
            url: `/notes`,
            method: 'PUT',
            body: JSON.stringify(note),
        });
    }

    addNote(note){
        return super.request({
            url: `/notes`,
            method: 'POST',
            body: JSON.stringify(note),
        });
    }
}

export default new NoteService()