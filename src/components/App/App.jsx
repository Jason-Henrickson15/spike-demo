import React from 'react';
import './App.css';
import ImageSlideshow from '../ImageSlideshow/ImageSlideshow.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Image Slide Show Demo</h1>
      </header>
      <h2>Images go here</h2>
      <ImageSlideshow />
    </div>
  );
}

export default App;
