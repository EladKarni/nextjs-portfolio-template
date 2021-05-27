import Particles from 'react-particles-js';

function ParticlesBG() {
    return (
        <Particles
            style={{
                position: "absolute",
                top: "0",
                left: "0",
                height: "100vh",
                pointerEvents: "none",
                zIndex: 0
              }} 
            params={{
                "particles": {
                    "color": "#0000ff",
                    "number": {
                        "value": 50
                    },
                    "size": {
                        "value": 10,
                        "random": true
                    },
                    "move": {
                        "direction": "bottom",
                        "out_mode": "out"
                    },
                    "line_linked": {
                        "enable": false
                    }
                },
                "interactivity": {
                    "events": {
                        "onClick": {
                            "enable": true,
                            "mode": "push",
                        }
                    }
                }
            }}
        />
    )
}

export default ParticlesBG
