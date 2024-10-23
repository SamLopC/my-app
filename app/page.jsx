'use client'

import dynamic from 'next/dynamic'
import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { motion } from 'framer-motion'
import { FaBars, FaSearch, FaRobot, FaHandshake, FaCog } from 'react-icons/fa'


//NEW IMPORTS FOR VERYFI APP 

// import React from 'react'
// import Header from '../src/components/canvasWeb/Header'
// import MainContent from '../src/components/canvasWeb/MainContent'
// import Footer from '../src/components/canvasWeb/Footer'

const Galaxy = dynamic(() => import('@/components/canvasGalaxy/Examples').then((mod) => mod.Galaxy), { ssr: false })

export default function Page() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      setScrollPosition(window.scrollY);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setScrollPosition(window.scrollY);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const galaxyOpacity = 1 - scrollPosition / 1000;
  const galaxySize = Math.max(1 - scrollPosition / 1000, 0.4);
  const gradientStart = 0;
  const gradientEnd = 400;

  const backgroundGradient = scrollPosition > gradientStart
    ? `linear-gradient(135deg, rgba(128,0,128, ${Math.min((scrollPosition - gradientStart) / (gradientEnd - gradientStart), 1)}), rgba(255,0,0, ${Math.min((scrollPosition - gradientStart) / (gradientEnd - gradientStart), 1)}))`
    : '#000000';

  return (
    <div className="relative h-screen w-screen overflow-y-scroll"> {/* Enable vertical scrolling */}
      {/* Toolbar */}
      <div className="fixed top-0 w-full p-4 bg-transparent flex justify-between items-center z-20">
        <motion.div whileHover={{ scale: 1.1 }} className="text-white text-2xl cursor-pointer">
          <FaBars />
        </motion.div>
        <motion.h1 className="text-white text-2xl font-bold" whileHover={{ scale: 1.05 }}>
          DropDev
        </motion.h1>
        <motion.div whileHover={{ scale: 1.1 }} className="text-white text-2xl cursor-pointer">
          <FaSearch />
        </motion.div>
      </div>

      {/* Galaxy on the right */}
      <div className="fixed top-0 right-0 h-[100vh] w-[50vw] z-10 flex items-center justify-center">
        <Canvas
          gl={{ antialias: true, alpha: true }} // Enable alpha transparency
          style={{ opacity: galaxyOpacity, transform: `scale(${galaxySize})`, transition: 'opacity 1s ease, transform 1s ease' }}
          camera={{ position: [9, 3, 0], fov: 85 }}
        >
          <Suspense fallback={null}>
            <Galaxy /> {/* Ensure this is working properly */}
          </Suspense>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

      {/* Background Gradient */}
      <div className="fixed top-0 left-0 h-screen w-screen -z-20" style={{ background: backgroundGradient, transition: 'background 1s ease' }}></div>

      {/* Left content */}
      <div className="absolute top-0 left-0 w-[50vw] h-screen flex flex-col items-center justify-center text-center text-white z-20">
        <section className="flex flex-col items-center justify-center">
          <motion.h1
            className="text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            DropDev
          </motion.h1>
          <motion.p
            className="text-xl max-w-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            We're here to let you do what you do best. Here's your time back (Unique Value Proposition).
          </motion.p>
          <motion.a
            href="#about"
            className="mt-8 px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-lg rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Get Started
          </motion.a>
        </section>
      </div>

      {/* Information Sections */}
      <div className="absolute top-[100vh] left-0 w-[50vw] flex flex-col items-center text-white z-10 space-y-12 px-12">
        {/* Industry Section */}
        <section id="about" className="h-screen flex flex-col justify-center items-center">
          <motion.h2
            className="text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Chatbot Industries We Serve
          </motion.h2>
          <motion.div
            className="flex space-x-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all flex flex-col items-center"
              whileHover={{ scale: 1.1 }}
            >
              <FaRobot className="text-4xl mb-4" />
              <p>Customer Support</p>
            </motion.div>
            <motion.div
              className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all flex flex-col items-center"
              whileHover={{ scale: 1.1 }}
            >
              <FaRobot className="text-4xl mb-4" />
              <p>Healthcare Assistance</p>
            </motion.div>
            <motion.div
              className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all flex flex-col items-center"
              whileHover={{ scale: 1.1 }}
            >
              <FaRobot className="text-4xl mb-4" />
              <p>Sales & Marketing</p>
            </motion.div>
          </motion.div>
        </section>

        {/* Trust Section */}
        <section className="h-screen flex flex-col justify-center items-center">
          <motion.div
            className="bg-gradient-to-r from-indigo-700 to-purple-700 p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold mb-6">Building Trust</h2>
            <p className="text-lg mb-4">
              At DropDev, we focus on building lasting relationships. Our platform is designed to ensure seamless integration and provide long-term value.
            </p>
            <p className="text-lg">
              Our clients trust us because we deliver on time, provide consistent results, and stay transparent throughout the process.
            </p>
          </motion.div>
        </section>

        {/* Process Section */}
        <section className="h-screen flex flex-col justify-center items-center">
          <motion.div
            className="bg-gray-800 p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Process</h2>
            <p className="text-lg mb-4">We simplify your workflow in three steps:</p>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>Understand your needs and tailor a solution.</li>
              <li>Implement advanced chatbot integrations seamlessly.</li>
              <li>Provide ongoing support and optimization for continuous improvement.</li>
            </ul>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
