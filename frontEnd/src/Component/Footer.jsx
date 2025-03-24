import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Star, Clock, Settings } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="dark:bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/4 px-4 mb-8">
            <div className="mb-6">
              <div className="bg-white rounded-lg p-4 inline-block mb-4">
                <h2 className="text-gray-900 font-bold text-2xl">كلاسيك<span className="text-green-500">كارز</span></h2>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              نحن متخصصون في بيع وشراء وترميم السيارات الكلاسيكية النادرة منذ عام 1995،
              مع التزامنا بتقديم خدمة استثنائية وخبرة عميقة في مجال السيارات الكلاسيكية.
            </p>
            <div className="flex mt-4">
              <a href="#" className="text-gray-300 hover:text-white mr-4">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white mr-4">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white mr-4">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/4 px-4 mb-8">
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul>
              {["الصفحة الرئيسية", "المعرض", "خدماتنا", "من نحن", "المدونة", "اتصل بنا"].map((link, index) => (
                <li key={index} className="mb-2">
                  <a href="#" className="text-gray-300 hover:text-green-400 transition duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-1/4 px-4 mb-8">
            <h3 className="text-xl font-bold mb-4">لماذا تختارنا</h3>
            <ul>
              {[
                { icon: <Star size={20} />, title: "خبرة أكثر من 25 عام", desc: "في مجال السيارات الكلاسيكية" },
                { icon: <Settings size={20} />, title: "فريق فني متخصص", desc: "بأعلى معايير الجودة العالمية" },
                { icon: <Clock size={20} />, title: "خدمة على مدار الساعة", desc: "دعم فني ولوجستي متكامل" }
              ].map((item, index) => (
                <li key={index} className="mb-4 flex items-start">
                  <span className="text-green-400 mt-1 ml-2">{item.icon}</span>
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <span className="text-gray-400 text-sm">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-1/4 px-4 mb-8">
            <h3 className="text-xl font-bold mb-4">اتصل بنا</h3>
            <ul>
              <li className="flex items-start mb-4">
                <MapPin size={20} className="text-green-400 mt-1 ml-2" />
                <span className="text-gray-300">شارع الملك عبدالله، عمّان، الأردن</span>
              </li>
              <li className="flex items-center mb-4">
                <Phone size={20} className="text-green-400 ml-2" />
                <span className="text-gray-300">+962 6 000 0000</span>
              </li>
              <li className="flex items-center mb-4">
                <Mail size={20} className="text-green-400 ml-2" />
                <span className="text-gray-300">info@classicars.jo</span>
              </li>
            </ul>
            <p className="text-gray-300 mt-4">
              ساعات العمل: <span className="font-bold">السبت - الخميس، 10:00 ص - 7:00 م</span>
            </p>
          </div>
        </div>

        <div className="border-t border-green-800 pt-8 mt-8 text-center text-gray-300">
          <p>© {new Date().getFullYear()} شركة السيارات الكلاسيكية. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;























// import React from 'react';
// import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

// const Footer = () => {
//   return (
//     <footer className="dark:bg-gray-900 text-white py-12">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-wrap -mx-4">
//           <div className="w-full md:w-1/4 px-4 mb-8">
//             <h3 className="text-xl font-bold mb-4">عن الشركة</h3>
//             <p className="text-gray-300 mb-4">نحن متخصصون في بيع وشراء وترميم السيارات الكلاسيكية النادرة منذ عام 1995، مع التزامنا بتقديم خدمة استثنائية وخبرة عميقة في مجال السيارات الكلاسيكية.</p>
//             <div className="flex mt-4">
//               <a href="#" className="text-gray-300 hover:text-white mr-4">
//                 <Facebook size={20} />
//               </a>
//               <a href="#" className="text-gray-300 hover:text-white mr-4">
//                 <Instagram size={20} />
//               </a>
//               <a href="#" className="text-gray-300 hover:text-white mr-4">
//                 <Twitter size={20} />
//               </a>
//               <a href="#" className="text-gray-300 hover:text-white">
//                 <Youtube size={20} />
//               </a>
//             </div>
//           </div>
          
//           <div className="w-full md:w-1/4 px-4 mb-8">
//             <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
//             <ul>
//               <li className="mb-2"><a href="#" className="text-gray-300 hover:text-green-400 transition duration-300">الصفحة الرئيسية</a></li>
//               <li className="mb-2"><a href="#" className="text-gray-300 hover:text-green-400 transition duration-300">المعرض</a></li>
//               <li className="mb-2"><a href="#" className="text-gray-300 hover:text-green-400 transition duration-300">خدماتنا</a></li>
//               <li className="mb-2"><a href="#" className="text-gray-300 hover:text-green-400 transition duration-300">من نحن</a></li>
//               <li className="mb-2"><a href="#" className="text-gray-300 hover:text-green-400 transition duration-300">المدونة</a></li>
//               <li className="mb-2"><a href="#" className="text-gray-300 hover:text-green-400 transition duration-300">اتصل بنا</a></li>
//             </ul>
//           </div>
          
//           <div className="w-full md:w-1/4 px-4 mb-8">
//             <h3 className="text-xl font-bold mb-4">معرض الصور</h3>
//             <div className="grid grid-cols-3 gap-2">
//               {[1, 2, 3, 4, 5, 6].map((item) => (
//                 <a key={item} href="#" className="block overflow-hidden rounded">
//                   <div className="h-16 bg-gray-700 hover:opacity-75 transition duration-300"></div>
//                 </a>
//               ))}
//             </div>
//             <a href="#" className="inline-block mt-4 text-green-400 hover:text-green-300 transition duration-300">عرض المزيد من الصور</a>
//           </div>
          
//           <div className="w-full md:w-1/4 px-4 mb-8">
//             <h3 className="text-xl font-bold mb-4">اتصل بنا</h3>
//             <ul>
//               <li className="flex items-start mb-4">
//                 <MapPin size={20} className="text-green-400 mt-1 ml-2" />
//                 <span className="text-gray-300">شارع الملك عبدالله، عمّان، الأردن</span>
//               </li>
//               <li className="flex items-center mb-4">
//                 <Phone size={20} className="text-green-400 ml-2" />
//                 <span className="text-gray-300">+962 6 000 0000</span>
//               </li>
//               <li className="flex items-center mb-4">
//                 <Mail size={20} className="text-green-400 ml-2" />
//                 <span className="text-gray-300">info@classicars.jo</span>
//               </li>
//             </ul>
//             <p className="text-gray-300 mt-4">ساعات العمل: السبت - الخميس، 10:00 ص - 7:00 م</p>
//           </div>
//         </div>
        
//         <div className="border-t border-green-800 pt-8 mt-8 text-center text-gray-300">
//           <p>© {new Date().getFullYear()} شركة السيارات الكلاسيكية. جميع الحقوق محفوظة.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;















// import React from 'react';
// import { Facebook, Instagram, Twitter, Youtube, Send } from 'lucide-react';

// const Footer = () => {
//   return (
//     <footer className="dark:bg-gray-900 text-white py-12">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-wrap -mx-4">
//           <div className="w-full md:w-1/4 px-4 mb-8">
//             <h3 className="text-xl font-bold mb-4">عن الشركة</h3>
//             <p className="text-gray-300 mb-4">نحن متخصصون في بيع وشراء وترميم السيارات الكلاسيكية النادرة منذ عام 1995، مع التزامنا بتقديم خدمة استثنائية وخبرة عميقة في مجال السيارات الكلاسيكية.</p>
//             <div className="flex mt-4">
//               <a href="#" className="text-gray-300 hover:text-white mr-4">
//                 <Facebook size={20} />
//               </a>
//               <a href="#" className="text-gray-300 hover:text-white mr-4">
//                 <Instagram size={20} />
//               </a>
//               <a href="#" className="text-gray-300 hover:text-white mr-4">
//                 <Twitter size={20} />
//               </a>
//               <a href="#" className="text-gray-300 hover:text-white">
//                 <Youtube size={20} />
//               </a>
//             </div>
//           </div>
          
//           <div className="w-full md:w-1/4 px-4 mb-8">
//             <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
//             <ul>
//               <li className="mb-2"><a href="#" className="text-gray-300 hover:text-green-400 transition duration-300">الصفحة الرئيسية</a></li>
//               <li className="mb-2"><a href="#" className="text-gray-300 hover:text-green-400 transition duration-300">المعرض</a></li>
//               <li className="mb-2"><a href="#" className="text-gray-300 hover:text-green-400 transition duration-300">خدماتنا</a></li>
//               <li className="mb-2"><a href="#" className="text-gray-300 hover:text-green-400 transition duration-300">من نحن</a></li>
//               <li className="mb-2"><a href="#" className="text-gray-300 hover:text-green-400 transition duration-300">المدونة</a></li>
//               <li className="mb-2"><a href="#" className="text-gray-300 hover:text-green-400 transition duration-300">اتصل بنا</a></li>
//             </ul>
//           </div>
          
//           <div className="w-full md:w-1/4 px-4 mb-8">
//             <h3 className="text-xl font-bold mb-4">خدماتنا</h3>
//             <ul>
//               <li className="mb-2"><a href="#" className="text-gray-300 hover:text-green-400 transition duration-300">بيع السيارات الكلاسيكية</a></li>
//               <li className="mb-2"><a href="#" className="text-gray-300 hover:text-green-400 transition duration-300">شراء السيارات الكلاسيكية</a></li>
//               <li className="mb-2"><a href="#" className="text-gray-300 hover:text-green-400 transition duration-300">خدمات الترميم</a></li>
//               <li className="mb-2"><a href="#" className="text-gray-300 hover:text-green-400 transition duration-300">قطع غيار</a></li>
//               <li className="mb-2"><a href="#" className="text-gray-300 hover:text-green-400 transition duration-300">تقييم السيارات</a></li>
//               <li className="mb-2"><a href="#" className="text-gray-300 hover:text-green-400 transition duration-300">الشحن والتوصيل</a></li>
//             </ul>
//           </div>
          
//           <div className="w-full md:w-1/4 px-4 mb-8">
//             <h3 className="text-xl font-bold mb-4">النشرة الإخبارية</h3>
//             <p className="text-gray-300 mb-4">اشترك في نشرتنا الإخبارية للحصول على آخر الأخبار والعروض الخاصة.</p>
//             <form>
//               <div className="flex mb-2">
//                 <input
//                   type="email"
//                   placeholder="بريدك الإلكتروني"
//                   className="bg-green-800 text-white px-4 py-2 rounded-r-md border-0 focus:outline-none focus:ring-2 focus:ring-green-400 w-full"
//                 />
//                 <button
//                   type="submit"
//                   className="bg-green-500 text-white px-4 py-2 rounded-l-md hover:bg-green-600 transition duration-300"
//                 >
//                   <Send size={20} />
//                 </button>
//               </div>
//               <label className="flex items-center text-sm">
//                 <input type="checkbox" className="mr-2" />
//                 <span className="text-gray-300 mr-2">أوافق على سياسة الخصوصية</span>
//               </label>
//             </form>
//           </div>
//         </div>
        
//         <div className="border-t border-green-800 pt-8 mt-8 text-center text-gray-300">
//           <p>© {new Date().getFullYear()} شركة السيارات الكلاسيكية. جميع الحقوق محفوظة.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;