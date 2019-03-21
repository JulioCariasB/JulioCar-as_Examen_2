// types of action
const Types = {
  CREATE_ITEM: "CREATE_ITEM",
  DELETE_ITEM: "DELETE_ITEM",
  GET_DATA: "GET_DATA"
};

const createItem = task => ({
  type: Types.CREATE_ITEM,
  payload: task
});

const deleteItem = id => ({
  type: Types.DELETE_ITEM,
  payload: id
});

const obtenerData = (month, day) => ({
  type: Types.GET_DATA,
  month: month,
  day: day 
});

export default {
  createItem,
  deleteItem,
  Types,
  obtenerData
};