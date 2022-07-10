import React, { useRef, useEffect, useState } from 'react';
import './MapSide.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoiZWFnbGVlYWdsZSIsImEiOiJjbDR2bnM1ZWIxbHlzM2VrMmZva2hyaGplIn0.bJV4W9qryvFCQKf55Q66qw';

function MapSide() {

        const mapContainer = useRef(null);
        const map = useRef(null);
        const [lng, setLng] = useState(122.367428);
        const [lat, setLat] = useState(11.689224);
        const [zoom, setZoom] = useState(6);

        useEffect(() => {
            if (map.current) return; // initialize map only once
            map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/eagleeagle/cl4vrp6yc002h15o2znowpcw9',  
            center: [lng, lat],
            zoom: zoom
            });
        });
        
        return (
            <div className='allofmap'>
              <div ref={mapContainer} className="map-container" />
            </div>
          );
}

export default MapSide