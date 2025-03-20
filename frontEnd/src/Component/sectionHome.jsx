import { useNavigate } from "react-router-dom";
import React from "react";
// import cars from "../Pages/Cars"
import ford from  "../img/car3.png";
import car2 from  "../img/car4.png";
import car5 from  "../img/car5.png";
import car6 from  "../img/car6.png";

const ClassicCarsSection = () => {

    const navigate = useNavigate();

    const handleClick = () => {
      navigate("/cars");}
    
  return (
    <section className="home-section flex flex-col items-center text-center p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-4 font-[cursive]">
        Discover your perfect classic car
      </h1>
      <p className="text-lg text-gray-600 max-w-xl mb-6 font-[cursive]">
        We offer you a wide range of reliable classic cars that suit your needs and budget.
      </p>
      <div className="car-images grid grid-cols-2 md:grid-cols-4 gap-4">
        <img className="w-full h-40 object-cover rounded-lg transition-transform duration-300 transform hover:scale-130" src={ford} />
        <img className="w-full h-40 object-cover rounded-lg transition-transform duration-300 transform hover:scale-130" src={car6} alt="Car 4" />
        <img className="w-full h-40 object-cover rounded-lg transition-transform duration-300 transform hover:scale-130" src={car2} alt="Car 2" />
        <img className="w-full h-40 object-cover rounded-lg transition-transform duration-300 transform hover:scale-130" src={car5} alt="Car 3" />
      </div>
      <button
      onClick={handleClick}
      className="mt-6 px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-700 transition"
    >
      Explore More
    </button>
    </section>
  );
};

export default ClassicCarsSection;