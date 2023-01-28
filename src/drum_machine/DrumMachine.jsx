import React, { useState } from "react";
import { PADS } from "./constants";
import { DrumPad } from "./DrumPad/DrumPad";
import "./DrumMachine.css"

const DrumMachine = () => {

  const [state, setState] = useState({
    currentSoundName: '',
    volume: 1,
    keyToPlay: ''
  })

  const setCurrentSoundName = (currentSoundName) => {
    setState((prevState) => ({
      ...prevState,
      currentSoundName
    }))
  }

  const setVolume = (event) => {
    setState((prevState) => ({
      ...prevState,
      volume: +event.target.value
    }))
  }

  return (
    <div id="drum-machine">
      <h1 className="text">Drum Machine</h1>
      <div className="display-container">
        <div id="display-pads">
          {PADS.map(el => (
            <DrumPad
              key={el.title}
              setCurrentSoundName={setCurrentSoundName}
              volume={state.volume}
              {...el}
            />
          ))}
        </div>
        <div className="display-container-right">
          <div id="display">{state.currentSoundName}</div>
          <div id="volume-slider">
            <input min="0" max="1" step="0.1" type="range" value={state.volume} onChange={setVolume} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DrumMachine;

