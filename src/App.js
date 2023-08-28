import React, { useEffect } from 'react'; // Import React and useEffect
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

function App() {
  useEffect(() => { // Use useEffect to handle DOM manipulation
    const panels = document.querySelectorAll('.panel');

    function handlePanelClick(panel) {
      removeActiveClasses();
      panel.classList.add('active');
      console.log(panel);
    }

    function removeActiveClasses() {
      panels.forEach(panel => {
        panel.classList.remove('active');
      });
    }

    panels.forEach(panel => {
      panel.addEventListener('click', () => handlePanelClick(panel));
    });

    return () => { // Cleanup event listeners
      panels.forEach(panel => {
        panel.removeEventListener('click', () => handlePanelClick(panel));
      });
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="App">
      <h1>Expanding Cards</h1>

      <div className='img-container d-flex justify-content-center'>
        <div className='img-container__img-box panel'>
          <p className='panel__text'>Image 1</p>
        </div>
        <div className='img-container__img-box panel'>
          <p className='panel__text'>Image 2</p>
        </div>
        <div className='img-container__img-box panel'>
          <p className='panel__text'>Image 3</p>
        </div >
        <div className='img-container__img-box panel'>
          <p className='panel__text'>Image 4</p>
        </div>
        <div className='img-container__img-box panel'>
          <p className='panel__text'>Image 5</p>
        </div>
      </div>
    </div>
  );
}

export default App;
