export const Add = (data) => {
  return {
    type: "ADD",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};

export const Remove = (id) => {
  return {
    type: "REMOVE",
    id: id,
  };
};

export const RemoveAll = () => {
  return {
    type: "REMOVEALL",
  };
};
