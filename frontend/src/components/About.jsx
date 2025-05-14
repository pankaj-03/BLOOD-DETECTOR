import React from 'react'

function About() {
  return (
    <section id="about" className="w-full mx-auto">
      <div className="bg-[url('/src/assets/background_image.png')] bg-cover bg-center min-h-screen p-3">
        <div>
          <div className="h-full flex flex-col justify-center items-center mt-16">
            <h2 className="text-4xl font-bold text-red-700">About Us</h2>
          </div>

          <div>
            <div className="m-3 p-2">
              <h4 className="text-3xl font-semibold m-2 text-red-700 mb-2">About Our Final Year Project: Blood Group Detection Using Fingerprints</h4>
              <p className="text-lg p-2">Traditional blood typing requires <span className="font-bold text-red-800">invasive procedures</span> and specialized equipment, making it time-consuming and resource-intensive. Our research-driven project explores a <span className="font-bold text-red-800">non-invasive approach</span>  by analyzing fingerprint patterns to identify blood groups using <span className="font-bold text-red-800">image processing and deep learning.</span>
              </p>  
            </div>

            <div className="m-3 p-4">
              <h4 className="text-3xl font-semibold text-red-700">Why It Matters</h4>
              <ul className="flex flex-col gap-2 list-disc p-4">
                <li className="text-lg"><span className="font-bold text-red-700">Fast & Non-Invasive -</span>  No need for blood samples.</li>
                <li className="text-lg"><span className="font-bold text-red-700">Cost-Effective -</span>  Ideal for resource limited setup</li>
                <li className="text-lg"><span className="font-bold text-red-700">Accessible -</span>  Simplifies blood group detection without the lab infrastructure</li>
              </ul>
            </div>

            <div className="m-3 p-4">
              <h4 className="text-3xl font-semibold text-red-700">Our Approach</h4>
              <p className="text-lg p-2">Using advanced <span className="text-red-800 font-bold">image processing and biometric analysis</span>, our system extracts key features from fingerprint images and applies <span className="text-red-800 font-bold">Deep learning models</span> to classify blood groups with high accuracy. This research-driven approach has the potential to revolutionize medical diagnostics, offering a <span className="text-red-800 font-bold">fast, reliable, and scalable solution</span> for healthcare applications.
</p>

            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
export default About;