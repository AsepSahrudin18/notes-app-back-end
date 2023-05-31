const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByIdHandler, deleteNoteByIdHandler} = require('./handler');

const routes = [
    // create data
    {
      method: 'POST',
      path: '/notes',
      handler: addNoteHandler,

      options: {
        cors: {
          origin: ['*'],
        },
      },
    },

    // get All resource
    {
      method: 'GET',
      path: '/notes',
      handler: getAllNotesHandler,
    },

    // get detail
    {
      method: 'GET',
      path: '/notes/{id}',
      handler: getNoteByIdHandler,
    },

    // edit
    {
      method: 'PUT',
      path: '/notes/{id}',
      handler: editNoteByIdHandler,
    },

    // delete
    {
      method: 'DELETE',
      path: '/notes/{id}',
      handler: deleteNoteByIdHandler,
    },

  ];
   
module.exports = routes;