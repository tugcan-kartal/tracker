import logo from './logo.svg';
import './App.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import Navbar from './components/Navbar';
import MapSide from './components/MapSide';
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import SelectSide from './components/SelectSide';

mapboxgl.accessToken = 'pk.eyJ1IjoiZWFnbGVlYWdsZSIsImEiOiJjbDR2bnM1ZWIxbHlzM2VrMmZva2hyaGplIn0.bJV4W9qryvFCQKf55Q66qw';

function App() {

  const [styleofmap,setstyleofmap]=useState([]);

  return (
    <div className="App">
      
      <Navbar />
      <div className='allcontent'>
        <SelectSide />
        <MapSide />
      </div>
      
    </div>
  );
}

export default App;
