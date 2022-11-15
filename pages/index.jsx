import Head from 'next/head';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/styles';
import { Canvas } from '@react-three/fiber';
import { Stats } from '@react-three/drei';
import { EffectComposer, GodRays } from '@react-three/postprocessing';
import {
  Navbar,
  Lights,
  Grounds,
  Camera,
  Background,
  HouseNight,
  Saturn,
  Scooter,
  Cat,
  Human,
  Mailbox,
} from '../components';

const Home = () => {
  const testing = true;
  // const [clockState, setClockState] = useState();
  // console.log('clockState', clockState);
  // useEffect(() => {
  //   setInterval(() => {
  //     const date = new Date();
  //     setClockState(date?.getHours());
  // console.log('clock', date);
  //   }, 10000);
  // }, []);

  return (
    <div className='flex min-h-screen flex-col justify-center'>
      <Head>
        <title>Samoi</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='bg-gray-900'>
        <div className='h-screen w-full flex flex-col '>
          <div className='relative justify-center sm:px-16 px-6 z-10'>
            <Navbar />
          </div>
          <div className='absolute w-full h-screen'>
            <Canvas shadows>
              <Camera />
              {testing ? <Stats /> : null}
              {testing ? <axesHelper args={[2]} /> : null}
              {testing ? <gridHelper args={[10, 10]} /> : null}
              <Lights />
              {/* {clockState < 18 ? <Lights /> : null} */}

              <HouseNight />
              <Saturn />
              <Cat />
              <Mailbox />

              {/* <Human /> */}
              {/* <Scooter /> */}
              <Grounds />
              <Background />
            </Canvas>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
