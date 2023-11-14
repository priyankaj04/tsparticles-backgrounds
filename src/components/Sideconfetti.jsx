import React, { useCallback } from 'react'
import Particles from "react-particles";
import { loadFull } from "tsparticles";

function Tunnel() {
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
                "emitters": [
                    {
                        "position": {
                            "x": 0,
                            "y": 30
                        },
                        "rate": {
                            "quantity": 25,
                            "delay": 1.5
                        },
                        "particles": {
                            "move": {
                                "direction": "top-right",
                                "outModes": {
                                    "top": "none",
                                    "left": "none",
                                    "default": "destroy"
                                }
                            }
                        }
                    },
                    {
                        "position": {
                            "x": 100,
                            "y": 30
                        },
                        "rate": {
                            "quantity": 25,
                            "delay": 1.5
                        },
                        "particles": {
                            "move": {
                                "direction": "top-left",
                                "outModes": {
                                    "top": "none",
                                    "right": "none",
                                    "default": "destroy"
                                }
                            }
                        }
                    }
                ],
                "particles": {
                    "color": {
                        "value": [
                            "FFC0CB", "FF69B4", "FF1493", "C71585"
                        ]
                    },
                    "move": {
                        "decay": 0.05,
                        "direction": "top",
                        "enable": true,
                        "gravity": {
                            "enable": true
                        },
                        "outModes": {
                            "top": "none",
                            "default": "destroy"
                        },
                        "speed": {
                            "min": 10,
                            "max": 50
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
                        "value": {
                            "min": 0,
                            "max": 2
                        },
                        "animation": {
                            "enable": true,
                            "startValue": "min",
                            "count": 1,
                            "speed": 16,
                            "sync": true
                        }
                    },
                    "roll": {
                        "darken": {
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
                            "min": -7,
                            "max": 7
                        }
                    },
                    "shape": {
                        "type": "character",
                        "options": {
                            "character": {
                                "fill": true,
                                "font": "Verdana",
                                "style": "",
                                "weight": 400,
                                "particles": {
                                    "size": {
                                        "value": 8
                                    }
                                },
                                "value": [
                                    "❤"
                                ]
                            }
                        }
                    }
                }
            }}
            init={particlesInit} />
    )
}

export default Tunnel