import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import Swal from 'sweetalert2';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  // Animation effect on component mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log('Login attempt:', { email, password, rememberMe });
    
  //   try {
  //     const res = await axios.post(
  //       "http://localhost:5000/api/users/login",
  //       { email, password }, // البيانات
  //       { withCredentials: true } // إعدادات الطلب
  //     );

  //     localStorage.setItem("token", res.data.token);
  //     alert("تم تسجيل الدخول بنجاح!");
  //     navigate("/");
  //   } catch (error) {
  //     alert("خطأ في تسجيل الدخول: " + (error.response?.data?.message || "حدث خطأ"));
  //   }
  // };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password, rememberMe });
  
    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/login",
        { email, password },
        { withCredentials: true }
      );
  
      localStorage.setItem("token", res.data.token);
  
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'You have logged in successfully!',
        confirmButtonText: 'OK'
      }).then(() => {
        navigate("/");
      });
  
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: error.response?.data?.message || "An unexpected error occurred",
        confirmButtonText: 'OK'
      });
    }
  };

  const handleGoogleLogin = () => {
    console.log('Attempting to login with Google');
    // Add your Google login logic here
    // Usually implemented with firebase auth or OAuth library
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full flex bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Left side - Login form */}
        <motion.div 
          className="w-full md:w-1/2 p-10 space-y-8"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Title */}
          <motion.div className="text-center" variants={itemVariants}>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
            <p className="mt-2 text-sm text-gray-600">
              Or{' '}
              <Link to="/register" className="font-medium text-green-600 hover:text-green-500">
                create a new account
              </Link>
            </p>
          </motion.div>

          {/* Login Form */}
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md space-y-4">
              <motion.div variants={itemVariants}>
                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="Enter your email"
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="Enter your password"
                />
              </motion.div>
            </div>

            <motion.div className="flex items-center justify-between" variants={itemVariants}>
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-green-600 hover:text-green-500">
                  Forgot your password?
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-green-500 group-hover:text-green-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Sign in
              </button>
            </motion.div>
          </form>

          {/* Google Login Option */}
          <div className="mt-6">
            <motion.div className="relative" variants={itemVariants}>
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or sign in with</span>
              </div>
            </motion.div>

            <motion.div className="mt-6" variants={itemVariants}>
              <button
                onClick={handleGoogleLogin}
                className="w-full flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="#EA4335"
                    d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z"
                  />
                  <path
                    fill="#34A853"
                    d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2970142 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z"
                  />
                  <path
                    fill="#4A90E2"
                    d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5818182 23.1272727,9.90909091 L12,9.90909091 L12,14.7272727 L18.4363636,14.7272727 C18.1187732,16.013119 17.2662994,17.0926947 16.0407269,18.0125889 L19.834192,20.9995801 Z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z"
                  />
                </svg>
                Sign in with Google
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Right side - Image with animation */}
        <motion.div 
          className="hidden md:block md:w-1/2 bg-green-600 relative overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          animate={{ 
            opacity: 1, 
            x: 0,
            transition: { duration: 0.8, delay: 0.3 }
          }}
        >
          {/* Animated circles in background */}
          <motion.div 
            className="absolute w-64 h-64 rounded-full bg-green-500 opacity-40" 
            style={{ top: '10%', right: '-20%' }}
            animate={{ 
              scale: [1, 1.2, 1],
              transition: { 
                duration: 8, 
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
          />
          <motion.div 
            className="absolute w-40 h-40 rounded-full bg-green-400 opacity-30" 
            style={{ bottom: '10%', left: '5%' }}
            animate={{ 
              scale: [1, 1.3, 1],
              transition: { 
                duration: 6, 
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1
              }
            }}
          />
          
          {/* Centered image */}
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <motion.img 
              src="https://images.unsplash.com/photo-1587750059638-e7e8c43b99fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xhc3NpYyUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Login illustration" 
              className="max-w-full max-h-full rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.8, 
                  delay: 0.6
                }
              }}
            />
          </div>
          
          {/* Text on image */}
          <motion.div 
            className="absolute bottom-8 left-0 right-0 text-center text-white px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.8, 
                delay: 0.9
              }
            }}
          >
            <h3 className="text-xl font-bold mb-2">Welcome Back</h3>
            <p className="text-indigo-100 text-sm">We're glad to see you again</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;