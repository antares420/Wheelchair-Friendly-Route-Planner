const ORS_API_KEY = 'eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6ImYxMzA4YWJlYTljMTQ0NWE4M2YzMDMzMDI3N2U3YjA5IiwiaCI6Im11cm11cjY0In0=';
const ORS_BASE_URL = 'https://api.openrouteservice.org/v2';
const routingProfile = 'wheelchair';

/**
 * Fetches a route from the OpenRouteService API.
 * @param {number[]} startCoords - The starting coordinates [lng, lat].
 * @param {number[]} endCoords - The ending coordinates [lng, lat].
 * @returns {Promise<object>} - The GeoJSON route object from the API.
 */
export const fetchRoute = async (startCoords, endCoords) => {
  const url = `${ORS_BASE_URL}/directions/${routingProfile}/geojson`;
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': ORS_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ coordinates: [startCoords, endCoords] }),
    });

    if (!response.ok) {
      console.error("ORS API request failed:", response);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching route from ORS API:", error);
    // In a real app, you'd handle this more gracefully.
    // For the demo, we rely on mock data, so this is a fallback.
    return null;
  }
};