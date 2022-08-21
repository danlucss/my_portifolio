import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";



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
                        fpsLimit: 60,
                        interactivity: {
                            detectsOn: "window",
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push"
                                },
                                onHover: {
                                    enable: true,
                                    mode: "bubble",

                                    parallax: {
                                        enable: true,
                                        force: 100, smooth: 5
                                    },
                                    resize: true

                                },



                            }
                        },
                        particles: {
                            number: {
                                value: 120,
                                density: {
                                    enable: true,
                                    value_area: 1220
                                }
                            },
                            color: {
                                value: "#ffffff"
                            },
                            shape: {
                                type: "circle",
                                stroke: {
                                    width: 1,
                                    color: "#fff"
                                },
                                polygon: {
                                    nb_sides: 5
                                },
                                image: {
                                    src: "img/github.svg",
                                    width: 100,
                                    height: 100
                                }
                            },
                            opacity: {
                                value: 0.5,
                                random: true,
                                anim: {
                                    enable: true,
                                    speed: 1,
                                    opacity_min: 0.1,
                                    sync: false
                                }
                            },
                            size: {
                                value: 2,
                                random: false,
                                anim: {
                                    enable: true,
                                    speed: 7,
                                    size_min: 0.1,
                                    sync: true
                                }
                            },
                            line_linked: {
                                enable: false,
                                distance: 150,
                                color: "#ffffff",
                                opacity: 0.4,
                                width: 1
                            },
                            move: {
                                enable: true,
                                speed: 1,
                                direction: "none",
                                random: true,
                                straight: true,
                                out_mode: "out",
                                bounce: false,
                                attract: {
                                    enable: false,
                                    rotateX: 600,
                                    rotateY: 1200
                                }
                            }
                        },
                        background: {
                            color: "#0d0d0d"
                        },
                        modes: {
                            bubbles: {
                                distance: 400,
                                size: 40,
                                duration: 2,
                                opacity: 0.8,
                                speed: 3
                            },
                            push: {
                                particles_nb: 20
                            }


                        },

                        detectRetina: true,
                        retina_detect: true,

                    }
                }
            />
        </>
    )
}


export default Particle;