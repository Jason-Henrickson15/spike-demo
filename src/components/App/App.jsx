import React from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';
import { useState } from 'react';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <GalleryList />
    </div>
  );
}

export default App;
