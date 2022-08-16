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
                                value: "#000000"
                            }
                        },
                        "particles": {
                            "number": {
                                "value": 400,
                                "density": {
                                    "enable": true,
                                    "value_area": 800
                                }
                            },
                            "color": {
                                "value": "#ffffff"
                            },
                            "shape": {
                                "type": "circle",
                                "stroke": {
                                    "width": 10,
                                    "color": "#000000"
                                },
                                "polygon": {
                                    "nb_sides": 10
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
                                    "sync": false
                                }
                            },
                            "size": {
                                "value": 2,
                                "random": true,
                                "anim": {
                                    "enable": true,
                                    "speed": 2,
                                    "size_min": 0,
                                    "sync": false
                                }
                            },
                            "line_linked": {
                                "enable": false,
                                "distance": 150,
                                "color": "#ffffff",
                                "opacity": 0.4,
                                "width": 1
                            },
                            "move": {
                                "enable": true,
                                "speed": 0.7,
                                "direction": "none",
                                "random": true,
                                "straight": false,
                                "out_mode": "out",
                                "bounce": false,
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
                                    "mode": "grab"
                                },
                                "onclick": {
                                    "enable": true,
                                    "mode": "repulse"
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
                                    "distance": 83.91608391608392,
                                    "size": 1,
                                    "duration": 3,
                                    "opacity": 1,
                                    "speed": 3
                                },
                                "repulse": {
                                    "distance": 200,
                                    "duration": 0.4
                                },
                                "push": {
                                    "particles_nb": 10
                                },
                                "remove": {
                                    "particles_nb": 2
                                },
                                "attract": {
                                    "rotateX": 600,
                                    "rotateY": 1200


                                }
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