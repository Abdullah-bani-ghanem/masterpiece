// import React, { useState } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';

// const CarInfoForm = () => {
//     const [formData, setFormData] = useState({
//         make: '',
//         model: '',
//         year: '',
//         color: '',
//         licensePlate: '',
//         mileage: '',
//         fuelType: '',
//         transmission: 'automatic',
//         price: '',
//         condition: '',
//         description: ''
//     });

//     const [carImages, setCarImages] = useState([]);
//     const [imagePreviews, setImagePreviews] = useState([]);
//     const [success, setSuccess] = useState(false);
//     const [error, setError] = useState(null);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     const handleImageChange = (e) => {
//         const files = Array.from(e.target.files);
//         setCarImages(files);
//         const previews = files.map(file => URL.createObjectURL(file));
//         setImagePreviews(previews);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const formDataToSend = new FormData();
//             Object.entries(formData).forEach(([key, value]) => {
//                 formDataToSend.append(key, value);
//             });

//             carImages.forEach((image) => {
//                 formDataToSend.append('images', image);
//             });

//             const token = localStorage.getItem('token');

//             const res = await axios.post('http://localhost:5000/api/cars/submit', formDataToSend, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                     Authorization: `Bearer ${token}`,
//                 },
//             });

//             if (res.status === 201) {
//                 Swal.fire({
//                     icon: 'success',
//                     title: 'Car Submitted',
//                     text: '✅ Your car has been submitted successfully and is awaiting admin approval.',
//                     confirmButtonText: 'OK'
//                 });

//                 setFormData({
//                     make: '', model: '', year: '', color: '', licensePlate: '', mileage: '', fuelType: '', transmission: 'automatic', price: '', description: ''
//                 });
//                 setCarImages([]);
//                 setImagePreviews([]);
//                 setSuccess(true);
//             }
//         } catch (err) {
//             console.error('Submit error:', err);
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Submission Failed',
//                 text: 'An error occurred while submitting. Please make sure all data is entered correctly.',
//                 confirmButtonText: 'OK'
//             });
//             setError('An error occurred while submitting. Please make sure all data is entered correctly.');
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gray-100 dark:bg-gray-800 py-10 px-4">
//             <div className="bg-gray-700 bg-opacity-70 bg-cover bg-center rounded-lg mb-8 p-10 text-center text-white shadow-lg" style={{
//                 backgroundImage: 'url("https://images.unsplash.com/photo-1601841396256-f7953ce4f564?w=600")'
//             }}>
//                 <h1 className="text-5xl font-bold font-[cursive] mb-4 drop-shadow">Form</h1>
//                 <p className="text-xl font-[cursive] max-w-2xl mx-auto">
//                     "Please fill in the details of your car to list it for sale – provide accurate information to help potential buyers make informed decisions."
//                 </p>
//             </div>

//             <div className="max-w-3xl mx-auto bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6">
//                 <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white font-[cursive] mb-6">
//                     Car Information Form
//                 </h2>

//                 {success && <p className="text-green-600 text-center">✅ The car has been submitted successfully!</p>}
//                 {error && <p className="text-red-600 text-center">{error}</p>}

//                 <form onSubmit={handleSubmit} className="space-y-6">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         {[{ label: 'Make', name: 'make' }, { label: 'Model', name: 'model' }, { label: 'Year', name: 'year', type: 'number' }, { label: 'Color', name: 'color' }, { label: 'License Plate', name: 'licensePlate' }, { label: 'Mileage', name: 'mileage', type: 'number' }].map(({ label, name, type = 'text' }) => (
//                             <div key={name}>
//                                 <label htmlFor={name} className="block text-sm font-[cursive] text-gray-700 dark:text-gray-200">{label}</label>
//                                 <input
//                                     type={type}
//                                     id={name}
//                                     name={name}
//                                     value={formData[name]}
//                                     onChange={handleChange}
//                                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-gray-600 dark:text-white dark:border-gray-500"
//                                     required
//                                 />
//                             </div>
//                         ))}

//                         <div>
//                             <label htmlFor="condition" className="block text-sm font-[cursive] text-gray-700 dark:text-gray-200">
//                                 Condition
//                             </label>
//                             <select
//                                 id="condition"
//                                 name="condition"
//                                 value={formData.condition}
//                                 onChange={handleChange}
//                                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-gray-600 dark:text-white dark:border-gray-500"
//                                 required
//                             >
//                                 <option value="">Select condition</option>
//                                 <option value="new">New</option>
//                                 <option value="used">Used</option>
//                             </select>
//                         </div>

//                         <div>
//                             <label htmlFor="fuelType" className="block text-sm font-[cursive] text-gray-700 dark:text-gray-200">Fuel Type</label>
//                             <select
//                                 id="fuelType"
//                                 name="fuelType"
//                                 value={formData.fuelType}
//                                 onChange={handleChange}
//                                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-gray-600 dark:text-white dark:border-gray-500"
//                                 required
//                             >
//                                 <option value="">Select fuel type</option>
//                                 <option value="gasoline">Gasoline</option>
//                                 <option value="diesel">Diesel</option>
//                                 <option value="electric">Electric</option>
//                                 <option value="hybrid">Hybrid</option>
//                             </select>
//                         </div>

