import React, { useEffect, useRef, useState } from 'react';
import './rouletteSpinner.css'; 

const RouletteSpinner = () => {
  const [isBusy, setIsBusy] = useState(false);
  const [spinnerAngle, setSpinnerAngle] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const spinnerRef = useRef(null);
  const bis = useRef(false);

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

  // Function to spin the wheel
  const spin = (_index) => {
    if (isBusy) return;

    const count = data.length;
    const delta = 360 / count;
    const index = !isNaN(parseInt(_index)) ? parseInt(_index) : parseInt(Math.random() * count);
    
    const a = index * delta + ((bis.current) ? 1440 : -1440);
    
    bis.current = !bis.current;
    setCurrentIndex(index);
    
    // Begin spin
    setIsBusy(true);
    console.log('spin start!');
    
    // Animate the spinner rotation
    if (spinnerRef.current) {
      spinnerRef.current.style.transition = 'transform 1000ms cubic-bezier(0.23, 1, 0.32, 1)';
      spinnerRef.current.style.transform = `rotateZ(${a}deg)`;
      
      // Set timeout to match the animation duration
      setTimeout(() => {
        setIsBusy(false);
        console.log('spin end! -->' + index);
      }, 1000);
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
  }, []);

  // Handle random spin
  const handleRandomSpin = () => {
    spin();
  };

  // Handle specific index spin
  const handleSpecificSpin = (index) => {
    spin(index);
  };

  return (
    <div className="roulette-container">
      {/*<div className="controls">*/}
      {/*  <button onClick={handleRandomSpin}>RND</button>*/}
      {/*  <button onClick={() => handleSpecificSpin(0)}>0</button>*/}
      {/*</div>*/}
      
      <div className={`roulette ${isBusy ? 'busy' : ''}`}>
        <div className="spinner" ref={spinnerRef}></div>
        <div className="shadow"></div>
        <div className="markers">
          <div className="triangle"></div>
        </div>
        <div className="button" onClick={() => handleSpecificSpin(0)}>
          <span>SPIN</span>
        </div>
      </div>
    </div>
  );
};

export default RouletteSpinner;