// import React from "react";
import '../components/Cards.css';
import React, { useEffect } from 'react'; // Import React and useEffect

function Cards() {
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

    // Remove all active when any where is click
    return (
        <div className='img-container d-flex justify-content-center'>
            <div className='img-container__img-box panel img-1'>
                <p className='panel__text'>Embrace each new day with a heart full of gratitude and a mind open to possibilities. Your journey is unique, and every step you take brings you closer to your dreams.</p>
            </div>
            <div className='img-container__img-box panel img-2'>
                <p className='panel__text'>Believe in your own strength, for within you lies the power to overcome any challenge. Even in the face of adversity, your resilience will guide you to success.</p>
            </div>
            <div className='img-container__img-box panel img-3'>
                <p className='panel__text'>Challenges are not roadblocks, but rather stepping stones towards growth. Embrace them as opportunities to learn, evolve, and become the best version of yourself.</p>
            </div >
            <div className='img-container__img-box panel img-4'>
                <p className='panel__text'>Your dreams are the blueprints of your future. Let your passion fuel your actions, and never underestimate the impact your dedication can have on turning those dreams into reality.</p>
            </div>
            <div className='img-container__img-box panel img-5'>
                <p className='panel__text'>Kindness is a language that transcends barriers. A small act of kindness has the potential to create a ripple effect, touching lives in ways you may never fully comprehend.</p>
            </div>
            <div className='img-container__img-box panel img-6'>
                <p className='panel__text'>Success is not solely defined by achievements, but also by the positive impact you have on others and the world around you. Strive to leave a legacy of compassion, inspiration, and positive change.</p>
            </div>
            <div className='img-container__img-box panel img-7'>
                <p className='panel__text'>In the tapestry of life, both joys and sorrows weave together to create a beautiful and meaningful existence. Embrace each experience, for they contribute to the masterpiece that is your life story.</p>
            </div>
        </div>
    );
}

export default Cards;