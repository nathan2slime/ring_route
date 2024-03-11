'use client';

import L, { LatLng, map, Marker, tileLayer } from 'leaflet';
import { MutableRefObject, useEffect, useRef, useState } from 'react';

import { MapProps } from './model';

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';

import './styles.scss';

export const Map = ({ type, onMarker }: MapProps) => {
  const [loaded, setLoaded] = useState(false);
  const [marker, setMarker] = useState<Marker | null>();

  const ref: MutableRefObject<HTMLDivElement | null> = useRef(null);

  const position = {
    lat: 51.505,
    lng: -0.09,
  } as LatLng;

  useEffect(() => {
    if (loaded) return;
    const el = ref.current;

    if (el) {
      const app = map(el, {
        center: [51.505, -0.09],
        fadeAnimation: true,
        zoom: 13,
      });
      setLoaded(true);
      tileLayer(
        'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
        {
          maxZoom: 19,
        },
      ).addTo(app);

      if (type == 'mark') {
        app.on('click', e => {
          const currentMarker = L.marker(e.latlng);
          app.addLayer(currentMarker);

          if (currentMarker) {
            setMarker(marker => {
              marker && app.removeLayer(marker);
              return currentMarker;
            });

            onMarker && onMarker(e.latlng);
          }
        });
      }
    }
  }, [ref]);

  return (
    <div className="w-full h-full">
      <div className="w-full h-full" ref={ref} />
    </div>
  );
};
