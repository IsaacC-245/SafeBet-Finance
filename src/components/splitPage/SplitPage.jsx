import React from 'react';
import "./SplitPage.css"

const SplitPage = () => {
    return (
        <div className="split-container">
            <div className="half-column">
                <div className="row">Left Row 1</div>
                <div className="row">Left Row 2</div>
                <div className="row">Left Row 3</div>
            </div>
            <div className="half-column">
                <div className="row">Right Row 1</div>
                <div className="row">Right Row 2</div>
                <div className="row">Right Row 3</div>
            </div>
        </div>
    );
};

export default SplitPage;