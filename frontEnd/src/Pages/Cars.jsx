import React from 'react'
import CarItem from '../Component/carsCard'
import ford from "../img/car3.png";
import car2 from "../img/car4.png";
import car5 from "../img/car5.png";

function Cars() {
  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
    <br />
    <h1 className="ml-15 text-4xl font-bold text-white mb-4 font-[cursive]">
      Discover Your Perfect Classic Car — Timeless Style, Unmatched Performance!
    </h1>

    <p className="ml-160 text-lg text-gray-300 max-w-xl mb-6 font-[cursive]">
      "Available Cars for Sale"
    </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <CarItem
          image={ford}
          title="2020 Toyota Corolla"
          price="$15,000"
          mileage="30,000 miles"
          detailsLink="#"
        />


        <CarItem
          image={car2}
          title="2020 Toyota Corolla"
          price="$15,000"
          mileage="30,000 miles"
          detailsLink="#"
        />


        <CarItem
          image={car5}
          title="2020 Toyota Corolla"
          price="$15,000"
          mileage="30,000 miles"
          detailsLink="#"
        />


        <CarItem
          image={ford}
          title="2020 Toyota Corolla"
          price="$15,000"
          mileage="30,000 miles"
          detailsLink="#"
        />


        <CarItem
          image={car2}
          title="2020 Toyota Corolla"
          price="$15,000"
          mileage="30,000 miles"
          detailsLink="#"
        />


        <CarItem
          image={car5}
          title="2020 Toyota Corolla"
          price="$15,000"
          mileage="30,000 miles"
          detailsLink="#"
        />


        <CarItem
          image={ford}
          title="2020 Toyota Corolla"
          price="$15,000"
          mileage="30,000 miles"
          detailsLink="#"
        />


        <CarItem
          image={car2}
          title="2020 Toyota Corolla"
          price="$15,000"
          mileage="30,000 miles"
          detailsLink="#"
        />


        <CarItem
          image={car5}
          title="2020 Toyota Corolla"
          price="$15,000"
          mileage="30,000 miles"
          detailsLink="#"
        />

      </div>

    </div>
  )
}

export default Cars
