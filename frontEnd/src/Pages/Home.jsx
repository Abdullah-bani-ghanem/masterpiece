// import React from 'react'
// import carImg from '../assets/heroCar.png'
// import Slider from '../Component/Slider'
// import ClassicCarsSection from '../Component/sectionHome'

// function Home() {

//   return (
//     <>

// <div style={{ position: "relative" }}>
//   <p  className="absolute top-[200px] left-[370px] text-white font-[cursive] text-[84px] font-bold ">
//     Driven By Drivers
//   </p>

//   <img  className="h-[700px] w-full" src={carImg} />
// </div>


//     <div className='text-center font-extrabold dark:bg-gray-900 text-white ' style={{height:"250px" }}>
//         <p style={{fontSize:"40px",fontFamily:"cursive"}}>Welcome to Classic – Your destination for timeless classic cars</p>
//         <p className="font-[cursive] text-[25px]"  >"Are you a fan of classic cars? Here at Classic, we offer a curated selection of original classic cars that combine luxury and history. Browse our collection of unique vehicles and enjoy an exceptional buying experience. Every car has a story, discover the story that sets you apart.". 🚗✨.</p>
//     </div>


// <Slider/>

// <ClassicCarsSection/>



//     </>
//   )
// }

// export default Home



import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Star, Calendar, Clock, Map, Phone, Mail, ArrowRight, Search } from 'lucide-react';
import heroCar from '../assets/heroCar.png';
import Slider from '../Component/Slider';
import ClassicCarsSection from '../Component/sectionHome';

