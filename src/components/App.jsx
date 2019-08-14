import React from 'react';
import { Provider } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';

import store from '../store';
import ItemsList from './ItemsList';
import AddField from './AddField';
import Map from './Map';

const App = () => {
  return (
    <Provider store={store}>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <h1>Funroute</h1>
            <div className="info-box">
              <b>Funroute</b> &ndash; редактор маршрутов &ndash; одностраничное
              приложение, в котором пользователь в интерактивном режиме может
              создавать на карте маршрут, указывая начальную, конечную и
              промежуточные точки движения. Для каждой точки маршрута можно
              посмотреть ее адрес.
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
            <AddField
              hint="New point"
              placeholder="Please, input name here"
              buttonText="Add"
            />
            <ItemsList store={store} />
          </div>
          <div className="col-md-6">
            <Map store={store}/>
          </div>
        </div>
      </div>
    </Provider>
  );
};

App.propTypes = {};

export default App;
