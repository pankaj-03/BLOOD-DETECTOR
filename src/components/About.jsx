import React from 'react'

function About() {
    return (
      <section id="about" className="w-full mx-auto">
        <div className="bg-[url('/src/assets/background_image.png')] bg-cover bg-center min-h-screen p-3">
        <div>
        <div className="h-full flex flex-col justify-center items-center mt-20">
          <h2 className="text-4xl font-bold">About Us</h2>
          </div>
          <p className="text-lg mt-20 text-justify mx-10 ">Welcome to our innovative project, Blood Group Detection using Fingerprints, a groundbreaking solution designed to identify an individual's blood group with the ease of a fingerprint scan. This project leverages the power of biometric technology to offer a seamless and accurate method for blood group determination, making it a valuable tool in medical, emergency, and healthcare applications.

                Our system uses advanced algorithms to analyze fingerprint patterns and match them with blood group data, providing a quick and reliable result. The process is non-invasive, fast, and requires minimal user input, making it ideal for situations where traditional methods of blood typing may not be feasible.

                Developed as part of our final-year project in Computer Science and Engineering, this system combines cutting-edge research in biometric identification, image processing, and machine learning, aiming to bring healthcare closer to technology. This project not only highlights the potential of biometrics in healthcare but also demonstrates how modern technology can be integrated into everyday life to solve real-world problems.
            </p>
        </div>
        </div>
      </section>
    );
  }
  export default About;