import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addItem } from '../actions';

const AddField = ({ hint, placeholder, buttonText, onSubmit }) => {
  const [itemText, setItemText] = useState('');
  const [error, setError] = useState('');
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (itemText.length > 0) {
          // add task
          onSubmit(itemText);
          // clear the form
          setItemText('');
          // reset error
          setError('');
        } else {
          setError('Please, fill the field');
        }
      }}
    >
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">{hint || 'New point'}</span>
        </div>
        <input
          type="text"
          placeholder={placeholder || 'Please, input name here'}
          className="form-control"
          onChange={e => setItemText(e.target.value)}
          value={itemText}
          // required="required"
        />
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary">
            {buttonText || 'Add'}
          </button>
        </div>
      </div>
      {error.length > 0 && <div className="alert alert-warning">{error}</div>}
    </form>
  );
};

AddField.propTypes = {};

const mapDispatchToProps = dispatch => ({
  onSubmit: text => {
    dispatch(addItem(text));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(AddField);
