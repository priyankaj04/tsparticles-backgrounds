import React from "react";
import Particles from "react-particles";
import { loadHyperspacePreset } from "tsparticles-preset-hyperspace";

class Hyperspace extends React.PureComponent {
    async customInit(engine) {
        await loadHyperspacePreset(engine);
    }

    render() {
        const options = {
            preset: "hyperspace",
        };

        return <Particles options={options} init={this.customInit} />;
    }
}

export default Hyperspace;
