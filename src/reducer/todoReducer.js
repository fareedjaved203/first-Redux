const initialState = {
  list: [],
};

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      const { id, data } = action.payload;
      return {
        //dont know why this is used
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };

    case "REMOVE":
      const newList = state.list.filter((elem) => {
        return elem.id !== action.id;
      });
      return {
        ...state,
        list: newList,
      };
    case "REMOVEALL":
      return {
        ...state,
        list: [],
      };

    default:
      return state;
  }
};

export default TodoReducer;
