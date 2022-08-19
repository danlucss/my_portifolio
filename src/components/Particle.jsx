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
                        dimensions: {
                            height: "100vh",
                            width: "50vw",
                        },
                        background: {

                            color: {
                                value: "transparent",

                            }, // transparen


                        },
                        fpsLimit: 60,
                        "z-index": -1,

                        "particles": {

                            "number": {
                                "value": 100,

                                "density": {
                                    "enable": true,

                                    "value_area": 700,

                                }
                            },
                            "orbit": {
                                "enable": false,
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

                                "value": "#2646A6",

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
                                "type": "line",
                                "stroke": {
                                    "width": 6,

                                    "color": "#ccc",

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
                                "value": 0.78927153781200905,
                                "random": true,

                                "anim": {
                                    "enable": true,
                                    "speed": 2,

                                    "opacity_min": 0,
                                    "sync": true,
                                    "color": "#fff"

                                }
                            },
                            "size": {
                                "value": 1.4,
                                "random": true,
                                "anim": {
                                    "enable": true,
                                    "speed": 2,
                                    "size_min": 0,
                                    "sync": false,

                                }
                            },
                            "line_linked": {
                                "enable": false,

                                "distance": 20,
                                "color": "#205373",
                                "opacity": .8,
                                "width": 1,
                                "shadow": {
                                    "enable": true,
                                    "color": "#205373",
                                    "blur": 5,
                                    "offset": {
                                        "x": 10,
                                        "y": 5
                                    }
                                }

                            },
                            "move": {
                                "enable": true,
                                "speed": 3,
                                "direction": "bottom",
                                "random": true,
                                "straight": false,
                                "out_mode": "explode",
                                "bounce": true,
                                "explode": {
                                    "mode": "circle",
                                    "enabled": true,
                                    "distance": 100,
                                    "duration": 1000,
                                    "count": 1,
                                    "degree": 1
                                },


                            }
                        },
                        "interactivity": {

                            "detect_on": "all",
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "bubble"
                                },
                                "onclick": {
                                    "enable": false,
                                    "mode": "push"
                                },
                                "resize": false,
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
                                    "distance": 80,
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