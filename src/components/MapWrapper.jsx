import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Helper to create custom HTML markers
const createMarkerIcon = (type) => {
  let iconHtml, className;
  switch (type) {
    case 'ramp':
      iconHtml = '♿';
      className = 'marker-blue';
      break;
    case 'accessible_entry':
      iconHtml = '✅';
      className = 'marker-green';
      break;
    case 'caution':
      iconHtml = '⚠';
      className = 'marker-yellow';
      break;
    case 'curb_cut':
    case 'accessible_area':
      iconHtml = '🟢'; // Using green dot for general accessible features as per prompt
      className = 'marker-green';
      break;
    default:
      iconHtml = '📍';
      className = 'marker-blue';
  }
  return L.divIcon({
    html: `<div class="accessibility-marker ${className}">${iconHtml}</div>`,
    className: '' // Important to clear default leaflet styles
  });
};

const MapWrapper = ({ routeData }) => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const routeLayerRef = useRef(null);

  // Initialize map
  useEffect(() => {
    if (!mapInstance.current) {
      mapInstance.current = L.map(mapRef.current, {
        center: [27.7, 85.35], // Centered on Kathmandu
        zoom: 12,
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapInstance.current);
    }
  }, []);

  // Update map when route data changes
  useEffect(() => {
    if (mapInstance.current && routeData) {
      // Clear previous route and markers
      if (routeLayerRef.current) {
        routeLayerRef.current.clearLayers();
      }

      const { path, markers } = routeData.mapData;
      
      // Create a group to hold the new route and markers
      const newRouteLayer = L.layerGroup();

      // Add route polyline
      const polyline = L.polyline(path, { color: '#1e40af', weight: 5 });
      newRouteLayer.addLayer(polyline);

      // Add accessibility markers
      markers.forEach(markerInfo => {
        const marker = L.marker(markerInfo.pos, { icon: createMarkerIcon(markerInfo.type) })
          .bindPopup(markerInfo.label);
        newRouteLayer.addLayer(marker);
      });

      // Add the new layer to the map and fit bounds
      newRouteLayer.addTo(mapInstance.current);
      mapInstance.current.fitBounds(polyline.getBounds().pad(0.1));

      // Store the new layer group for future clearing
      routeLayerRef.current = newRouteLayer;
    }
  }, [routeData]);

  return <div ref={mapRef} className="map-container" />;
};

MapWrapper.propTypes = {
  routeData: PropTypes.shape({
    mapData: PropTypes.shape({
      path: PropTypes.array.isRequired,
      markers: PropTypes.arrayOf(PropTypes.shape({
        pos: PropTypes.arrayOf(PropTypes.number).isRequired,
        type: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      })).isRequired,
    }),
  }),
};

export default MapWrapper;
