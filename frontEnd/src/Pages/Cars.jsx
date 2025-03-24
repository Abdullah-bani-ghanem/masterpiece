// import React from 'react'
// import CarItem from '../Component/carsCard'
// import ford from "../img/car3.png";
// import car2 from "../img/car4.png";
// import car5 from "../img/car5.png";

// function Cars() {
  
//   return (
//     <div className="min-h-screen bg-gray-900 text-white">
//     <br />
//     <h1 className="ml-15 text-4xl font-bold text-white mb-4 font-[cursive]">
//       Discover Your Perfect Classic Car — Timeless Style, Unmatched Performance!
//     </h1>

//     <p className="ml-160 text-lg text-gray-300 max-w-xl mb-6 font-[cursive]">
//       "Available Cars for Sale"
//     </p>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

//         <CarItem
//           image={ford}
//           title="2020 Toyota Corolla"
//           price="$15,000"
//           mileage="30,000 miles"
//           detailsLink="#"
//         />


//         <CarItem
//           image={car2}
//           title="2020 Toyota Corolla"
//           price="$15,000"
//           mileage="30,000 miles"
//           detailsLink="#"
//         />


//         <CarItem
//           image={car5}
//           title="2020 Toyota Corolla"
//           price="$15,000"
//           mileage="30,000 miles"
//           detailsLink="#"
//         />


//         <CarItem
//           image={ford}
//           title="2020 Toyota Corolla"
//           price="$15,000"
//           mileage="30,000 miles"
//           detailsLink="#"
//         />


//         <CarItem
//           image={car2}
//           title="2020 Toyota Corolla"
//           price="$15,000"
//           mileage="30,000 miles"
//           detailsLink="#"
//         />


//         <CarItem
//           image={car5}
//           title="2020 Toyota Corolla"
//           price="$15,000"
//           mileage="30,000 miles"
//           detailsLink="#"
//         />


//         <CarItem
//           image={ford}
//           title="2020 Toyota Corolla"
//           price="$15,000"
//           mileage="30,000 miles"
//           detailsLink="#"
//         />


//         <CarItem
//           image={car2}
//           title="2020 Toyota Corolla"
//           price="$15,000"
//           mileage="30,000 miles"
//           detailsLink="#"
//         />


//         <CarItem
//           image={car5}
//           title="2020 Toyota Corolla"
//           price="$15,000"
//           mileage="30,000 miles"
//           detailsLink="#"
//         />

//       </div>

//     </div>
//   )
// }

// export default Cars
import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaArrowUp, FaSearch, FaFilter, FaComments, FaTimes } from 'react-icons/fa';
import CarItem from '../Component/carsCard';
import ford from "../img/car3.png";
import car2 from "../img/car4.png";
import car5 from "../img/car5.png";

