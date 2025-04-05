import React from 'react';
import "./HomeTesting.css"

const HomeTesting = () => {
    return (
        <div className="split-container">
            {/* Left Side */}
            <div className="half-column">
                <div className="row">Left Row 1</div>
                <div className="row">Left Row 2</div>
                <div className="row">Left Row 3</div>
            </div>

            {/* Right Side */}
            <div className="half-column">
                <div className="row">Right Row 1</div>
                <div className="row">Right Row 2</div>
                <div className="row">Right Row 3</div>
            </div>
        </div>
    );
};

export default HomeTesting;