import Head from 'next/head';
import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stats } from '@react-three/drei';
import {
  Navbar,
  LightNight,
  LightDay,
  Grounds,
  Camera,
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
  console.log('clockState', clockState);
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date?.getHours());
      console.log('clock', date);
    }, 1000);
  }, []);

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
              <LightNight />
              {/* {clockState >= 18 ? <LightNight /> : <LightDay />} */}
              <Kitty />
              <HouseNight />
              <Saturn />
              <Saturn />
              <Cat />
              <Mailbox />

              {/* <Human /> */}
              <Scooter />
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
