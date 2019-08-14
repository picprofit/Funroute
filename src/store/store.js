import { compose, createStore } from 'redux';

import rootReducer from '../reducers';

const initialState = {
  items: [
    {
      id: 1,
      text: 'First point',
      enabled: true,
      coords: {
        lat: 52.3772567,
        lng: 4.9023627
      }
    },
    {
      id: 2,
      text: 'Point of view',
      enabled: true,
      coords: {
        lat: 52.3573945,
        lng: 4.8767953
      }
    },
    {
      id: 3,
      text: 'PowerPoint',
      enabled: true,
      coords: {
        lat: 52.382908,
        lng: 4.8324173
      }
    }
  ]
};

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers();

const store = createStore(rootReducer, initialState, enhancer);

export default store;
