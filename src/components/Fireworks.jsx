import React from "react";
import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";

class Light extends React.PureComponent {
    async customInit(engine) {
        await loadFireworksPreset(engine);
    }

    render() {
        const options = {
            preset: "fireworks",
            "emitters": {
                "autoPlay": true,
                "fill": true,
                "life": {
                    "wait": false,
                    "count": 0,
                    "delay": 0.1,
                    "duration": 0.1
                },
                "rate": {
                    "quantity": 3,
                    "delay": 0.5
                },
                "shape": "square",
                "startCount": 0,
                "size": {
                    "mode": "percent",
                    "height": 0,
                    "width": 100
                },
                "direction": "top",
                "particles": {},
                "position": {
                    "x": 50,
                    "y": 100
                }
            },
        };

        return <Particles options={options} init={this.customInit} />;
    }
}

export default Light;
