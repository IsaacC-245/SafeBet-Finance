import React, { useEffect, useRef, useState } from 'react';
import './infiniteSpinner.css';

const InfiniteSpinner = () => {
  const [isBusy, setIsBusy] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const spinnerRef = useRef(null);
  const animationRef = useRef(null);
  const rotationAngle = useRef(0);
  const isInitialMount = useRef(true);

  // Spinner data
  const data = [
    { id: '', type: 'quiz', color: '#303030', text: '$20' },
    { id: '', type: 'quiz', color: '#683024', text: '$25' },
    { id: '', type: 'quiz', color: '#303030', text: '$50' },
    { id: '', type: 'quiz', color: '#683024', text: '$10' },
    { id: '', type: 'quiz', color: '#303030', text: '$20' },
    { id: '', type: 'quiz', color: '#683024', text: '$25' },
    { id: '', type: 'quiz', color: '#303030', text: '$50' },
    { id: '', type: 'quiz', color: '#683024', text: '$10' },
    { id: '', type: 'quiz', color: '#303030', text: '$20' },
    { id: '', type: 'quiz', color: '#683024', text: '$25' },
    { id: '', type: 'quiz', color: '#303030', text: '$50' },
    { id: '', type: 'replay', color: '#683024', text: 'FREE SPIN!' }
  ];

  const options = {
    angleOffset: -90
  };

  // Function to begin infinite spinning
  const startSpinning = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setIsBusy(true);

    // Remove any existing transition
    if (spinnerRef.current) {
      spinnerRef.current.style.transition = 'none';
    }

    // Start the animation loop
    animateSpinner();
  };

  // Function to stop spinning
  const stopSpinning = (_index) => {
    if (!isSpinning) return;

    // Cancel the animation frame
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }

    const count = data.length;
    const delta = 360 / count;
    const index = !isNaN(parseInt(_index)) ? parseInt(_index) : parseInt(Math.random() * count);

    // Calculate the angle needed to stop at the selected index
    const targetAngle = rotationAngle.current - (rotationAngle.current % 360) + (360 - (index * delta));

    // Apply smooth deceleration
    if (spinnerRef.current) {
      spinnerRef.current.style.transition = 'transform 3000ms cubic-bezier(0.23, 1, 0.32, 1)';
      spinnerRef.current.style.transform = `rotateZ(${targetAngle + 1080}deg)`; // Add 3 more rotations before stopping

      // Update the rotation angle
      rotationAngle.current = targetAngle + 1080;

      // Set timeout to match the deceleration duration
      setTimeout(() => {
        setIsSpinning(false);
        setIsBusy(false);
        setCurrentIndex(index);
        console.log('spin end! -->' + index);
      }, 3000);
    }
  };

  // Animation function for continuous spinning
  const animateSpinner = () => {
    if (!spinnerRef.current) return;

    // Increment rotation angle
    rotationAngle.current += 3; // Adjust speed as needed

    // Apply rotation
    spinnerRef.current.style.transform = `rotateZ(${rotationAngle.current}deg)`;

    // Continue animation
    animationRef.current = requestAnimationFrame(animateSpinner);
  };

  // Function to spin and eventually stop
  const spin = (_index) => {
    if (isBusy) return;

    if (!isSpinning) {
      // Start spinning
      startSpinning();

      // Set timeout to stop after a random duration (3-5 seconds)
      const spinDuration = 3000 + Math.random() * 2000;
      setTimeout(() => {
        stopSpinning(_index);
      }, spinDuration);
    } else {
      // Already spinning, just schedule the stop
      stopSpinning(_index);
    }
  };

  // Render spinner items
  useEffect(() => {
    const renderSpinnerItems = () => {
      if (!spinnerRef.current) return;

      const spinnerElement = spinnerRef.current;
      const D = 400; // Diameter - defined in CSS
      const R = D * 0.5; // Radius
      const count = data.length;
      const delta = 360 / count;

      // Clear any existing items
      spinnerElement.innerHTML = '';

      // Add items to spinner
      data.forEach((item, i) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('item');
        itemElement.setAttribute('data-index', i);
        itemElement.setAttribute('data-type', item.type);

        const labelElement = document.createElement('span');
        labelElement.classList.add('label');

        if (item.ikon) {
          const iconElement = document.createElement('i');
          iconElement.classList.add('material-icons');
          iconElement.textContent = item.ikon;
          labelElement.appendChild(iconElement);
        }

        const textElement = document.createElement('span');
        textElement.classList.add('text');
        textElement.textContent = item.text;
        labelElement.appendChild(textElement);

        itemElement.appendChild(labelElement);

        // Set styles
        const borderTopWidth = D + D * 0.0025;
        const deltaInRadians = delta * Math.PI / 180;
        const borderRightWidth = D / (1 / Math.tan(deltaInRadians));

        const r = delta * (count - i) + options.angleOffset - delta * 0.5;

        itemElement.style.borderTopWidth = `${borderTopWidth}px`;
        itemElement.style.borderRightWidth = `${borderRightWidth}px`;
        itemElement.style.transform = `scale(2) rotate(${r}deg)`;
        itemElement.style.borderTopColor = item.color;

        const textHeight = parseInt(((2 * Math.PI * R) / count) * 0.5);

        labelElement.style.transform = `translateY(${D * -0.25}px) translateX(${textHeight * 1.03}px) rotateZ(${90 + delta * 0.5}deg)`;
        labelElement.style.height = `${textHeight}px`;
        labelElement.style.lineHeight = `${textHeight}px`;
        labelElement.style.textIndent = `${R * 0.1}px`;

        spinnerElement.appendChild(itemElement);
      });

      // Set font size based on radius
      spinnerElement.style.fontSize = `${parseInt(R * 0.06)}px`;
    };

    renderSpinnerItems();

    // Auto-start spinning after rendering the spinner items
    if (isInitialMount.current) {
      isInitialMount.current = false;

      // Small delay to ensure spinner is fully rendered
      setTimeout(() => {
        startSpinning();
      }, 100);
    }

    // Clean up animation when component unmounts
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Handle random spin
  const handleRandomSpin = () => {
    spin();
  };

  // Handle specific index spin
  const handleSpecificSpin = (index) => {
    spin(index);
  };

  // Handle continuous spinning toggle
  const handleInfiniteSpin = () => {
    if (isSpinning) {
      stopSpinning(Math.floor(Math.random() * data.length));
    } else {
      startSpinning();
    }
  };

  return (
      <div className="roulette-container">
        <div className="controls">
          {/*<button onClick={handleRandomSpin}>RND</button>*/}
          {/*<button onClick={() => handleSpecificSpin(0)}>0</button>*/}
          {/*<button onClick={handleInfiniteSpin}>*/}
          {/*  {isSpinning ? 'STOP' : 'INFINITE SPIN'}*/}
          {/*</button>*/}
        </div>

        <div className={`roulette ${isBusy ? 'busy' : ''}`}>
          <div className="spinner" ref={spinnerRef}></div>
          <div className="shadow"></div>
          <div className="markers">
            <div className="triangle"></div>
          </div>
          <div className="button" onClick={handleRandomSpin}>
            <span>CREATE AN ACCOUNT<br></br>TO SPIN</span>
          </div>
        </div>
      </div>
  );
};

export default InfiniteSpinner;