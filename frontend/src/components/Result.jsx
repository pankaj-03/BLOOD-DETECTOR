import React from 'react'
import classReport from '../assets/classificationReport.png'
import confusionMatrix from '../assets/confusionMatrix.png'
import modelAccuracy from '../assets/modelaccuracyvsEpoch.png'
import modelLoss from '../assets/modelLossvsEpoch.png'

const Result = () => {
  return (
    <section className="w-full mx-auto p-4">

        <div className="bg-[url('/src/assets/background_image.png')] min-h-screen bg-cover bg-center">
           <h2 className="text-center md:text-4xl text-2xl text-red-700 font-bold  md:my-8 my-4">Results</h2>
         <div className = "flex flex-col gap-6">
                <div className="grid md:grid-cols-2 gap-4">
                 <div className="flex flex-col items-center p-3 gap-4  col-span-1 bg-red-200 rounded-md">
                   <div>
                    <img src = {classReport} alt = "classReport" className="w-[700px] h-auto object-contain rounded-md cursor-pointer transition-transform ease-in-out  duration-300 hover:scale-105"/>
                   </div>
                   <div>
                    <h3 className="font-bold md:text-2xl text-lg text-red-800">Classification Report</h3>
                   </div>
                 </div>

                 <div className="flex flex-col items-center p-3 gap-4  col-span-1 bg-red-200 rounded-md">
                   <div>
                    <img src = {modelAccuracy} alt = "classReport" className="w-[700px] h-auto object-contain rounded-md cursor-pointer transition-transform ease-in-out  duration-300 hover:scale-105"/>
                   </div>
                   <div>
                    <h3 className="font-bold md:text-2xl text-lg text-red-800">Model Accuracy vs Epoch</h3>
                   </div>
                 </div>

            </div>

            <div className="grid md:grid-cols-2 grid-cols gap-4">
                 <div className="flex flex-col items-center p-3 gap-4  col-span-1 bg-red-200 rounded-md">
                   <div>
                    <img src = {confusionMatrix} alt = "classReport" className="w-[700px] h-auto object-cover rounded-md cursor-pointer transition-transform ease-in-out  duration-300 hover:scale-105"/>
                   </div>
                   <div>
                    <h3 className="font-bold md:text-2xl text-lg text-red-800">Confusion Matrix</h3>
                   </div>
                 </div>

                  <div className="flex flex-col items-center p-3 gap-4  col-span-1 bg-red-200 rounded-md">
                   <div>
                    <img src = {modelLoss} alt = "classReport" className="w-[700px] h-auto object-fill rounded-md cursor-pointer transition-transform ease-in-out  duration-300 hover:scale-105"/>
                   </div>
                   <div>
                    <h3 className="font-bold md:text-2xl text-lg text-red-800">Model Loss vs Epoch</h3>
                   </div>
                 </div>
            </div>
              
         </div>
            
        </div>
       
    </section>
  )
}

export default Result;
