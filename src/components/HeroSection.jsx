import React from 'react'
import HeroSectionImage from '../assets/bloodtest_image.png';
import fingerprintImg from '../assets/fingerprnt.png';
import aianalysis from '../assets/aianalysis.png';
import getres from '../assets/getresult.png';
import brain from '../assets/brain.png'
import point from '../assets/point.png'
import microscope from '../assets/microscope.png'
import lock from '../assets/padlock.png'


const HeroSection = ({ handleAuthOpen }) => {
    return (
        <>
        <section className="w-full mx-auto">
            <div className="bg-[url('/src/assets/background_image.png')] bg-cover bg-center min-h-screen p-3">

                <div className="h-full flex flex-col justify-center items-center mt-2">
                    {/*HEADINGS*/}
                    <div className="">
                        <h1 className="md:text-6xl text-4xl text-center font-bold">Welcome to <span className="text-red-700">BloodPrint</span></h1>
                        <p className="md:text-xl text-lg font-semibold text-center mt-3 text-gray-600">Detecting Blood Group Using Finerprints</p>
                    </div>
                    {/*IMAGE*/}
                    <div className="">
                        <img src={HeroSectionImage} alt="HeroSectionImage" className="md:w-[500px] md:h-[450px] object-cover"></img>
                    </div>

                    <div className='m-3'>
                        <p className="md:text-xl text-md text-center text-gray-500">A revolutionary CNN-based Technology to determine blood group from fingerprint analysis.</p>
                    </div>


                    <div className="flex justify-center gap-x-12 w-full">
                        {/* INPUT BUTTONS */}

                        <button className="md:px-3 md:py-2 p-2 bg-red-800 rounded-md text-md text-amber-50">Upload fingerprint</button>
                        {/* LEARN MORE */}
                        <button className="md:px-5 md:py-2 p-2 bg-black rounded-md text-md text-amber-50">Learn More</button>



                    </div>

                </div>
            </div>
        </section>

        {/* how it works */}
        <div>
        <div className="bg-[url('/src/assets/background_image.png')] bg-cover bg-center min-h-screen p-3">
        <div className='mt-10'></div>
        <h1 className="md:text-6xl text-4xl text-center font-bold">How <span className="border-b-9 border-red-700 inline-block pb-1"><span> it </span> 
                        <span className="text-red-700  inline-block pb-1"> W</span></span><span className="text-red-700  inline-block pb-1">orks</span></h1>

        
        <div className="flex flex-col md:flex-row justify-center items-center gap-50 mt-30">
            <img src={fingerprintImg} alt="fingerprintImage" className="md:w-[350px] md:h-[350px] object-cover hover:scale-105 transition-transform duration-300 rounded-xl shadow-lg"
            ></img>
             <img src={aianalysis} alt="fingerprintImage" className="md:w-[350px] md:h-[350px] object-cover hover:scale-105 transition-transform duration-300 rounded-xl shadow-lg"
            ></img>
             <img src={getres} alt="fingerprintImage" className="md:w-[350px] md:h-[350px] object-cover hover:scale-105 transition-transform duration-300 rounded-xl shadow-lg"
            ></img>
        </div>

        </div>
        </div>

        {/* our technology */}
        <div>
        <div className="bg-[url('/src/assets/background_image.png')] bg-cover bg-center min-h-screen p-3">
        <div className='mt-10'></div>
        <h1 className="md:text-6xl text-4xl text-center font-bold">Our <span className="border-b-9 border-red-700 inline-block pb-1"> 
                        <span className="text-red-700  inline-block pb-1"> Tech</span></span><span className="text-red-700  inline-block pb-1">nology</span></h1>
        
        
        <div className=' mt-20 mx-20 grid md:grid-cols-2 gap-5 '>

            <div className='mx-40 '><h1 className=' text-2xl text-red-700 font-bold inline-block pb-1'> <span>CNN Architecture</span></h1>
                <div className='flex items-start gap-5 mt-5'><img src={brain} alt="brain" className="md:w-[50px] md:h-[50px] mt-5"></img> 
                <p className='text-justify'>Using advanced convolution neural networks trained on thousands offingerprint samples to identify patterns correlated with bloodgroup</p></div></div>

            <div className='mx-40'><h1 className=' text-2xl text-red-700 font-bold inline-block pb-1'> <span>Fingerprint Recognition</span></h1>
                <div className='flex items-start gap-5 mt-5'><img src={point} alt="point" className="md:w-[50px] md:h-[50px] mt-3 "></img>
                <p className='text-justify'>High precision ridge pattern analysis that aims to capture very minute details invisible to the human eye</p></div></div>
        
            <div className='mt-10 mx-40'><h1 className=' text-2xl text-red-700 font-bold inline-block pb-1'> <span>Scientific validation</span></h1>
                <div className='flex items-start gap-5 mt-5'><img src={microscope} alt="microscope" className="md:w-[50px] md:h-[50px] mt-5 "></img>
                <p className='text-justify'>Our methods are backed by peer-reviewed research showing correlation between fingerprint patterns and blood group markers</p></div></div>
        
            <div className='mt-10 mx-40'><h1 className=' text-2xl text-red-700 font-bold inline-block pb-1'> <span>Security Protocols</span></h1>
                <div className='flex items-start gap-5 mt-5'><img src={lock} alt="lock" className="md:w-[50px] md:h-[50px] mt-3 "></img>
                <p className='text-justify'>End-to-end encryption and secure data handling that meets healthcare privacy standards</p></div></div>
        
        </div>
        </div> 
        </div>

        {/* ready to give bloodgroup */}
        <div>
            <div className="bg-[url('/src/assets/background_image.png')] bg-cover bg-center min-h-screen p-3">
                <div className='mt-40'></div>
                <h1 className="md:text-5xl text-4xl text-center font-bold">Ready to try out our <span className="text-red-700  inline-block pb-1"> blood group </span><span className="md:text-5xl text-4xl text-center font-bold "> detection technology?</span></h1>
                <h2 className="md:text-3xl text-2xl text-center mt-20 text-gray-600">Create an account now and start analysing fingerprints immediately</h2>
                <div className='grid grid-cols-2 gap-10 mx-[500px] mt-20'>
                    <button onClick={() => handleAuthOpen(false)} className='w-full max-w-[200px] px-8 py-3 text-lg bg-red-700 text-white rounded hover:bg-red-600'>
                        SignUp for free
                    </button> 
                    <button onClick={() => handleAuthOpen(true)} className='w-full max-w-[200px] px-8 py-3 text-lg bg-black text-white rounded hover:bg-gray-900'>
                        Log In
                    </button>
                </div>
      
            </div>
        </div>
        </>
        
    )
}

export default HeroSection
