import React, { useState } from 'react';
import Header from './components/Header';
import RouteInfoPanel from './components/RouteInfoPanel';
import MapWrapper from './components/MapWrapper';
import { mockRoutes, ROUTE_TYPE } from './mock/routes';
import './index.css';

function App() {
  const [currentRoute, setCurrentRoute] = useState(null);

  const handleShowRoute = (routeType) => {
    setCurrentRoute(mockRoutes[routeType]);
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
            onClick={() => handleShowRoute(ROUTE_TYPE.AIRPORT_BHAKTAPUR)}
          >
            Airport → Bhaktapur
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
          <RouteInfoPanel routeData={currentRoute} />
          <MapWrapper routeData={currentRoute} />
        </div>
      </div>
    </div>
  );
}

export default App;
