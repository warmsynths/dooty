import L from 'leaflet';

/**
 * Creates a Leaflet tile layer for CartoDB Voyager tiles,
 * appending the CARTO API key if provided via VITE_CARTO_API_KEY.
 */
export function createCartoTileLayer(options: L.TileLayerOptions = {}): L.TileLayer {
  const apiKey = (import.meta as any).env?.VITE_CARTO_API_KEY?.trim() || '';
  const url = apiKey
    ? `https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png?key=${apiKey}`
    : 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png';

  return L.tileLayer(url, {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://carto.com/">CARTO</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    ...options,
  });
}
