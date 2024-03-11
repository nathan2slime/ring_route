import { LatLng } from 'leaflet';

export type MapProps = {
  type: 'mark' | 'view';
  onMarker?: (e: LatLng) => void;
};
