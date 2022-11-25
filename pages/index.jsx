import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stats } from '@react-three/drei';
import { useSpring, a } from 'react-spring';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { angleToRadians } from '../utils/angle';
import gsap from 'gsap';
import { useThree } from 'react-three-fiber';

import {
  Navbar,
  Footer,
  LightNight,
  LightDay,
  Grounds,
  Camera,
  ZoomWithOrbital,
  Background,
  HouseNight,
  Saturn,
  Scooter,
  Cat,
  Human,
  Mailbox,
  Kitty,
} from '../components';

const Home = () => {
  const testing = true;
  const [clockState, setClockState] = useState();
  const style1 = useSpring({
    from: { opacity: 0, marginTop: -100 },
    to: { opacity: 1, marginTop: 0 },
  });
  // console.log('clockState', clockState);
  // useEffect(() => {
  //   setInterval(() => {
  //     const date = new Date();
  //     setClockState(date?.getHours());
  //     console.log('clock', date);
  //   }, 1000);
  // }, []);
  const cameraRef = useRef(null);
  useEffect(() => {
    if (true) {
      gsap.to(cameraRef.position, {
        z: true ? 500 : -100,
        duration: 2,
        ease: 'power2.out',
      });
    }
  }, []);

  return (
    <div className='flex min-h-screen flex-col justify-center'>
      <Head>
        <title>Samoi</title>
        <link rel='icon' href='/sandpock.svg' />
      </Head>

      <main className='bg-gray-900'>
        <div className='h-screen w-full flex flex-col justify-between'>
          <a.div style={style1} className='relative sm:px-16 px-6 z-10'>
            <Navbar />
          </a.div>
          <div className='absolute w-full h-screen'>
            <Canvas shadows camera={{ position: [0, 0, 200], fov: 50 }}>
              <Camera />
              {/* <ZoomWithOrbital /> */}

              {/* {testing ? <Stats /> : null}
              {testing ? <axesHelper args={[2]} /> : null}
              {testing ? <gridHelper args={[10, 10]} /> : null} */}
              <LightNight />
              {/* <LightDay />
              {/* {clockState >= 18 ? <LightNight /> : <LightDay />} */}
              <Kitty />
              <HouseNight />
              <Saturn />
              <Saturn />
              <Cat />
              <Mailbox />
              <Human />
              <Scooter />
              <Grounds />
              <Background />
            </Canvas>
          </div>
          <footer className='relative sm:px-16 '>
            <Footer />
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Home;
