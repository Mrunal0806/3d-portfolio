import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Loader from '../components/Loader';
import Island from '../models/Island';
import Sky from '../models/Sky';
import Plane from '../models/Plane';
import Bird from '../models/Bird';
import HomeInfo from '../components/HomeInfo';


const Home = () => {
  const[isRotating, setIsRotating]=useState(false);
  const [CurrentStage, setCurrentStage] = useState(1); // [setCurrentStage]
  const adjustIslandForScreenSize =() => {
    let screenScale = null;
    let screenPostion = [0, -6.5, -43];
    let rotation =[0.1, 4.7, 0];

    if (window.innerWidth > 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPostion, rotation]
  }


  const adjustPlaneForScreenSize =() => {
    let screenScale ,screenPosition ;
    

    if (window.innerWidth > 768) {
      screenScale = [1.5,1.5, 1.5]
      screenPosition = [0, -1.5, 0]
      
    } else {
      screenScale = [3, 3, 3]
      screenPosition = [0, -4, -4]
    }
    return [screenScale, screenPosition]
  }
  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();
  return (
    <section className='w-full h-screen relative '>
      <div className='absolute top-28 left-0 right-0 z-10 flex item-center justify-center'>
        {CurrentStage && <HomeInfo CurrentStage={CurrentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback ={ <Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>


          <Bird />
          <Sky />
          <Island 
          position={islandPosition} 
          scale={islandScale}
          rotation={islandRotation}
          isRotating = {isRotating}
          setIsRotating = {setIsRotating}
          setCurrentStage = {setCurrentStage}
          />
          

          <Plane 
          isRotating = {isRotating}
          planeScale = {planeScale} 
          planePosition = {planePosition}
          rotation={[0, 20, 0]}/>
        </Suspense>

      </Canvas>
    </section>
  )
}

export default Home