function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [featuredCars] = useState([
    { id: 1, name: '1967 Ford Mustang', price: '$85,000', image: '/api/placeholder/400/300', year: 1967, mileage: '78,000', location: 'Los Angeles, CA' },
    { id: 2, name: '1955 Mercedes-Benz 300SL', price: '$1,450,000', image: '/api/placeholder/400/300', year: 1955, mileage: '45,000', location: 'Miami, FL' },
    { id: 3, name: '1970 Dodge Challenger', price: '$125,000', image: '/api/placeholder/400/300', year: 1970, mileage: '62,000', location: 'Chicago, IL' },
  ]);
  
  const [testimonials] = useState([
    { id: 1, name: 'James Wilson', rating: 5, text: 'Found my dream 1964 Corvette through Classic. The restoration quality was impeccable, and the buying process was seamless.', image: '/api/placeholder/60/60' },
    { id: 2, name: 'Emily Rodriguez', rating: 5, text: 'The team at Classic helped me source a rare Jaguar E-Type. Their knowledge and passion for classic cars is unmatched.', image: '/api/placeholder/60/60' },
    { id: 3, name: 'Robert Chen', rating: 4, text: 'Excellent collection and service. The only reason for 4 stars is because I wish they had more European classics from the 50s.', image: '/api/placeholder/60/60' },
  ]);
  
  const [events] = useState([
    { id: 1, name: 'Monterey Car Week', date: 'August 15-21, 2025', location: 'Monterey, CA', image: '/api/placeholder/250/150' },
    { id: 2, name: 'Amelia Island Concours', date: 'May 17-19, 2025', location: 'Amelia Island, FL', image: '/api/placeholder/250/150' },
    { id: 3, name: 'Goodwood Revival', date: 'September 5-7, 2025', location: 'Chichester, UK', image: '/api/placeholder/250/150' },
  ]);

  // Categories of classic cars
  const categories = [
    { name: 'American Muscle', count: 45, image: '/api/placeholder/300/200' },
    { name: 'European Luxury', count: 38, image: '/api/placeholder/300/200' },
    { name: 'Vintage Roadsters', count: 27, image: '/api/placeholder/300/200' },
    { name: 'Classic Trucks', count: 19, image: '/api/placeholder/300/200' },
  ];
  
  // Services offered
  const services = [
    { 
      title: "Acquisition Services", 
      description: "Let our experts find your dream classic car based on your specific requirements.", 
      icon: "🔍"
    },
    { 
      title: "Professional Appraisals", 
      description: "Get an accurate valuation of your classic car from our certified appraisers.", 
      icon: "📊"
    },
    { 
      title: "Restoration Services", 
      description: "Our master craftsmen can restore your classic to its original glory or customize it to your preferences.", 
      icon: "🔧"
    },
    { 
      title: "Secure Transportation", 
      description: "Trust our specialized transport services to safely deliver your vehicle anywhere in the world.", 
      icon: "🚚"
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Hero Section with Enhanced CTA */}
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center w-full max-w-4xl px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white font-cursive text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            Driven By Drivers
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
          >
            Experience the golden age of automotive excellence with our curated collection of timeless classics
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-full font-semibold text-lg transition">
              Explore Collection
            </button>
            <button className="bg-transparent hover:bg-white/20 border-2 border-white text-white py-3 px-8 rounded-full font-semibold text-lg transition">
              Book a Viewing
            </button>
          </motion.div>
        </div>
        <img className="h-screen w-full object-cover" src={heroCar} alt="Classic Car Hero" />
      </div>

      {/* Search Bar Section */}
      <div className="bg-white dark:bg-gray-800 py-6 px-4 shadow-lg relative z-20 -mt-16 mx-auto max-w-5xl rounded-xl">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Make & Model</label>
            <div className="relative">
              <input type="text" placeholder="e.g., Ford Mustang" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 dark:bg-gray-700 dark:border-gray-600" />
              <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
            </div>
          </div>
          <div className="w-full md:w-48">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Year (From)</label>
            <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 dark:bg-gray-700 dark:border-gray-600">
              <option>1940</option>
              <option>1950</option>
              <option>1960</option>
              <option>1970</option>
              <option>1980</option>
            </select>
          </div>
          <div className="w-full md:w-48">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Year (To)</label>
            <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 dark:bg-gray-700 dark:border-gray-600">
              <option>1950</option>
              <option>1960</option>
              <option>1970</option>
              <option>1980</option>
              <option>1990</option>
            </select>
          </div>
          <div className="w-full md:w-40 md:self-end">
            <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-semibold text-lg transition">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Welcome Section with Animation */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center py-16 px-4 max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-cursive font-bold mb-6 dark:text-white">Welcome to Classic</h2>
        <p className="text-xl font-cursive dark:text-gray-300 mb-6 leading-relaxed">
          "Are you a fan of classic cars? Here at Classic, we offer a curated selection of original classic cars that combine luxury and history. Browse our collection of unique vehicles and enjoy an exceptional buying experience. Every car has a story, discover the story that sets you apart." 🚗✨
        </p>
        <div className="flex justify-center gap-8 mt-10">
          <div className="text-center">
            <div className="text-red-600 text-5xl font-bold mb-2">500+</div>
            <div className="text-gray-600 dark:text-gray-400">Classic Cars</div>
          </div>
          <div className="text-center">
            <div className="text-red-600 text-5xl font-bold mb-2">35+</div>
            <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-red-600 text-5xl font-bold mb-2">2500+</div>
            <div className="text-gray-600 dark:text-gray-400">Happy Clients</div>
          </div>
        </div>
      </motion.div>

      {/* Featured Categories Section */}
      <div className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold dark:text-white">Browse By Category</h2>
            <a href="/categories" className="flex items-center text-red-600 hover:text-red-700 font-semibold">
              View All Categories <ChevronRight size={20} />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="group relative rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-700"
              >
                <div className="h-48 overflow-hidden">
                  <img src={category.image} alt={category.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-1 dark:text-white">{category.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{category.count} vehicles</p>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <a href={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`} className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-full font-semibold">
                    Explore
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Original Slider Component */}
      <Slider />

      {/* Featured Listings Section */}
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold dark:text-white">Featured Listings</h2>
          <a href="/inventory" className="flex items-center text-red-600 hover:text-red-700 font-semibold">
            View All Vehicles <ChevronRight size={20} />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCars.map(car => (
            <motion.div 
              key={car.id}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative">
                <img src={car.image} alt={car.name} className="w-full h-64 object-cover" />
                <div className="absolute top-3 right-3 bg-red-600 text-white py-1 px-3 rounded-full text-sm font-semibold">
                  Featured
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 dark:text-white">{car.name}</h3>
                <p className="text-2xl text-red-600 font-bold mb-4">{car.price}</p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Calendar size={18} className="mr-2" />
                    <span>{car.year}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Clock size={18} className="mr-2" />
                    <span>{car.mileage} mi</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300 col-span-2">
                    <Map size={18} className="mr-2" />
                    <span>{car.location}</span>
                  </div>
                </div>
                <a href={`/vehicles/${car.id}`} className="block w-full bg-red-600 hover:bg-red-700 text-white text-center py-3 rounded-lg font-semibold transition">
                  View Details
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Our Specialized Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg text-center"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                <a href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="inline-block mt-4 text-red-600 hover:text-red-700 font-semibold">
                  Learn More
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">What Our Clients Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <motion.div 
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      fill={i < testimonial.rating ? "#f59e0b" : "none"} 
                      stroke={i < testimonial.rating ? "#f59e0b" : "#d1d5db"}
                      size={20} 
                      className="mr-1" 
                    />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <span className="font-semibold dark:text-white">{testimonial.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Original ClassicCarsSection Component */}
      <ClassicCarsSection />

      {/* Events Section */}
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Upcoming Classic Car Events</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map(event => (
            <motion.div 
              key={event.id}
              whileHover={{ scale: 1.03 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
            >
              <img src={event.image} alt={event.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 dark:text-white">{event.name}</h3>
                <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                  <Calendar size={18} className="mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                  <Map size={18} className="mr-2" />
                  <span>{event.location}</span>
                </div>
                <a href={`/events/${event.id}`} className="flex items-center text-red-600 hover:text-red-700 font-semibold">
                  Learn More <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Newsletter Section */}
      <div className="bg-red-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-white/90 mb-8 text-lg">Subscribe to our newsletter for exclusive updates on new inventory, special events, and classic car insights.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 max-w-md"
            />
            <button className="bg-gray-900 hover:bg-gray-800 text-white py-3 px-6 rounded-lg font-semibold transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      
      {/* Contact Section */}
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 dark:text-white">Contact Us</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">Have questions about a specific vehicle or need assistance? Our classic car experts are ready to help.</p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Phone size={20} className="text-red-600 mr-4" />
                  <span className="dark:text-white">(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail size={20} className="text-red-600 mr-4" />
                  <span className="dark:text-white">info@classiccarshub.com</span>
                </div>
                <div className="flex items-center">
                  <Map size={20} className="text-red-600 mr-4" />
                  <span className="dark:text-white">123 Vintage Lane, Los Angeles, CA 90001</span>
                </div>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-red-600 hover:text-white transition">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-red-600 hover:text-white transition">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-red-600 hover:text-white transition">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-red-600 hover:text-white transition">
                  <span className="sr-only">YouTube</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-8 md:p-12">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Name</label>
                  <input type="text" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"></textarea>
                </div>
                <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;