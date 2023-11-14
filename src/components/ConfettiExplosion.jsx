import React, { useCallback } from 'react'
import Particles from "react-particles";
import { loadFull } from "tsparticles";

function ConfettiExplosion() {
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
                "particles": {
                    "number": {
                        "value": 0
                    },
                    "color": {
                        "value": [
                            "#00FFFC",
                            "#FC00FF",
                            "#fffc00"
                        ]
                    },
                    "shape": {
                        "type": [
                            "character",
                            "image"
                        ],
                        "options": {
                            "polygon": [
                                {
                                    "sides": 5
                                },
                                {
                                    "sides": 6
                                }
                            ],
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
                                    "💩",
                                    "🤡",
                                    "🍀",
                                    "🍙",
                                    "🦄",
                                    "⭐️"
                                ]
                            },
                            "image": [
                                {
                                    "src": "https://particles.js.org/images/fruits/apple.png",
                                    "width": 32,
                                    "height": 32,
                                    "particles": {
                                        "size": {
                                            "value": 16
                                        }
                                    }
                                },
                                {
                                    "src": "https://particles.js.org/images/fruits/avocado.png",
                                    "width": 32,
                                    "height": 32,
                                    "particles": {
                                        "size": {
                                            "value": 16
                                        }
                                    }
                                },
                                {
                                    "src": "https://particles.js.org/images/fruits/banana.png",
                                    "width": 32,
                                    "height": 32,
                                    "particles": {
                                        "size": {
                                            "value": 16
                                        }
                                    }
                                },
                                {
                                    "src": "https://particles.js.org/images/fruits/berries.png",
                                    "width": 32,
                                    "height": 32,
                                    "particles": {
                                        "size": {
                                            "value": 16
                                        }
                                    }
                                },
                                {
                                    "src": "https://particles.js.org/images/fruits/cherry.png",
                                    "width": 32,
                                    "height": 32,
                                    "particles": {
                                        "size": {
                                            "value": 16
                                        }
                                    }
                                },
                                {
                                    "src": "https://particles.js.org/images/fruits/grapes.png",
                                    "width": 32,
                                    "height": 32,
                                    "particles": {
                                        "size": {
                                            "value": 16
                                        }
                                    }
                                },
                                {
                                    "src": "https://particles.js.org/images/fruits/lemon.png",
                                    "width": 32,
                                    "height": 32,
                                    "particles": {
                                        "size": {
                                            "value": 16
                                        }
                                    }
                                },
                                {
                                    "src": "https://particles.js.org/images/fruits/orange.png",
                                    "width": 32,
                                    "height": 32,
                                    "particles": {
                                        "size": {
                                            "value": 16
                                        }
                                    }
                                },
                                {
                                    "src": "https://particles.js.org/images/fruits/peach.png",
                                    "width": 32,
                                    "height": 32,
                                    "particles": {
                                        "size": {
                                            "value": 16
                                        }
                                    }
                                },
                                {
                                    "src": "https://particles.js.org/images/fruits/pear.png",
                                    "width": 32,
                                    "height": 32,
                                    "particles": {
                                        "size": {
                                            "value": 16
                                        }
                                    }
                                },
                                {
                                    "src": "https://particles.js.org/images/fruits/pepper.png",
                                    "width": 32,
                                    "height": 32,
                                    "particles": {
                                        "size": {
                                            "value": 16
                                        }
                                    }
                                },
                                {
                                    "src": "https://particles.js.org/images/fruits/plum.png",
                                    "width": 32,
                                    "height": 32,
                                    "particles": {
                                        "size": {
                                            "value": 16
                                        }
                                    }
                                },
                                {
                                    "src": "https://particles.js.org/images/fruits/star.png",
                                    "width": 32,
                                    "height": 32,
                                    "particles": {
                                        "size": {
                                            "value": 16
                                        }
                                    }
                                },
                                {
                                    "src": "https://particles.js.org/images/fruits/strawberry.png",
                                    "width": 32,
                                    "height": 32,
                                    "particles": {
                                        "size": {
                                            "value": 16
                                        }
                                    }
                                },
                                {
                                    "src": "https://particles.js.org/images/fruits/watermelon.png",
                                    "width": 32,
                                    "height": 32,
                                    "particles": {
                                        "size": {
                                            "value": 16
                                        }
                                    }
                                },
                                {
                                    "src": "https://particles.js.org/images/fruits/watermelon_slice.png",
                                    "width": 32,
                                    "height": 32,
                                    "particles": {
                                        "size": {
                                            "value": 16
                                        }
                                    }
                                }
                            ]
                        }
                    },
                    "opacity": {
                        "value": 1,
                        "animation": {
                            "enable": true,
                            "minimumValue": 0,
                            "speed": 2,
                            "startValue": "max",
                            "destroy": "min"
                        }
                    },
                    "size": {
                        "value": 4,
                        "random": {
                            "enable": true,
                            "minimumValue": 2
                        }
                    },
                    "links": {
                        "enable": false
                    },
                    "life": {
                        "duration": {
                            "sync": true,
                            "value": 5
                        },
                        "count": 1
                    },
                    "move": {
                        "enable": true,
                        "gravity": {
                            "enable": true,
                            "acceleration": 10
                        },
                        "speed": {
                            "min": 10,
                            "max": 20
                        },
                        "decay": 0.1,
                        "direction": "none",
                        "straight": false,
                        "outModes": {
                            "default": "destroy",
                            "top": "none"
                        }
                    },
                    "rotate": {
                        "value": {
                            "min": 0,
                            "max": 360
                        },
                        "direction": "random",
                        "move": true,
                        "animation": {
                            "enable": true,
                            "speed": 60
                        }
                    },
                    "tilt": {
                        "direction": "random",
                        "enable": true,
                        "move": true,
                        "value": {
                            "min": 0,
                            "max": 360
                        },
                        "animation": {
                            "enable": true,
                            "speed": 60
                        }
                    },
                    "roll": {
                        "darken": {
                            "enable": true,
                            "value": 25
                        },
                        "enable": true,
                        "speed": {
                            "min": 15,
                            "max": 25
                        }
                    },
                    "wobble": {
                        "distance": 30,
                        "enable": true,
                        "move": true,
                        "speed": {
                            "min": -15,
                            "max": 15
                        }
                    }
                },
                "emitters": {
                    "life": {
                        "count": 0,
                        "duration": 0.1,
                        "delay": 0.4
                    },
                    "rate": {
                        "delay": 0.6,
                        "quantity": 100
                    },
                    "size": {
                        "width": 0,
                        "height": 0
                    }
                }
            }}
            init={particlesInit} />
    )
}

export default ConfettiExplosion