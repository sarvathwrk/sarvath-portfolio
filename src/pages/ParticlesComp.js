import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesComp = () => {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);
    return (
        <div className="w-full h-full" >
            <Particles
                className="w-full h-screen"
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}


                options={{
                    fullScreen: false,
                    background: {
                        // color: {
                        //   value: "#0d47a1",
                        // },
                    },
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                                distance: 400,
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 150,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            // value: "#cfcfcf2c",
                            value: "#cacaca",
                        },
                        links: {
                            // color: "#cfcfcf2c",
                            color: "#cacaca",
                            distance: 120,
                            enable: true,
                            opacity: 0.1,
                            width: 0.2,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            directions: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 1200,
                            },
                            value: 100,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 2 },
                        },
                    },
                    detectRetina: true,
                }}



            />
        </div>
    );
};

export default ParticlesComp;

// mode: "grab",
// grab: {
//   distance: 300,
//   line_linked: {
//     opacity: 0.5,
//   },
// },
