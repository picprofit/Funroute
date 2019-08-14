import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';

import Marker from './Marker';

const Map = ({ items }) => {
  const defaultParams = {
    center: {
      lat: 52.38,
      lng: 4.9
    },
    zoom: 12,
    apiKey: 'AIzaSyB0W64e9vw2wLLfh3W7n1PcwZxQcjjAC_s'
  };
  const mapMoved = map => {
    // console.log(map);
    // console.log(map.center.lat);
    // console.log(map.center.lng);
  };

  // Return map bounds based on list of places
  const getMapBounds = (map, maps, items) => {
    const bounds = new maps.LatLngBounds();

    items.forEach(item => {
      bounds.extend(new maps.LatLng(item.coords.lat, item.coords.lng));
    });
    return bounds;
  };

  // Re-center map when resizing the window
  const bindResizeListener = (map, maps, bounds) => {
    maps.event.addDomListenerOnce(map, 'idle', () => {
      maps.event.addDomListener(window, 'resize', () => {
        map.fitBounds(bounds);
      });
    });
  };

  const [map, updateMap] = useState({});
  console.log(typeof(map.getCenter) !== 'undefined' ? map.getCenter().lat : false);

  const [lat, updateLat] = useState(false);
  console.log(lat);

  // Fit map to its bounds after the api is loaded
  const apiIsLoaded = (map, maps, items) => {
    // Get bounds by our places
    const bounds = getMapBounds(map, maps, items);
    // Fit map to bounds
    map.fitBounds(bounds);
    // Bind the resize listener
    bindResizeListener(map, maps, bounds);
    updateMap(map);
    updateLat(map.center.lat);
  };

  return (
    <div
      style={{
        width: '100%',
        height: '400px'
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{
          key: defaultParams.apiKey
        }}
        defaultCenter={defaultParams.center}
        defaultZoom={defaultParams.zoom}
        yesIWantToUseGoogleMapApiInternals
        onDrag={mapMoved}
        onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps, items)}
      >
        {items.map(
          item =>
            item.enabled && (
              <Marker
                lat={item.coords.lat}
                lng={item.coords.lng}
                text={item.text}
                key={item.id}
              />
            )
        )}
      </GoogleMapReact>
    </div>
  );
};

Map.propTypes = {};

const mapStateToProps = store => ({
  items: store.items
});

export default connect(mapStateToProps)(Map);
