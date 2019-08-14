import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Item from './Item';

const ItemsList = ({ items }) => {
  return items.length > 0 ? (
    <ul className="mt-3 list-group">
      {items.map(item => {
        const { id, text, enabled, coords } = item;
        return (
          <Item
            key={id}
            id={id}
            text={text}
            enabled={enabled}
            coords={coords}
          />
        );
      })}
    </ul>
  ) : (
    <div className="mt-3 alert alert-info">
      No items found! Try to add a new one maybe?
    </div>
  );
};

ItemsList.propTypes = {};

const mapStateToProps = store => ({
  items: store.items
});

export default connect(mapStateToProps)(ItemsList);
