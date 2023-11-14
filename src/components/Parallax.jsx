import React, { useCallback } from 'react'
import Particles from "react-particles";
import { loadFull } from "tsparticles";


function Default() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])
    return (
        <Particles options={{
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
            particles: {
                number: {
                    value: 100,
                    density: {
                        enable: true,
                        value_area: 800,
                    },
                },
                color: {
                    value: "#ff0000",
                    animation: {
                        enable: true,
                        speed: 20,
                        sync: true,
                    },
                },
                shape: {
                    type: ["square","circle","triangle"],
                    stroke: {
                        width: 0,
                        color: "#000000",
                    },
                    polygon: {
                        nb_sides: 6,
                    },
                },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.5,
                        sync: false,
                    },
                },
                size: {
                    value: 5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.8,
                        sync: false,
                    },
                },
                line_linked: {
                    enable_auto: true,
                    distance: 100,
                    color: "random",
                    opacity: 0.4,
                    width: 1,
                    condensed_mode: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 600,
                    },
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200,
                    },
                },
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab",
                    },
                    onclick: {
                        enable: true,
                        mode: "push",
                    },
                    resize: true,
                },
                modes: {
                    grab: {
                        distance: 150,
                        line_linked: {
                            opacity: 1,
                        },
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                    push: {
                        particles_nb: 4,
                    },
                    remove: {
                        particles_nb: 2,
                    },
                },
            },
            retina_detect: true,
        }} init={particlesInit} />
    )
}

export default Default