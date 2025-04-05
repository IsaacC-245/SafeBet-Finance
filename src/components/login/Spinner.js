import React, { useRef, useState } from 'react';
import './Spinner.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const segments = [
    '$20', '$25', '$50', '$10', '$20', '$25',
    '$50', 'FREE SPIN!', '$20', '$25', '$50', '$10'
];

const colors = ['#303030', '#683024']; // alternating

const Spinner = () => {
    const wheelRef = useRef(null);
    const [spinning, setSpinning] = useState(false);
    const [rotation, setRotation] = useState(0);

    const spinWheel = () => {
        if (spinning) return;
        const randomSegment = Math.floor(Math.random() * segments.length);
        const anglePerSegment = 360 / segments.length;
        const spins = 5; // full rotations
        const newRotation = (spins * 360) + (360 - randomSegment * anglePerSegment) - (anglePerSegment / 2);

        setSpinning(true);
        setRotation(prev => prev + newRotation);

        setTimeout(() => {
            setSpinning(false);
            alert(`Result: ${segments[randomSegment]}`);
        }, 4000); // duration should match animation
    };

    return (
        <div className="spinner-container">
            <div className="wheel" ref={wheelRef} style={{ transform: `rotate(${rotation}deg)` }}>
                {segments.map((label, i) => {
                    const angle = (360 / segments.length) * i;
                    const bgColor = colors[i % colors.length];
                    return (
                        <div
                            key={i}
                            className="segment"
                            style={{
                                transform: `rotate(${angle}deg)`,
                                backgroundColor: bgColor
                            }}
                        >
                            <span className="label" style={{ transform: `rotate(-${angle}deg)` }}>{label}</span>
                        </div>
                    );
                })}
            </div>
            <div className="center-circle" onClick={spinWheel}>
                SPIN
            </div>
            <div className="pointer" />
        </div>
    );
};

export default Spinner;