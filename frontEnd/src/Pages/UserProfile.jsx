import React, { useEffect, useState } from 'react';
import { FaUserCircle, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendarAlt, FaPencilAlt, FaSignOutAlt } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    bio: '',
    profilePicture: ''
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const navigate = useNavigate();
  const API_BASE_URL = "http://localhost:5000/api";

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/users/check-auth`, {
          withCredentials: true,
        });

        const user = response.data.user;
        setUserData(user);
        setFormData({
          name: user.name || '',
          email: user.email || '',
          phoneNumber: user.phoneNumber || '',
          address: user.address || '',
          bio: user.bio || '',
          profilePicture: user.profilePicture || ''
        });
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.response?.data?.message || 'Authentication verification failed');
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      // Create temporary URL for the selected image to show preview
      const previewURL = URL.createObjectURL(file);
      setImagePreview(previewURL);
    }
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    try {
      // Create FormData to send form data with image
      const submitData = new FormData();
      for (const key in formData) {
        if (key !== 'profilePicture' || !imageFile) {
          submitData.append(key, formData[key]);
        }
      }
  
      // Append image file if selected
      if (imageFile) {
        submitData.append('profileImage', imageFile);
      }
  
      const response = await axios.put(`${API_BASE_URL}/users/update-profile`, submitData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
  
      // Get updated user data from response
      const updatedUser = response.data.user || response.data;
  
      // Update local user state including new profile picture if available
      const updatedUserData = {
        ...userData,
        ...formData,
        profilePicture: updatedUser.profilePicture || userData.profilePicture
      };
  
      setUserData(updatedUserData);
      setIsEditing(false);
  
      // Revoke preview and reset image state
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
        setImagePreview(null);
      }
      setImageFile(null);
  
      Swal.fire({
        icon: 'success',
        title: 'Profile Updated',
        text: 'Your profile has been updated successfully!',
        confirmButtonText: 'OK'
      });
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Update Failed',
        text: err.response?.data?.message || err.message || 'An error occurred while updating the profile.',
        confirmButtonText: 'OK'
      });
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post(`${API_BASE_URL}/users/logout`, {}, {
        withCredentials: true,
      });
      
      Swal.fire({
        icon: 'success',
        title: 'Logged Out',
        text: 'You have been successfully logged out.',
        confirmButtonText: 'OK'
      }).then(() => {
        navigate('/login');
      });
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Logout Failed',
        text: 'An error occurred during logout. You will be redirected to the login page.',
        confirmButtonText: 'OK'
      }).then(() => {
        navigate('/login');
      });
    }
  };

  // Determine the appropriate source for the image
  const getProfileImageSource = () => {
    // Use preview if a new image has been selected
    if (imagePreview) {
      return imagePreview;
    }
    // Use existing image if available
    if (userData?.profilePicture) {
      return userData.profilePicture;
    }
    // No image
    return null;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900 dark:bg-gray-800 text-white">
        <div className="text-2xl text-green-400">Loading data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-gray-900 dark:bg-gray-800 text-white">
        <div className="text-xl text-red-400 mb-4">{error}</div>
        <button
          onClick={() => navigate('/login')}
          className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 dark:bg-gray-800 text-white">
      {/* Hero Section */}
      <div className="bg-gray-700 bg-opacity-70 bg-blend-overlay bg-center bg-cover py-10" 
          style={{ backgroundImage: 'url("https://media.istockphoto.com/id/643897728/photo/woman-using-her-laptop.jpg?s=612x612&w=0&k=20&c=TzNngBCujgdkhwZQ6cctEVyjOAAudJLBytR8M-UHsh4=")' }}>
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="font-[cursive] text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">User Profile</h1>
          <p className="font-[cursive] text-xl md:text-2xl max-w-3xl mx-auto">
            "Welcome to your profile page – here you can view and update your personal information, including your name, profile picture, and account settings."
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-gray-800 dark:bg-gray-700 rounded-lg shadow-xl overflow-hidden border border-gray-700 mt-10">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-teal-700 h-48 flex items-center justify-center relative">
          <div className="absolute right-6 top-6">
            <button
              onClick={handleLogout}
              className="flex items-center text-white bg-gray-800 bg-opacity-60 px-4 py-2 rounded-lg hover:bg-opacity-80 transition duration-300"
            >
              <FaSignOutAlt className="mr-2" />
              <span>Logout</span>
            </button>
          </div>
          <div className="relative">
            {getProfileImageSource() ? (
              <img
                src={getProfileImageSource()}
                alt={userData.name}
                className="w-32 h-32 rounded-full border-4 border-white shadow-xl object-cover"
              />
            ) : (
              <div className="w-32 h-32 rounded-full bg-gray-800 flex items-center justify-center border-4 border-white shadow-xl">
                <FaUserCircle className="w-24 h-24 text-white" />
              </div>
            )}
          </div>
        </div>
        
        {/* User Data */}
        <div className="relative px-6 pb-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-white pt-6">
              {userData?.name || 'User Name'}
            </h1>
            <button 
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300"
            >
              <FaPencilAlt className="mr-2" />
              <span>{isEditing ? 'Cancel Edit' : 'Edit Profile'}</span>
            </button>
          </div>
          
          {isEditing ? (
            <form onSubmit={handleProfileUpdate} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-200 font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-200 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-200 font-medium mb-2">Phone Number</label>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-200 font-medium mb-2">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-200 font-medium mb-2">Bio</label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
              </div>
              <div>
                <label className="block text-gray-200 font-medium mb-2">Profile Picture</label>
                <div className="flex flex-col space-y-4">
                  {/* Current or selected image preview */}
                  {getProfileImageSource() && (
                    <div className="relative w-24 h-24 mt-2">
                      <img 
                        src={getProfileImageSource()} 
                        className="w-24 h-24 rounded-full object-cover border-2 border-green-500"
                        alt="Image Preview" 
                      />
                    </div>
                  )}

                  <div className="flex flex-col">
                    <label className="flex items-center justify-center px-4 py-3 border border-gray-600 rounded-md bg-gray-700 text-white hover:bg-gray-600 transition cursor-pointer">
                      <input
                        type="file"
                        className="hidden"
                        onChange={handleImageChange}
                        accept="image/*"
                      />
                      <span>Choose an image from your device</span>
                    </label>
                    <p className="text-xs text-gray-400 mt-2">
                      * Preferably use a square image with dimensions of at least 400×400 pixels
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
                >
                  Save Changes
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center p-4 border-b border-gray-600 hover:bg-gray-700 rounded-md transition duration-200">
                <FaEnvelope className="text-green-400 text-xl mr-4" />
                <div>
                  <h3 className="text-sm text-gray-400">Email</h3>
                  <p className="text-white">{userData?.email || 'No email available'}</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 border-b border-gray-600 hover:bg-gray-700 rounded-md transition duration-200">
                <FaPhone className="text-green-400 text-xl mr-4" />
                <div>
                  <h3 className="text-sm text-gray-400">Phone Number</h3>
                  <p className="text-white">{userData?.phoneNumber || 'No phone number available'}</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 border-b border-gray-600 hover:bg-gray-700 rounded-md transition duration-200">
                <FaMapMarkerAlt className="text-green-400 text-xl mr-4" />
                <div>
                  <h3 className="text-sm text-gray-400">Address</h3>
                  <p className="text-white">{userData?.address || 'No address available'}</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 border-b border-gray-600 hover:bg-gray-700 rounded-md transition duration-200">
                <FaCalendarAlt className="text-green-400 text-xl mr-4" />
                <div>
                  <h3 className="text-sm text-gray-400">Join Date</h3>
                  <p className="text-white">
                    {userData?.createdAt 
                      ? new Date(userData.createdAt).toLocaleDateString('en-US') 
                      : 'Unknown'}
                  </p>
                </div>
              </div>
              
              {userData?.bio && (
                <div className="p-4 mt-4 bg-gray-700 rounded-md border-l-4 border-green-500">
                  <h3 className="text-lg font-medium text-green-400 mb-2">Bio</h3>
                  <p className="text-gray-100">{userData.bio}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;