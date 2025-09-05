
// This file contains pre-configured data for the demo routes to ensure a fast and reliable demo experience.

export const ROUTE_TYPE = {
  PASHUPATI_BOUDHANATH: 'PASHUPATI_BOUDHANATH',
  THAMEL_BOUDHANATH: 'THAMEL_BOUDHANATH',
};

export const mockRoutes = {
  [ROUTE_TYPE.PASHUPATI_BOUDHANATH]: {
    name: "Pashupatinath → Boudhanath",
    from: "Pashupatinath Temple",
    to: "Boudhanath Stupa",
    distance: "2.1 km",
    duration: "12 min",
    accessibility: {
      score: 95,
      rating: "Excellent",
      elevation: "Mostly flat (<2% grade)",
      barriersAvoided: "0 stairs, 0 steep inclines",
      features: "5 curb cuts, 2 ramps identified",
    },
    directions: [
      { instruction: "Head north from Pashupatinath West Gate (400m)", guidance: "Paved, accessible pathway." },
      { instruction: "Turn right onto Gaushala Road (1.2km)", guidance: "Wide sidewalk, wheelchair accessible path." },
      { instruction: "Continue straight towards Boudha (500m)", guidance: "Gentle incline, step-free." },
      { instruction: "Arrive at Boudhanath Stupa entrance", guidance: "Main entrance is fully accessible and step-free." },
    ],
    mapData: {
      path: [ 
        [27.7108, 85.3485], // Pashupatinath
        [27.7140, 85.3520],
        [27.7175, 85.3560],
        [27.7206, 85.3617], // Boudhanath
      ],
      markers: [
        { pos: [27.7120, 85.3500], type: 'ramp', label: 'Ramp' },
        { pos: [27.7160, 85.3540], type: 'curb_cut', label: 'Curb Cut' },
        { pos: [27.7200, 85.3600], type: 'ramp', label: 'Ramp to Stupa' },
        { pos: [27.7206, 85.3617], type: 'accessible_entry', label: 'Step-free Entrance' },
      ]
    }
  },
  [ROUTE_TYPE.THAMEL_BOUDHANATH]: {
    name: "Thamel → Boudhanath",
    from: "Thamel",
    to: "Boudhanath Stupa",
    distance: "3.2 km",
    duration: "15 min",
    accessibility: {
      score: 98,
      rating: "Excellent",
      elevation: "Mostly flat (<1% grade)",
      barriersAvoided: "0 stairs, 0 steep inclines",
      features: "8 curb cuts, 2 ramps identified",
    },
    directions: [
      { instruction: "Head east from Thamel Chowk (800m)", guidance: "Wide sidewalk, wheelchair accessible path." },
      { instruction: "Continue onto Lazimpat Road (1.5km)", guidance: "Smooth, paved road with step-free pedestrian crossings." },
      { instruction: "Turn right towards Boudha (700m)", guidance: "Gentle decline, accessible pathway." },
      { instruction: "Arrive at Boudhanath Stupa entrance", guidance: "Main entrance is fully accessible and step-free." },
    ],
    mapData: {
      path: [ // Simplified polyline
        [27.7152, 85.3070],
        [27.7170, 85.3250],
        [27.7190, 85.3450],
        [27.7206, 85.3617],
      ],
      markers: [
        { pos: [27.7160, 85.3150], type: 'curb_cut', label: 'Curb Cut' },
        { pos: [27.7180, 85.3350], type: 'accessible_area', label: 'Accessible Area' },
        { pos: [27.7200, 85.3600], type: 'ramp', label: 'Ramp to Stupa' },
        { pos: [27.7206, 85.3617], type: 'accessible_entry', label: 'Step-free Entrance' },
      ]
    }
  }
};
