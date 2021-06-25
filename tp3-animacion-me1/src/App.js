import React, {useEffect, useState} from 'react';

import gif1 from './img/gif-1.gif';
import gif2 from './img/gif-2.gif';
import gif3 from './img/gif-3.gif';
import gif4 from './img/gif-4.gif';
import gif5 from './img/gif-5.gif';
import gif6 from './img/gif-6.gif';
import gif7 from './img/gif-7.gif';
import gif8 from './img/gif-8.gif';
import gif9 from './img/gif-9.gif';
import gif10 from './img/gif-10.gif';
import gif11 from './img/gif-11.gif';
import gif12 from './img/gif-12.gif';
import gif13 from './img/gif-13.gif';

import audio1 from './sounds/audio1.mp3';

import play from './img/play.svg';
import pause from './img/pause.svg';

import './App.css';


function App() {

  const [sound1, setSound1] = useState(false);

  useEffect(() => {
    
    const prueba1 = document.getElementById('sound-1');

    sound1 ? prueba1?.play() : prueba1?.pause();

  }, [sound1])
  

  return (
    <div className="App">

      <div className="title">
        <h1>"El trato"</h1>

        <div className="botonera">

          <div className="boton">
            <audio loop id="sound-1">
                <source src={audio1} type="audio/mpeg"/>
            </audio>
            <img 
              src={!sound1 ? play : pause}
              onClick={() => sound1 ? setSound1(false) : setSound1(true)} 
              className="boton-1" 
              alt="boton-1"
            />
          </div>

        </div>
      </div>

      <div className="row row-1">
        <img src={gif1} className="gif-1" alt="gif-1"/>
        <img src={gif2} className="gif-2" alt="gif-2"/>
      </div>

      <div className="row row-2">
        <img src={gif3} className="gif-3" alt="gif-3"/>
      </div>

      <div className="row row-3">
        <img src={gif4} className="gif-4" alt="gif-4"/>
        <img src={gif5} className="gif-5" alt="gif-5"/>
      </div>

      <div className="row row-4">
        <img src={gif6} className="gif-6" alt="gif-6"/>
        <img src={gif7} className="gif-7" alt="gif-7"/>
      </div>

      <div className="row row-5">
        <img src={gif8} className="gif-8" alt="gif-8"/> 
      </div>

      <div className="row row-6">
        <img src={gif9} className="gif-9" alt="gif-9"/>
        <img src={gif10} className="gif-10" alt="gif-10"/> 
        <img src={gif11} className="gif-11" alt="gif-11"/>
      </div>

      <div className="row row-7">
        <img src={gif12} className="gif-12" alt="gif-12"/>
      </div>

      <div className="row row-7">
        <img src={gif13} className="gif-13" alt="gif-13"/>
      </div>
      
    </div>
  );
}

export default App;
