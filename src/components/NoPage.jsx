import React, { Component, useState } from "react";
import WheelComponent from 'react-wheel-of-prizes';

const NoPage = () => {
    const segments = ['Prize 1', 'Prize 2', 'Prize 3', 'Prize 4', 'Prize 5'];
    const segColors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF'];
    const onFinished = (winner) => {
        alert(`You won: ${winner}`);
    };
    return(
        <div style={{ width: 500, margin: '0 auto', marginTop: '50px' }}>
            <WheelComponent
                segments={segments}
                segColors={segColors}
                winningSegment=""
                onFinished={(winner) => onFinished(winner)}
                primaryColor="black"
                contrastColor="white"
                buttonText="Spin"
                isOnlyOnce={false}
                size={290}
                upDuration={100}
                downDuration={1000}
                fontFamily="Arial"
            />
        </div>
    );
};

export default NoPage;