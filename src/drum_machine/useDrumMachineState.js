import React, { useEffect, useRef } from "react";

  export const DrumPad = ({
        source,
        type = 'audio/mpeg',
        title,
        color = '#333',
        name = '',
        volume = 0,
        setCurrentSoundName = (name) => {}
      }) => {
        const audioRef = useRef(null);
       
        const onClick = () => {
          const audio = audioRef.current;
          if (audio) {
            setCurrentSoundName(name);
            audio.volume = volume;
            audio.pause();
            audio.currentTime = 0;
            audio.play();
          }
        }
       
        const handleKeydown = (e) => {
          if(e.keyCode === title.charCodeAt()) {
            onClick();
          }
        }
      
        useEffect(() => {
          document.addEventListener('keydown', handleKeydown);
        }, []);
      
        return (
          <button className='drum-pad' id={title} style={{background: color}} onClick={onClick}>
            {title}
            <audio className="clip" ref={audioRef} id={title} src={source}/>
          </button>
        )
      }
   
