import React from 'react';
import { Helmet } from 'react-helmet';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Layout from '../components/Layout';
import Socialicons from '../components/Socialicons';

const options = {
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'push',
      },
      onHover: {
        enable: true,
        mode: 'repulse',
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: '#888888',
    },
    collisions: {
      enable: true,
    },
    move: {
      directions: 'none',
      enable: true,
      outModes: {
        default: 'bounce',
      },
      random: false,
      speed: 3,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.3,
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};

function Home() {
  const particlesInit = React.useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = React.useCallback(async (container) => {
    console.log(container);
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Alex Younger - Web Developer</title>
        <meta
          name="description"
          content="Alex Younger Personal Portfolio Homepage"
        />
      </Helmet>
      <div className="mi-home-area mi-padding-section">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          className="mi-home-particle"
          options={options}
        />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-12">
              <div className="mi-home-content">
                <h1>
                  Hey! I&apos;m <span className="color-theme">Alex</span>
                </h1>
                <p>
                  Software developer
                  <br />
                  Musician
                  <br />
                  Philadelphia sports enthusiast
                </p>
                <Socialicons bordered />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
