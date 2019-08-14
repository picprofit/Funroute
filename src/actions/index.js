import {
  ADD_ITEM, EDIT_ITEM, TOGGLE_ITEM, DELETE_ITEM,
} from '../constants';

export const addItem = (text) => ({
  type: ADD_ITEM,
  text,
});

export const editItem = (id, text) => ({
  type: EDIT_ITEM,
  id,
  text,
});

export const deleteItem = (id) => ({
  type: DELETE_ITEM,
  id,
});

export const toggleItem = (id) => ({
  type: TOGGLE_ITEM,
  id,
});
