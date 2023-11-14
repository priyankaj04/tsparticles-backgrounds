import React, { useState } from 'react';
import './App.css';
import Tunnel from './components/Tunnel';
import Default from './components/Default';
import Colors from './components/Colors';
import Amongus from './components/Amongus';
import Confetti from './components/Confetti';
import ConfettiExplosion from './components/ConfettiExplosion';
import Fireworks from './components/Fireworks';
import PolygonMask from './components/PolygonMask';
import SeaAnemone from './components/SeaAnemone';
import Sideconfetti from './components/Sideconfetti';
import Parallax from './components/Parallax';
import Hyperspace from './components/Hyperspace';
import Hexagon from './components/Hexagon';

function App() {
    const [page, setPage] = useState('link')

    return (
        <div className="App">
            {
                page === 'link' && <Default/>
            }
            {
                page === 'tunnel' && (<Tunnel />)
            }
            {
                page === 'amongus' && <Amongus />
            }
            {
                page === 'colors' && <Colors />
            }
            {
                page === 'confetti' && <Confetti />
            }
            {
                page === 'confettiexplosion' && <ConfettiExplosion />
            }
            {
                page === 'fireworks' && <Fireworks />
            }
            {
                page === 'polygonmask' && <PolygonMask />
            }
            {
                page === 'seaanemone' && <SeaAnemone />
            }
            {
                page === 'sideconfetti' && <Sideconfetti />
            }
            {
                page === 'parallax' && <Parallax />
            }
            {
                page === 'hyperspace' && <Hyperspace />
            }
            {
                page === 'hexagon' && <Hexagon />
            }
            <div style={{color:'white'}}>
                    <select onChange={(e) => { setPage(e.target.value)}} style={{width: 250, padding: 8, borderRadius: 10, fontSize: 16, margin: 10}}>
                        <option value="link">Default</option>
                        <option value="tunnel">Tunnel</option>
                        <option value="colors">Colors</option>
                        <option value="amongus">Amongus</option>
                        <option value="confetti">Confetti</option>
                        <option value="confettiexplosion">Confetti Explosion</option>
                        <option value="fireworks">Fireworks</option>
                        <option value="polygonmask">Polygon Mask</option>
                        <option value="seaanemone">Sea Anemone</option>
                        <option value="sideconfetti">Side Confetti</option>
                        <option value="parallax">Parallax</option>
                    <option value="hyperspace">Hyperspace</option>
                    <option value="hexagon">Hexagon</option>
                </select>
                <h2 style={{fontSize: 38, fontFamily: 'sans-serif'}}>TechTangoo <span style={{color:'#407BFF'}}>{"</>"}</span></h2>
            </div>
        </div>
    );
}

export default App;
