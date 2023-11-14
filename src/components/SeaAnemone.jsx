import React from "react";
import Particles from "react-particles";
import { loadSeaAnemonePreset } from "tsparticles-preset-sea-anemone";

class SeaAnemone extends React.PureComponent {
    async customInit(engine) {
        await loadSeaAnemonePreset(engine);
    }

    render() {
        const options = {
            preset: "seaAnemone",
        };

        return <Particles options={options} init={this.customInit} />;
    }
}

export default SeaAnemone;
