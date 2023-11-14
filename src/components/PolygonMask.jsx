import React, { useCallback,useEffect } from "react";
import Particles from "react-particles";
import { tsParticles } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { loadPolygonMaskPlugin } from "tsparticles-plugin-polygon-mask";

function Light() {

    const options = {
        "autoPlay": true,
        "background": {
            "color": {
                "value": "#000000"
            },
            "image": "",
            "position": "50% 50%",
            "repeat": "no-repeat",
            "size": "cover",
            "opacity": 1
        },
        "backgroundMask": {
            "composite": "destination-out",
            "cover": {
                "color": {
                    "value": "#fff"
                },
                "opacity": 1
            },
            "enable": false
        },
        "defaultThemes": {},
        "delay": 0,
        "fullScreen": {
            "enable": true,
            "zIndex": 1
        },
        detectRetina: false,
        fpsLimit: 60,
        interactivity: {
            detectsOn: "windows",
            events: {
                onHover: {
                    enable: true,
                    mode: "bubble",
                },
                resize: true,
            },
            modes: {
                bubble: {
                    distance: 40,
                    duration: 2,
                    opacity: 8,
                    size: 6,
                    speed: 3,
                },
            },
        },
        particles: {
            color: {
                value: "#ff0000",
                animation: {
                    enable: true,
                    speed: 20,
                    sync: true,
                },
            },
            lineLinked: {
                blink: false,
                color: "random",
                consent: false,
                distance: 70,
                enable: true,
                opacity: 0.5,
                width: 0.5,
            },
            move: {
                attract: {
                    enable: false,
                    rotate: {
                        x: 600,
                        y: 1200,
                    },
                },
                bounce: false,
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: true,
                speed: 0.5,
                straight: false,
            },
            number: {
                density: {
                    enable: false,
                    area: 5000,
                },
                limit: 0,
                value: 500,
            },
            opacity: {
                animation: {
                    enable: true,
                    minimumValue: 0.5,
                    speed: 2,
                    sync: false,
                },
                random: false,
                value: 1,
            },
            shape: {
                type: "circle",
            },
            size: {
                animation: {
                    enable: false,
                    minimumValue: 0.1,
                    speed: 40,
                    sync: false,
                },
                random: true,
                value: 1,
            },
        },
        "polygon": {
            "draw": {
                "enable": true,
                "stroke": {
                    "color": {
                        "value": "rgba(255,255,255,0.2)"
                    },
                    "width": 0.8,
                    "opacity": 0.7
                }
            },
            "enable": true,
            "inline": {
                "arrangement": "equidistant"
            },
            "move": {
                "radius": 0,
                "type": "path"
            },
            "scale": 1,
            "type": "inline",
            "url": "https://particles.js.org/images/smalldeer.svg"
        }
    };

    const particlesInit = useCallback(main => {
        loadFull(main);
        loadPolygonMaskPlugin(tsParticles)
    }, [])

    useEffect(() => {
        loadPolygonMaskPlugin(tsParticles);
    })

    function callitself() {
        loadPolygonMaskPlugin(tsParticles);
    }

    callitself();

    return (
        <Particles options={options} init={particlesInit} />
    );
}

export default Light;
