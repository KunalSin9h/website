"use client";

import { useEffect } from "react";

export default function PlayClickSound() {
    useEffect(() => {
        const clickSound = new Audio("/click.wav");

        const handleClick = () => {
            clickSound.currentTime = 0;
            clickSound.play();
        };
  
        document.addEventListener('click', handleClick);
  
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [])
    return <></>;
}