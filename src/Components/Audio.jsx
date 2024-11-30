import React, { useRef, useState } from 'react';
import { BsPauseCircleFill, BsPlayCircleFill } from 'react-icons/bs';
import song from "../assets/song.mp3";

function Audio() {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        if (audioRef.current.paused) {
            audioRef.current.play();
            setIsPlaying(true);
        } else {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    return (
        <div className='fixed bottom-4 right-6 z-20'>
            <audio ref={audioRef} src={song} autoPlay />
            <button
                onClick={handlePlayPause}
                className=' text-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-2 rounded-full  text-white' >
                {isPlaying ? <BsPauseCircleFill className=' animate-spin' /> : <BsPlayCircleFill />}
            </button>

        </div>
    );
}

export default Audio;
