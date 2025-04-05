import React, { useRef } from "react";

const HoverAudio = ({ src, children, enabled }) => {
    const audioRef = useRef(null);

    const handleMouseEnter = () => {
        if (enabled && audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(() => {});
        }
    };

    const handleMouseLeave = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    };

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {children}
            <audio ref={audioRef} src={src} />
        </div>
    );
};

export default HoverAudio;