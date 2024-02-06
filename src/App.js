import React from 'react'
import './App.css';
// import logo from "./Logo.png";
import image from "./image.png"
import Header from './components/Header';



function App() {
  return (
    <>
    <Header/>
    <section>
      {/* flex container */}
      <div className="  flex flex-col-reverse md:flex-row  items-center mx-auto space-y-0 md:space-y-0">
        {/* left item */}
        <div className=" flex flex-col md:mt-40 mb-32 space-y-12 md:w-1/2">
         <h1 className="main-heading max-w-md text-4xl font-bold text-center md:ml-40 md:text-5xl md:text-left">
         Connecting all your banking needs
         </h1>
         <p className="small-heading max-w-sm text-center md:ml-40 text-gray-700 md:text-left">
         A smart mobile application you can control your business needs
         </p>
         <div className="flex justify-center space-x-4 md:justify-start">

         <a href="/"  className="btn p-3 px-11 pt-2 text-white md:mx-40 bg-blue rounded-full baseline hover:bg-blue-200"><ion-icon name="logo-apple"></ion-icon> Get Start</a>

         </div>
        </div>
        {/* image */}
        <div className="image md:w-1/2">
           <img src={image} alt="" />
        </div>
      </div>
    </section>
    </>
  )
}

export default App
