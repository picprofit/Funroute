import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteItem, toggleItem } from '../../../actions';

const Item = ({ id, text, enabled, coords, onDelete, onToggle }) => (
  <li
    key={id}
    className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center no-selection ${!enabled &&
      'list-group-item-secondary'}`}
    onDoubleClick={e => {
      e.preventDefault();
      e.stopPropagation();
      onToggle(id);
    }}
  >
    {text}
    <button
      className="btn"
      type="button"
      onClick={e => {
        e.preventDefault();
        e.stopPropagation();
        onDelete(id);
      }}
    >
      &times;
    </button>{' '}
  </li>
);

Item.propTypes = {};

const mapDispatchToProps = dispatch => ({
  onDelete: id => {
    dispatch(deleteItem(id));
  },
  onToggle: id => {
    dispatch(toggleItem(id));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Item);
