//todo: delete this files once actions are fired from actions folder

let actions = {
  addTodo: function (text) {
    return {
      type: 'ADD_TODO',
      text: text
    };
  },

  completeTodo: function (id) {
    return {
      type: 'COMPLETE_TODO',
      id: id
    }
  },

  deleteTodo: function (id) {
    return dispatch => {
      dispatch({type: 'DELETE_TODO', id: id});
    };
  }
};

export default actions;