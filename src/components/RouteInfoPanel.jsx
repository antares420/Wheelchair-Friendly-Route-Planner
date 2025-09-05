import React from 'react';
import PropTypes from 'prop-types';

const RouteInfoPanel = ({ routeData }) => {
  if (!routeData) {
    return (
      <div className="route-info-panel">
        <h2>Route Details</h2>
        <p className="placeholder-text">Select a demo route to see the details.</p>
      </div>
    );
  }

  const { name, accessibility, directions, distance, duration } = routeData;

  return (
    <div className="route-info-panel">
      <h2>{name}</h2>
      
      <div className="accessibility-score">
        <span className="score">{accessibility.score}%</span>
        <span className="rating">{accessibility.rating} Accessibility</span>
      </div>

      <div className="route-details-grid">
        <div className="detail-item">
          <span className="label">Elevation</span>
          <span className="value">{accessibility.elevation}</span>
        </div>
        <div className="detail-item">
          <span className="label">Barriers Avoided</span>
          <span className="value">{accessibility.barriersAvoided}</span>
        </div>
        <div className="detail-item">
          <span className="label">Accessible Features</span>
          <span className="value">{accessibility.features}</span>
        </div>
        <div className="detail-item">
          <span className="label">Distance / Duration</span>
          <span className="value">{`${distance} / ${duration}`}</span>
        </div>
      </div>

      <div className="directions-panel">
        <h3>Wheelchair-Specific Directions</h3>
        <div className="directions-list">
          {directions.map((step, index) => (
            <div key={index} className="direction-step">
              <div className="instruction">{step.instruction}</div>
              <div className="guidance">{`✓ ${step.guidance}`}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

RouteInfoPanel.propTypes = {
  routeData: PropTypes.shape({
    name: PropTypes.string,
    distance: PropTypes.string,
    duration: PropTypes.string,
    accessibility: PropTypes.shape({
      score: PropTypes.number,
      rating: PropTypes.string,
      elevation: PropTypes.string,
      barriersAvoided: PropTypes.string,
      features: PropTypes.string,
    }),
    directions: PropTypes.arrayOf(PropTypes.shape({
      instruction: PropTypes.string,
      guidance: PropTypes.string,
    })),
  }),
};

export default RouteInfoPanel;