function Cars() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { sender: 'bot', message: 'Hello! How can I help you with finding your perfect classic car today?' }
  ]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    priceRange: [0, 50000],
    year: '',
    make: '',
    model: '',
  });
  // Add state for search query
  const [searchQuery, setSearchQuery] = useState('');

  // Fake car data with more details
  const carsData = [
    {
      id: 1,
      image: ford,
      title: "1968 Ford Mustang GT",
      price: "$32,500",
      mileage: "78,000 miles",
      year: 1968,
      make: "Ford",
      model: "Mustang GT",
      description: "Beautifully restored classic with original V8 engine. Red exterior with black interior.",
      detailsLink: "#"
    },
    {
      id: 2,
      image: car2,
      title: "1957 Chevrolet Bel Air",
      price: "$45,000",
      mileage: "62,000 miles",
      year: 1957,
      make: "Chevrolet",
      model: "Bel Air",
      description: "Iconic turquoise and white two-tone paint. Fully restored interior with modern audio system.",
      detailsLink: "#"
    },
    {
      id: 3,
      image: car5,
      title: "1963 Jaguar E-Type",
      price: "$78,900",
      mileage: "45,300 miles",
      year: 1963,
      make: "Jaguar",
      model: "E-Type",
      description: "Rare Series 1 model. British racing green with tan leather interior. Recent engine rebuild.",
      detailsLink: "#"
    },
    {
      id: 4,
      image: ford,
      title: "1970 Dodge Charger",
      price: "$38,500",
      mileage: "92,000 miles",
      year: 1970,
      make: "Dodge",
      model: "Charger",
      description: "Iconic American muscle car. Black exterior with matching interior. 440 V8 engine.",
      detailsLink: "#"
    },
    {
      id: 5,
      image: car2,
      title: "1955 Mercedes-Benz 300SL",
      price: "$125,000",
      mileage: "58,400 miles",
      year: 1955,
      make: "Mercedes-Benz",
      model: "300SL",
      description: "Rare gullwing model. Silver exterior with red leather interior. Museum quality restoration.",
      detailsLink: "#"
    },
    {
      id: 6,
      image: car5,
      title: "1969 Chevrolet Camaro SS",
      price: "$42,000",
      mileage: "88,200 miles",
      year: 1969,
      make: "Chevrolet",
      model: "Camaro SS",
      description: "Rally Sport package. Daytona Yellow with black racing stripes. Numbers matching.",
      detailsLink: "#"
    },
    {
      id: 7,
      image: ford,
      title: "1965 Shelby Cobra",
      price: "$95,500",
      mileage: "32,600 miles",
      year: 1965,
      make: "Shelby",
      model: "Cobra",
      description: "Authentic recreation with Carroll Shelby signature. Blue with white racing stripes.",
      detailsLink: "#"
    },
    {
      id: 8,
      image: car2,
      title: "1959 Cadillac Eldorado",
      price: "$58,000",
      mileage: "64,700 miles",
      year: 1959,
      make: "Cadillac",
      model: "Eldorado",
      description: "Iconic tail fins and chrome. Pink exterior with white interior. Full frame-off restoration.",
      detailsLink: "#"
    },
    {
      id: 9,
      image: car5,
      title: "1967 Porsche 911S",
      price: "$115,000",
      mileage: "78,300 miles",
      year: 1967,
      make: "Porsche",
      model: "911S",
      description: "Early short-wheelbase model. Original engine and transmission. Complete service history.",
      detailsLink: "#"
    },
  ];

  // Listen for scroll to show/hide back to top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Handle chatbot message submit
  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (chatMessage.trim() === '') return;

    // Add user message to chat history
    setChatHistory([...chatHistory, { sender: 'user', message: chatMessage }]);
    
    // Simulate bot response (in a real app, this would call an API)
    setTimeout(() => {
      let botResponse;
      const msg = chatMessage.toLowerCase();
      
      if (msg.includes('price') || msg.includes('cost')) {
        botResponse = "Our classic cars range from $30,000 to $150,000 depending on make, model, and condition. Is there a specific budget you have in mind?";
      } else if (msg.includes('test drive') || msg.includes('see')) {
        botResponse = "We offer private viewings and test drives by appointment. Would you like me to schedule one for you?";
      } else if (msg.includes('financing') || msg.includes('loan')) {
        botResponse = "We offer specialized classic car financing options with competitive rates. I can connect you with our finance team if you're interested.";
      } else {
        botResponse = "Thanks for your message! One of our classic car specialists will get back to you shortly. Is there anything specific you'd like to know about our collection?";
      }
      
      setChatHistory(prev => [...prev, { sender: 'bot', message: botResponse }]);
    }, 1000);
    
    setChatMessage('');
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search form submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Apply search - already handled by the filtered cars logic
  };

  // Filter cars function - now includes search query
  const filteredCars = carsData.filter(car => {
    const priceNum = parseInt(car.price.replace(/\$|,/g, ''));
    const matchesFilters = (
      priceNum >= filters.priceRange[0] && 
      priceNum <= filters.priceRange[1] &&
      (filters.year === '' || car.year.toString().includes(filters.year)) &&
      (filters.make === '' || car.make.toLowerCase().includes(filters.make.toLowerCase())) &&
      (filters.model === '' || car.model.toLowerCase().includes(filters.model.toLowerCase()))
    );
    
    // Add search functionality
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = searchQuery === '' || 
      car.make.toLowerCase().includes(searchLower) ||
      car.model.toLowerCase().includes(searchLower) ||
      car.year.toString().includes(searchLower) ||
      car.title.toLowerCase().includes(searchLower) ||
      car.description.toLowerCase().includes(searchLower);
    
    return matchesFilters && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white relative">
      {/* Header Section with Improved Hero */}
      <div className="bg-black bg-opacity-70 py-12 px-4 mb-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('../img/hero-bg.jpg')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-5xl font-bold mb-6 font-serif tracking-wide text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-red-500">
            Classic Cars Collection
          </h1>
          <p className="text-2xl text-center max-w-3xl mx-auto mb-8 text-gray-100 font-light">
            Discover Your Perfect Classic Car — Timeless Style, Unmatched Performance!
          </p>
          
          {/* Search Bar - Connected to state */}
          <form onSubmit={handleSearchSubmit} className="max-w-2xl mx-auto relative">
            <input 
              type="text" 
              placeholder="Search by make, model, or year..." 
              className="w-full py-3 px-6 rounded-full bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500 text-white"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button type="submit" className="absolute right-3 top-3 text-amber-500">
              <FaSearch size={20} />
            </button>
          </form>
          
          {/* Quick Stats */}
          <div className="flex justify-center mt-8 space-x-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-amber-400">25+</p>
              <p className="text-gray-300">Unique Models</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-amber-400">100%</p>
              <p className="text-gray-300">Verified History</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-amber-400">30-Day</p>
              <p className="text-gray-300">Guarantee</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4">
        {/* Filter Section */}
        <div className="mb-8 flex justify-between items-center">
          <p className="text-xl text-amber-400 font-semibold">
            {filteredCars.length} Available Classic Cars
            {searchQuery && <span> matching "{searchQuery}"</span>}
          </p>
          
          <button 
            onClick={() => setFilterOpen(!filterOpen)}
            className="flex items-center space-x-2 px-4 py-2 rounded-md bg-gray-800 hover:bg-gray-700 transition duration-300"
          >
            <FaFilter />
            <span>Filters</span>
          </button>
        </div>
        
        {/* Expandable Filter Panel */}
        {filterOpen && (
          <div className="mb-8 bg-gray-800 rounded-lg p-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Price Range</label>
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    min="0"
                    max="150000"
                    step="5000"
                    value={filters.priceRange[1]}
                    onChange={(e) => setFilters({...filters, priceRange: [0, parseInt(e.target.value)]})}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="text-amber-400 font-medium">${filters.priceRange[1].toLocaleString()}</span>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Year</label>
                <input
                  type="text"
                  placeholder="e.g. 1965"
                  value={filters.year}
                  onChange={(e) => setFilters({...filters, year: e.target.value})}
                  className="w-full py-2 px-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Make/Model</label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Make"
                    value={filters.make}
                    onChange={(e) => setFilters({...filters, make: e.target.value})}
                    className="w-full py-2 px-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                  <input
                    type="text"
                    placeholder="Model"
                    value={filters.model}
                    onChange={(e) => setFilters({...filters, model: e.target.value})}
                    className="w-full py-2 px-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-4 flex justify-end">
              <button 
                onClick={() => {
                  setFilters({priceRange: [0, 50000], year: '', make: '', model: ''});
                  setSearchQuery('');
                }}
                className="px-4 py-2 mr-2 rounded bg-gray-700 hover:bg-gray-600 transition duration-300"
              >
                Reset All
              </button>
              <button 
                onClick={() => setFilterOpen(false)}
                className="px-4 py-2 rounded bg-amber-600 hover:bg-amber-700 transition duration-300"
              >
                Apply Filters
              </button>
            </div>
          </div>
        )}
        
        {/* No Results Message */}
        {filteredCars.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-2xl font-bold text-amber-400 mb-4">No matches found</h3>
            <p className="text-gray-300 mb-6">
              Try adjusting your search criteria or filters to find classic cars in our collection.
            </p>
            <button 
              onClick={() => {
                setFilters({priceRange: [0, 150000], year: '', make: '', model: ''});
                setSearchQuery('');
              }}
              className="px-6 py-3 bg-amber-600 hover:bg-amber-700 rounded-lg transition duration-300"
            >
              View All Cars
            </button>
          </div>
        )}
        
        {/* Cars Grid with Improved Card Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredCars.map(car => (
            <div key={car.id} className="bg-gray-800 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl shadow-md">
              <div className="relative">
                <img src={car.image} alt={car.title} className="w-full h-48 object-cover" />
                <div className="absolute top-0 right-0 bg-amber-600 text-white px-3 py-1 rounded-bl-lg font-bold">
                  {car.price}
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2 text-amber-400">{car.title}</h3>
                <p className="text-gray-300 mb-3">{car.description}</p>
                
                <div className="flex justify-between text-sm text-gray-400 mb-4">
                  <span>Year: {car.year}</span>
                  <span>{car.mileage}</span>
                </div>
                
                <a 
                  href={car.detailsLink} 
                  className="block w-full text-center py-2 bg-gray-700 hover:bg-amber-600 transition duration-300 rounded font-medium"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4 text-amber-400">Can't find what you're looking for?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            We specialize in sourcing rare classic cars. Tell us what you're looking for and our experts will find it for you.
          </p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
            Request a Custom Search
          </button>
        </div>
      </div>
      
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/1234567890" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition duration-300 z-40"
      >
        <FaWhatsapp size={24} />
      </a>
      
      {/* Back to Top Button */}
      {showBackToTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gray-700 text-white p-4 rounded-full shadow-lg hover:bg-gray-600 transition duration-300 z-40"
        >
          <FaArrowUp size={20} />
        </button>
      )}
      
      {/* Chatbot Button */}
      <button 
        onClick={() => setShowChatbot(!showChatbot)}
        className="fixed bottom-24 left-6 bg-amber-600 text-white p-4 rounded-full shadow-lg hover:bg-amber-700 transition duration-300 z-40"
      >
        {showChatbot ? <FaTimes size={24} /> : <FaComments size={24} />}
      </button>
      
      {/* Chatbot Panel */}
      {showChatbot && (
        <div className="fixed bottom-40 left-6 w-80 bg-gray-800 rounded-lg shadow-xl overflow-hidden z-40 animate-slide-up">
          <div className="bg-amber-600 p-4">
            <h3 className="font-bold">Classic Car Concierge</h3>
            <p className="text-sm text-amber-100">Ask us anything about our collection</p>
          </div>
          
          <div className="h-80 overflow-y-auto p-4" style={{scrollBehavior: 'smooth'}}>
            {chatHistory.map((chat, index) => (
              <div 
                key={index}
                className={`mb-3 ${chat.sender === 'user' ? 'text-right' : 'text-left'}`}
              >
                <div 
                  className={`inline-block p-3 rounded-lg ${
                    chat.sender === 'user' 
                      ? 'bg-amber-600 text-white rounded-br-none' 
                      : 'bg-gray-700 text-white rounded-bl-none'
                  }`}
                >
                  {chat.message}
                </div>
              </div>
            ))}
          </div>
          
          <form onSubmit={handleChatSubmit} className="p-3 border-t border-gray-700 flex">
            <input
              type="text"
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-gray-700 rounded-l p-2 outline-none"
            />
            <button 
              type="submit"
              className="bg-amber-600 text-white px-4 rounded-r"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Cars;  