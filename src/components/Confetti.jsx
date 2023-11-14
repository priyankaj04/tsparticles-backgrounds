import React, { useCallback } from 'react'
import Particles from "react-particles";
import { loadFull } from "tsparticles";

function Confetti() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])
    return (
        <Particles
            options=
            {{
                "background": {
                    "color": {
                        "value": "#000"
                    },
                    "image": "",
                    "position": "",
                    "repeat": "",
                    "size": "",
                    "opacity": 1
                },
                "fullScreen": {
                    "zIndex": 1
                },
                "emitters": {
                    "position": {
                        "x": 50,
                        "y": 50
                    },
                    "rate": {
                        "quantity": 55,
                        "delay": 1.5
                    }
                },
                "particles": {
                    "color": {
                        "value": 
                            ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"]
                        
                    },
                    "move": {
                        "decay": 0.05,
                        "direction": "center",
                        "enable": true,
                        "gravity": {
                            "enable": true
                        },
                        "outModes": {
                            "top": "none",
                            "default": "destroy"
                        },
                        "speed": {
                            "min": 50,
                            "max": 100
                        }
                    },
                    "number": {
                        "value": 0
                    },
                    "opacity": {
                        "value": 1
                    },
                    "rotate": {
                        "value": {
                            "min": 0,
                            "max": 360
                        },
                        "direction": "random",
                        "animation": {
                            "enable": true,
                            "speed": 30
                        }
                    },
                    "tilt": {
                        "direction": "random",
                        "enable": true,
                        "value": {
                            "min": 0,
                            "max": 360
                        },
                        "animation": {
                            "enable": true,
                            "speed": 30
                        }
                    },
                    "size": {
                        "value": 3,
                        "animation": {
                            "enable": true,
                            "startValue": "min",
                            "count": 5,
                            "speed": 16,
                            "sync": true
                        }
                    },
                    "roll": {
                        "darken": {
                            "enable": true,
                            "value": 25
                        },
                        "enlighten": {
                            "enable": true,
                            "value": 25
                        },
                        "enable": true,
                        "speed": {
                            "min": 5,
                            "max": 15
                        }
                    },
                    "wobble": {
                        "distance": 30,
                        "enable": true,
                        "speed": {
                            "min": -3,
                            "max": 3
                        }
                    },
                    "shape": {
                        "type": [
                            "star",'circle','heart'
                        ],
                        "options": {}
                    }
                },
                "responsive": [
                    {
                        "maxWidth": 1024,
                        "options": {
                            "particles": {
                                "move": {
                                    "speed": {
                                        "min": 20,
                                        "max": 40
                                    }
                                }
                            }
                        }
                    }
                ]
            }}
            init={particlesInit} />
    )
}

export default Confetti