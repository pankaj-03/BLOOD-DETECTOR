import React from 'react'
import HeroSectionImage from '../assets/bloodtest_image.png';


const HeroSection = () => {
    return (
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
    )
}

export default HeroSection
