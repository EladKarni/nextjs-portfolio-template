import Particles from 'react-particles-js';

function ParticlesBG() {
    return (
        <Particles
            height="100vh"
            width="100%"
            style={{
                position: "absolute",
                top: "0",
                margin: "0",
                padding: "0",
                height: "100vh",
                pointerEvents: "none",
                color: 'black'
              }} 
            params={{
                "particles": {
                    "number": {
                        "value": 50
                    },
                    "size": {
                        "value": 3
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        }
                    }
                }
            }}
        />
    )
}

export default ParticlesBG