//                         <div>
//                             <label className="block text-sm font-[cursive] text-gray-700 dark:text-gray-200">Transmission</label>
//                             <div className="mt-2 space-y-2">
//                                 {['automatic', 'manual'].map((option) => (
//                                     <div key={option} className="flex items-center">
//                                         <input
//                                             type="radio"
//                                             id={option}
//                                             name="transmission"
//                                             value={option}
//                                             checked={formData.transmission === option}
//                                             onChange={handleChange}
//                                             className="h-4 w-4 text-green-600"
//                                         />
//                                         <label htmlFor={option} className="ml-2 text-sm text-gray-700 dark:text-gray-200 font-[cursive] capitalize">
//                                             {option}
//                                         </label>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>

//                         <div>
//                             <label htmlFor="price" className="block text-sm font-[cursive] text-gray-700 dark:text-gray-200">Price ($)</label>
//                             <input
//                                 type="number"
//                                 id="price"
//                                 name="price"
//                                 value={formData.price}
//                                 onChange={handleChange}
//                                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-600 dark:text-white dark:border-gray-500"
//                                 required
//                             />
//                         </div>
//                     </div>

//                     <div>
//                         <label htmlFor="description" className="block text-sm font-[cursive] text-gray-700 dark:text-gray-200">Description</label>
//                         <textarea
//                             id="description"
//                             name="description"
//                             value={formData.description}
//                             onChange={handleChange}
//                             rows="4"
//                             className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-gray-600 dark:text-white dark:border-gray-500"
//                             required
//                         ></textarea>
//                     </div>

//                     {/* Image Upload */}
//                     <div>
//                         <label htmlFor="carImage" className="block text-sm font-[cursive] text-gray-700 dark:text-gray-200">
//                             Upload Car Images
//                         </label>
//                         <input
//                             type="file"
//                             id="carImage"
//                             accept="image/*"
//                             multiple
//                             onChange={handleImageChange}
//                             className="mt-1 block w-full text-sm text-gray-900 bg-white border border-gray-300 rounded-lg cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
//                         />

//                         {imagePreviews.length > 0 && (
//                             <div className="grid grid-cols-2 gap-2 mt-4">
//                                 {imagePreviews.map((src, index) => (
//                                     <img
//                                         key={index}
//                                         src={src}
//                                         alt={`Preview ${index}`}
//                                         className="w-full h-auto rounded-md shadow-md"
//                                     />
//                                 ))}
//                             </div>
//                         )}
//                     </div>

//                     <div className="text-center">
//                         <button
//                             type="submit"
//                             className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
//                         >
//                             Submit
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default CarInfoForm;



















