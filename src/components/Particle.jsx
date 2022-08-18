import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

import './Particle.scss';

function Particle() {

    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);


    return (
        <>
            <Particles

                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}

                options={
                    {
                        background: {
                            color: {
                                value: "transparent"
                            }, // transparent
                            zIndex: -1,

                        },
                        fpsLimit: 120,
                        "z-index": -1,

                        "particles": {

                            "number": {
                                "value": 255,

                                "density": {
                                    "enable": true,

                                    "value_area": 500,

                                }
                            },
                            "orbit": {
                                "enable": true,
                                "rotateX": {
                                    "value": 100
                                },
                                "rotateY": {
                                    "value": 30
                                }
                            },
                            "z-index": {
                                "value": -1,

                            },

                            "color": {

                                "value": "#ffffff",

                            },
                            "responsive": {
                                "enabled": true,
                                "density": {
                                    "ratio": {
                                        "value": 10

                                    },
                                    "sensitivity": {
                                        "horizontal": 100,
                                        "vertical": 100
                                    },
                                },
                            },

                            "shape": {
                                "type": "circle",


                                "stroke": {
                                    "width": 1,
                                    "color": "#fff",

                                },
                                "polygon": {
                                    "nb_sides": 5
                                },
                                "image": {
                                    "src": "img/github.svg",
                                    "width": 10,
                                    "height": 10
                                }
                            },
                            "opacity": {
                                "value": 0.48927153781200905,
                                "random": false,
                                "anim": {
                                    "enable": true,
                                    "speed": 0.2,
                                    "opacity_min": 0,
                                    "sync": true
                                }
                            },
                            "size": {
                                "value": 1,
                                "random": true,
                                "anim": {
                                    "enable": true,
                                    "speed": 2,
                                    "size_min": 0,
                                    "sync": false,

                                }
                            },
                            "line_linked": {
                                "enable": true,

                                "distance": 20,
                                "color": "#ffff",
                                "opacity": .3,
                                "width": 1,
                                "shadow": {
                                    "enable": true,
                                    "color": "#fff",
                                    "blur": 5,
                                    "offset": {
                                        "x": 10,
                                        "y": 5
                                    }
                                }

                            },
                            "move": {
                                "enable": true,
                                "speed": 0.7,
                                "direction": "none",
                                "random": true,
                                "straight": true,
                                "out_mode": "off",
                                "bounce": true,
                                "attract": {
                                    "enable": false,
                                    "rotateX": 600,
                                    "rotateY": 1200
                                }
                            }
                        },
                        "interactivity": {
                            "detect_on": "canvas",
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "bubble"
                                },
                                "onclick": {
                                    "enable": true,
                                    "mode": "push"
                                },
                                "resize": true,
                                "onresize": {
                                    "enable": true,
                                    "density_auto": true,
                                    "density_area": 800
                                }
                            },
                            "modes": {
                                "grab": {
                                    "distance": 60,
                                    "line_linked": {
                                        "opacity": 1,
                                        "color": "#f3f",
                                        "width": 10,
                                        "enable": true,

                                    }
                                },
                                "bubble": {
                                    "distance": 200,
                                    "size": 2,

                                    "duration": 3,
                                    "opacity": 1,
                                    "speed": 3,
                                    "enable": true,
                                    "color": "#fff",
                                    "line_linked": {
                                        "opacity": 1,
                                        "color": "#f3f",
                                        "width": 10,
                                        "enable": true,
                                    }
                                },
                                "repulse": {
                                    "distance": 200,
                                    "duration": 0.4
                                },
                                "push": {
                                    "particles_nb": 10,

                                },
                                "remove": {
                                    "particles_nb": 2
                                },
                                "attract": {
                                    "rotateX": 600,
                                    "rotateY": 1200,
                                    "rotateZ": 1200,
                                    "distance": 1200,
                                    "duration": 0.4
                                },

                            }
                        },
                        "retina_detect": true
                    }
                }

            />
        </>
    )
}


export default Particle;