import React, { useState } from 'react';
import axios from 'axios';

import HeroSectionImage from '../assets/bloodtest_image.png';
import fingerprintImg from '../assets/fingerprnt.png';
import aianalysis from '../assets/aianalysis.png';
import getres from '../assets/getresult.png';
import brain from '../assets/brain.png';
import point from '../assets/point.png';
import microscope from '../assets/microscope.png';
import lock from '../assets/padlock.png';

const HeroSection = ({ handleAuthOpen }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [predictionResult, setPredictionResult] = useState('');

    const technology = [
        {
            id: 1,
            title: "CNN Architecture",
            link: brain,
            content: "Using advanced convolution neural networks trained on thousands of fingerprint samples to identify patterns correlated with blood group"
        },
        {
            id: 2,
            title: "Fingerprint Recognition",
            link: point,
            content: "High precision ridge pattern analysis that aims to capture very minute details invisible to the human eye"
        },
        {
            id: 3,
            title: "Scientific validation",
            link: microscope,
            content: "Our methods are backed by peer-reviewed research showing correlation between fingerprint patterns and blood group markers"
        },
        {
            id: 4,
            title: "Security Protocols",
            link: lock,
            content: "End-to-end encryption and secure data handling that meets healthcare privacy standards"
        }
    ];

    const handleFileChange = (e) => {
        console.log(e.target.files[0]);
        setSelectedFile(e.target.files[0]);
        setPredictionResult('');
    };

    const handleUploadClick = () => {
        document.getElementById("fileInput").click(); // Just open file dialog
    };

    const handlePredict = async () => {
        if (!selectedFile) {
            alert('Please upload a fingerprint image first.');
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const response = await axios.post('http://localhost:5000/predict', formData);
            setPredictionResult(`Predicted Blood Group: ${response.data.prediction}`);
            setTimeout(() => {
                setPredictionResult('');
            }, 10000)
        } catch (error) {
            console.error(error);
            alert('Prediction failed. Please try again.');
        }
        setSelectedFile(null);
        document.getElementById('fileInput').value = '';
    };

    // const handleFileChange = (e) => {
    //     console.log("HandleFIleChange")
    //     console.log(e.target.files[0]);
    //     setSelectedFile(e.target.files[0]);
    //     setPredictionResult('');
    // };

    // const handleUpload = async () => {
    //     console.log("handleUpload")
    //     document.getElementById("fileInput").click();
    //     if (!selectedFile) {
    //         alert('Please upload a fingerprint image first.');
    //         return;
    //     }

    //     const formData = new FormData();
    //     formData.append('file', selectedFile);

    //     try {
    //         const response = await axios.post('http://localhost:5000/predict', formData);
    //         setPredictionResult(`Predicted Blood Group: ${response.data.prediction}`);
    //     } catch (error) {
    //         console.error(error);
    //         alert('Prediction failed. Please try again.');
    //     }
    // };

    return (
        <>
            <section className="w-full mx-auto">
                <div className="bg-[url('/src/assets/background_image.png')] bg-cover bg-center h-auto px-6 py-15">
                    <div className="h-full flex flex-col justify-center items-center mt-2">
                        <div>
                            <h1 className="md:text-6xl text-4xl text-center font-bold">Welcome to <span className="text-red-700">BloodPrint</span></h1>
                            <p className="md:text-xl text-lg font-semibold text-center mt-3 text-gray-600">Detecting Blood Group Using Fingerprints</p>
                        </div>

                        <div>
                            <img src={HeroSectionImage} alt="HeroSectionImage" className="md:w-[500px] md:h-[450px] object-cover" />
                        </div>

                        <div className='m-3'>
                            <p className="md:text-xl text-md text-center text-gray-500">A revolutionary CNN-based Technology to determine blood group from fingerprint analysis.</p>
                        </div>

                        <div className="flex gap-20  space-y-4">


                            <div>
                                <input type="file" onChange={handleFileChange} id="fileInput" className="hidden" />
                                <button
                                    onClick={!selectedFile ? handleUploadClick : undefined} // do nothing if file is selected
                                    className={`md:px-8 md:py-3 px-2 py-1 md:text-xl rounded-md text-base font-semibold text-amber-50 transition-all duration-300 ${selectedFile ? 'bg-teal-700 cursor-default' : 'bg-red-700 cursor-pointer'}`}>
                                    {selectedFile ? 'Fingerprint Selected' : 'Choose Fingerprint'}
                                </button>
                            </div>


                            <div>
                                <button onClick={handlePredict} className="md:px-8 md:py-3 px-2 py-1 font-semibold md:text-xl text-base  bg-green-700 rounded-md text-md text-amber-50 cursor-pointer">
                                    Predict Blood Group
                                </button>
                            </div>



                        </div>

                        <div>
                            {predictionResult && <p className="mt-4 text-lg font-semibold text-green-600">{predictionResult}</p>}
                        </div>

                        {/* <div className="flex md:flex-row flex-col md:justify-center items-center md:gap-10 gap-4 w-full md:mt-4">
                            <div className="flex flex-col items-center">
                                <input type="file" onChange={handleFileChange} id="fileInput"  className="hidden"></input>
                                <button onClick={handleUpload} className="px-8 py-3 font-semibold md:text-lg bg-red-700 rounded-md text-md text-amber-50">Upload Fingerprint</button>
                                
                            </div>

                            <div>
                                <button className="px-8 py-3 font-semibold md:text-lg bg-black rounded-md text-md text-amber-50">Learn More</button>
                            </div>
                        </div> */}

                        {/* {predictionResult && (
                            <div className="mt-4 text-center text-green-600 text-xl font-semibold">
                                {predictionResult}
                            </div>
                        )} */}
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <div>
                <div className="bg-[url('/src/assets/background_image.png')] bg-cover bg-center h-auto px-6 py-15">
                    <h1 className="md:text-6xl text-4xl text-center font-bold mb-2">How <span className="border-b-9 border-red-700 inline-block"><span> it </span><span className="text-red-700"> W</span></span><span className="text-red-700">orks</span></h1>

                    <div className="flex flex-col md:flex-row justify-center items-center xl:gap-50 md:gap-15 gap-20 mt-20">
                        <img src={fingerprintImg} alt="fingerprintImage" className="xl:w-[300px] xl:h-[300px] md:w-[200px] md:h-[200px] w-[215px] h-[215px] object-cover hover:scale-105 transition-transform duration-300 rounded-xl shadow-lg" />
                        <img src={aianalysis} alt="fingerprintImage" className="xl:w-[300px] xl:h-[300px] md:w-[200px] md:h-[200px] w-[215px] h-[215px] object-cover hover:scale-105 transition-transform duration-300 rounded-xl shadow-lg" />
                        <img src={getres} alt="fingerprintImage" className="xl:w-[300px] xl:h-[300px] md:w-[200px] md:h-[200px] w-[215px] h-[215px] object-cover hover:scale-105 transition-transform duration-300 rounded-xl shadow-lg" />
                    </div>
                </div>
            </div>

            {/* OUR TECHNOLOGY */}
            <section>
                <div className="bg-[url('/src/assets/background_image.png')] bg-cover h-auto px-6 py-15">
                    <h1 className="md:text-6xl text-4xl text-center font-bold">Our <span className="border-b-9 border-red-700 inline-block pb-1"><span className="text-red-700"> Tech</span></span><span className="text-red-700">nology</span></h1>

                    <ul className="grid md:grid-cols-2 md:mt-20 mt-15 grid-cols-1 justify-items-center gap-5">
                        {technology.map((item) => (
                            <li key={item.id} className="col-span-1 flex md:flex-row flex-col items-center md:gap-10 gap-5 p-4">
                                <img src={item.link} alt={item.title} className="md:w-[90px] md:h-[70px] w-[70px] h-[60px] object-contain" />
                                <div className="flex flex-col md:item-center md:justify-center text-center">
                                    <h1 className="text-red-700 lg:text-2xl text-lg font-bold">{item.title}</h1>
                                    <p className="flex-nowrap max-w-80 lg:text-base text-sm mt-2">{item.content}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ready to give blood group */}
            {/* <div>
                <div className="bg-[url('/src/assets/background_image.png')] bg-cover bg-center h-auto p-3 flex flex-col w-full py-15">
                    <h1 className="md:text-5xl text-3xl text-center font-bold">Ready to try out our <span className="text-red-700">blood group</span> detection technology?</h1>
                    <h2 className="md:text-xl text-md text-center mt-10 text-gray-600">Create an account now and start analysing fingerprints immediately</h2>
                    <div className='w-full grid md:grid-cols-2 grid-cols-1 md:gap-32 gap-6 mt-6'>
                        <div className="w-full col-span-1 flex justify-center md:justify-end">
                            <button onClick={() => handleAuthOpen(false)} className='px-8 py-3 md:text-lg text-base font-semibold bg-red-700 text-white rounded hover:bg-red-600 cursor-pointer'>SignUp for free</button>
                        </div>
                        <div className="w-full col-span-1 flex justify-center md:justify-start">
                            <button onClick={() => handleAuthOpen(true)} className='px-8 py-3 md:text-lg text-base bg-black font-semibold text-white rounded hover:bg-gray-900 cursor-pointer'>Log In</button>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default HeroSection;
