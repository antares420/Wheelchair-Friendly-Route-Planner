
// This file contains pre-configured data for the demo routes to ensure a fast and reliable demo experience.

export const ROUTE_TYPE = {
  AIRPORT_BHAKTAPUR: 'AIRPORT_BHAKTAPUR',
  THAMEL_BOUDHANATH: 'THAMEL_BOUDHANATH',
};

export const mockRoutes = {
  [ROUTE_TYPE.AIRPORT_BHAKTAPUR]: {
    name: "Airport → Bhaktapur",
    from: "Tribhuvan International Airport",
    to: "Bhaktapur Durbar Square",
    distance: "12.5 km",
    duration: "45 min",
    accessibility: {
      score: 92,
      rating: "Excellent",
      elevation: "Gentle slopes (<3% grade)",
      barriersAvoided: "0 stairs, 0 steep inclines",
      features: "12 curb cuts, 3 ramps identified",
    },
    directions: [
      { instruction: "Head east from Airport Arrivals (200m)", guidance: "Paved, flat surface with designated walkway." },
      { instruction: "Turn left onto Ring Road (2.5km)", guidance: "Wide sidewalk, wheelchair accessible path." },
      { instruction: "Continue straight past Koteshwor (3km)", guidance: "Paved road, gentle incline, step-free." },
      { instruction: "Caution: Uneven pavement for 150m.", guidance: "Monitor surface, proceed with care." },
      { instruction: "Turn right towards Bhaktapur (4km)", guidance: "Smooth asphalt road, well-maintained." },
      { instruction: "Follow signs for Durbar Square (2.5km)", guidance: "Accessible side paths available." },
      { instruction: "Arrive at Bhaktapur Durbar Square", guidance: "Main entrance is step-free. Ramps available for key temples." },
    ],
    mapData: {
      path: [ // Fallback polyline that looks more realistic
        [27.6966, 85.3591], // Airport
        [27.6986, 85.3540],
        [27.6948, 85.3495],
        [27.6925, 85.3522],
        [27.6906, 85.3616],
        [27.6904, 85.3728],
        [27.6868, 85.3845],
        [27.6849, 85.3942],
        [27.6846, 85.4077],
        [27.6778, 85.4205],
        [27.6732, 85.4298], // Bhaktapur
      ],
      markers: [
        { pos: [27.6955, 85.3680], type: 'ramp', label: 'Ramp' },
        { pos: [27.6880, 85.3900], type: 'curb_cut', label: 'Curb Cut' },
        { pos: [27.6800, 85.4150], type: 'caution', label: 'Caution: Uneven Surface' },
        { pos: [27.6740, 85.4280], type: 'accessible_entry', label: 'Step-free Entrance' },
        { pos: [27.6735, 85.4290], type: 'ramp', label: 'Ramp' },
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