import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const CarInfoForm = () => {
    const [formData, setFormData] = useState({
        make: '',
        model: '',
        year: '',
        color: '',
        licensePlate: '',
        mileage: '',
        fuelType: '',
        transmission: 'automatic',
        price: '',
        condition: '',
        description: '',
        userName: '', // إضافة اسم المستخدم
        userEmail: '', // إضافة البريد الإلكتروني
        userPhone: '', // إضافة رقم الهاتف
    });

    const [carImages, setCarImages] = useState([]);
    const [imagePreviews, setImagePreviews] = useState([]);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setCarImages(files);
        const previews = files.map(file => URL.createObjectURL(file));
        setImagePreviews(previews);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formDataToSend = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                formDataToSend.append(key, value);
            });

            carImages.forEach((image) => {
                formDataToSend.append('images', image);
            });

            const token = localStorage.getItem('token');

            const res = await axios.post('http://localhost:5000/api/cars/submit', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`,
                },
            });

            if (res.status === 201) {
                Swal.fire({
                    icon: 'success',
                    title: 'Car Submitted',
                    text: '✅ Your car has been submitted successfully and is awaiting admin approval.',
                    confirmButtonText: 'OK'
                });

                setFormData({
                    make: '', model: '', year: '', color: '', licensePlate: '', mileage: '', fuelType: '', transmission: 'automatic', price: '', description: '', userName: '', userEmail: '', userPhone: ''
                });
                setCarImages([]);
                setImagePreviews([]);
                setSuccess(true);
            }
        } catch (err) {
            console.error('Submit error:', err);
            Swal.fire({
                icon: 'error',
                title: 'Submission Failed',
                text: 'An error occurred while submitting. Please make sure all data is entered correctly.',
                confirmButtonText: 'OK'
            });
            setError('An error occurred while submitting. Please make sure all data is entered correctly.');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-800 py-10 px-4">
            <div className="bg-gray-700 bg-opacity-70 bg-cover bg-center rounded-lg mb-8 p-10 text-center text-white shadow-lg" style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1601841396256-f7953ce4f564?w=600")'
            }}>
                <h1 className="text-5xl font-bold font-[cursive] mb-4 drop-shadow">Form</h1>
                <p className="text-xl font-[cursive] max-w-2xl mx-auto">
                    "Please fill in the details of your car to list it for sale – provide accurate information to help potential buyers make informed decisions."
                </p>
            </div>

            <div className="max-w-3xl mx-auto bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white font-[cursive] mb-6">
                    Car Information Form
                </h2>

                {success && <p className="text-green-600 text-center">✅ The car has been submitted successfully!</p>}
                {error && <p className="text-red-600 text-center">{error}</p>}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[{ label: 'Make', name: 'make' }, { label: 'Model', name: 'model' }, { label: 'Year', name: 'year', type: 'number' }, { label: 'Color', name: 'color' }, { label: 'License Plate', name: 'licensePlate' }, { label: 'Mileage', name: 'mileage', type: 'number' }].map(({ label, name, type = 'text' }) => (
                            <div key={name}>
                                <label htmlFor={name} className="block text-sm font-[cursive] text-gray-700 dark:text-gray-200">{label}</label>
                                <input
                                    type={type}
                                    id={name}
                                    name={name}
                                    value={formData[name]}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-gray-600 dark:text-white dark:border-gray-500"
                                    required
                                />
                            </div>
                        ))}

                        <div>
                            <label htmlFor="condition" className="block text-sm font-[cursive] text-gray-700 dark:text-gray-200">
                                Condition
                            </label>
                            <select
                                id="condition"
                                name="condition"
                                value={formData.condition}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-gray-600 dark:text-white dark:border-gray-500"
                                required
                            >
                                <option value="">Select condition</option>
                                <option value="new">New</option>
                                <option value="used">Used</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="fuelType" className="block text-sm font-[cursive] text-gray-700 dark:text-gray-200">Fuel Type</label>
                            <select
                                id="fuelType"
                                name="fuelType"
                                value={formData.fuelType}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-gray-600 dark:text-white dark:border-gray-500"
                                required
                            >
                                <option value="">Select fuel type</option>
                                <option value="gasoline">Gasoline</option>
                                <option value="diesel">Diesel</option>
                                <option value="electric">Electric</option>
                                <option value="hybrid">Hybrid</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-[cursive] text-gray-700 dark:text-gray-200">Transmission</label>
                            <div className="mt-2 space-y-2">
                                {['automatic', 'manual'].map((option) => (
                                    <div key={option} className="flex items-center">
                                        <input
                                            type="radio"
                                            id={option}
                                            name="transmission"
                                            value={option}
                                            checked={formData.transmission === option}
                                            onChange={handleChange}
                                            className="h-4 w-4 text-green-600"
                                        />
                                        <label htmlFor={option} className="ml-2 text-sm text-gray-700 dark:text-gray-200 font-[cursive] capitalize">
                                            {option}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="price" className="block text-sm font-[cursive] text-gray-700 dark:text-gray-200">Price ($)</label>
                            <input
                                type="number"
                                id="price"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-600 dark:text-white dark:border-gray-500"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="description" className="block text-sm font-[cursive] text-gray-700 dark:text-gray-200">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows="4"
                            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-gray-600 dark:text-white dark:border-gray-500"
                            required
                        ></textarea>
                    </div>

                    {/* User Contact Details */}
                    <div className="mt-6">
                        <h3 className="text-xl font-semibold text-white mb-4">User Contact Details</h3>
                        <div>
                            <label htmlFor="userEmail" className="block text-sm font-[cursive] text-gray-700 dark:text-gray-200">Email</label>
                            <input
                                type="email"
                                id="userEmail"
                                name="userEmail"
                                value={formData.userEmail}
                                onChange={handleChange}
                                className="mt-1 block w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="userPhone" className="block text-sm font-[cursive] text-gray-700 dark:text-gray-200">Phone Number</label>
                            <input
                                type="tel"
                                id="userPhone"
                                name="userPhone"
                                value={formData.userPhone}
                                onChange={handleChange}
                                className="mt-1 block w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="userName" className="block text-sm font-[cursive] text-gray-700 dark:text-gray-200">Name</label>
                            <input
                                type="text"
                                id="userName"
                                name="userName"
                                value={formData.userName}
                                onChange={handleChange}
                                className="mt-1 block w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-md"
                            />
                        </div>
                    </div>

                    {/* Image Upload */}
                    <div>
                        <label htmlFor="carImage" className="block text-sm font-[cursive] text-gray-700 dark:text-gray-200">
                            Upload Car Images
                        </label>
                        <input
                            type="file"
                            id="carImage"
                            accept="image/*"
                            multiple
                            onChange={handleImageChange}
                            className="mt-1 block w-full text-sm text-gray-900 bg-white border border-gray-300 rounded-lg cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        />

                        {imagePreviews.length > 0 && (
                            <div className="grid grid-cols-2 gap-2 mt-4">
                                {imagePreviews.map((src, index) => (
                                    <img
                                        key={index}
                                        src={src}
                                        alt={`Preview ${index}`}
                                        className="w-full h-auto rounded-md shadow-md"
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CarInfoForm;
