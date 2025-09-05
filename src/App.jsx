import React, { useState } from 'react';
import Header from './components/Header';
import RouteInfoPanel from './components/RouteInfoPanel';
import MapWrapper from './components/MapWrapper';
import { mockRoutes, ROUTE_TYPE } from './mock/routes';
import { fetchRoute } from './services/ors-api';
import './index.css';

function App() {
  const [currentRoute, setCurrentRoute] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleShowRoute = async (routeType) => {
    setLoading(true);
    const mockData = mockRoutes[routeType];

    // Get coordinates from mock data for the API call
    const startCoords = mockData.mapData.path[0].slice().reverse(); // ORS wants [lng, lat]
    const endCoords = mockData.mapData.path[mockData.mapData.path.length - 1].slice().reverse();

    try {
      const routeGeoJSON = await fetchRoute(startCoords, endCoords);
      if (routeGeoJSON) {
        // The API returns coordinates as [lng, lat], Leaflet needs [lat, lng]
        const path = routeGeoJSON.features[0].geometry.coordinates.map(coord => [coord[1], coord[0]]);
        
        const newRouteData = {
          ...mockData,
          mapData: {
            ...mockData.mapData,
            path: path,
            markers: [], // Clear mock markers when showing a live route
          },
        };
        setCurrentRoute(newRouteData);
      } else {
        // Fallback to mock data if API fails
        alert('Failed to fetch route from API. Displaying mock route.');
        setCurrentRoute(mockData);
      }
    } catch (error) {
      alert('An error occurred while fetching the route.');
      setCurrentRoute(mockData); // Fallback
    } finally {
      setLoading(false);
    }
  };

  const handleCustomRoute = () => {
    // For a real application, this would open a form to select start/end points.
    // For the hackathon demo, we can just show an alert.
    alert("Custom route planning would be implemented here!");
  };

  return (
    <div id="root">
      <Header />
      <div className="main-content">
        <div className="demo-controls">
          <button 
            className="demo-btn" 
            onClick={() => handleShowRoute(ROUTE_TYPE.PASHUPATI_BOUDHANATH)}
          >
            Pashupatinath → Boudhanath
          </button>
          <button 
            className="demo-btn secondary"
            onClick={() => handleShowRoute(ROUTE_TYPE.THAMEL_BOUDHANATH)}
          >
            Thamel → Boudhanath
          </button>
          <button 
            className="demo-btn"
            onClick={handleCustomRoute}
          >
            Custom Route
          </button>
        </div>
        <div className="core-layout">
          <RouteInfoPanel routeData={currentRoute} loading={loading} />
          <MapWrapper routeData={currentRoute} />
        </div>
      </div>
    </div>
  );
}

export default App;
