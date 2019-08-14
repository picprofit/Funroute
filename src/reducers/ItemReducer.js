import { ADD_ITEM, EDIT_ITEM, TOGGLE_ITEM, DELETE_ITEM } from '../constants';

const ItemReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [
        ...state,
        {
          id: state.length > 0 ? state[state.length - 1].id + 1 : 1,
          text: action.text,
          enabled: true,
          coords: {}
        }
      ];
    case EDIT_ITEM:
      return state;
    case TOGGLE_ITEM:
      return state.map(item => {
        return item.id === action.id
          ? {
              ...item,
              enabled: !item.enabled
            }
          : item;
      });
    case DELETE_ITEM:
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
};

export default ItemReducer;
