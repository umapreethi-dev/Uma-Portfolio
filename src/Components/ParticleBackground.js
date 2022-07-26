import Particles from 'react-tsparticles'
import { loadFull } from "tsparticles";

export default function ParticleBackground(){
  const particlesInit = async (main) => {
    console.log(main);
 
    
    await loadFull(main);
  };
 
  const particlesLoaded = (container) => {
    console.log(container);
  };
    return (
        <div>
            <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
              options={{
            fullScreen: {
              enable: false,
              zIndex:0
            },
            background: {
              color: '#fff',
            },
            fpsLimit: 40,
            interactivity: {
              detectsOn: 'canvas',
              events: {
                resize: true
              },
            },
            particles: {
              move: {
                enable: true
              },
              color: {
              value:  '#010B1D',
              },
              number: {
                density: {
                  enable: true,
                  area: 1080
                },
                limit: 0,
                value: 100,
              },
              opacity: {
                animation: {
                  enable: true,
                  minimumValue: 0.5,
                  speed: 1.5,
                  sync: false,
                },
                random: {
                  enable: true,
                  minimumValue: 0.1,
                },
                value: 1,
              },
              shape: {
                type: 'circle',
       
              },
              size: {
                random: {
                  enable: true,
                  minimumValue: 1
                },
                value: 2
              }
            }
          }}
      />  
        </div>
    )
    
}