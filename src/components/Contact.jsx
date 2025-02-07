

import { motion } from "framer-motion";
import { FaPhone, FaWhatsapp, FaEnvelope, FaInstagram } from "react-icons/fa"; // Icons for the header and cards
import { useState } from "react";
const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Check if all fields are filled
        if (!formData.name || !formData.email || !formData.message) {
          alert("Please fill in all the fields before submitting.");
          return;
        }
    
        // Display success alert
        alert(`Thank you, ${formData.name}! Your message has been sent successfully.`);
    
        // Optionally, you can reset the form after submission
        setFormData({ name: "", email: "", message: "" });
      };
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="contact"
      className="p-4 bg-gray-50"
    >
          <div className="container mx-auto">
              {/* Centered Header with Icon */}
              <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-center mb-12"
              >
                  <h2 className="text-2xl md:text-5xl font-bold flex items-center justify-center gap-2 animate-bounce">
                      <FaEnvelope className="text-purple-800" /> Get in <span className="text-purple-800">Touch</span></h2>
                  <p className="text-gray-600 mt-2">Feel free to reach out to me for any inquiries or collaborations. </p>
              </motion.div>
              <div className="flex flex-col md:flex-row gap-8">
                  {/* Cards on the right */}
                  <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="w-full md:w-1/2 space-y-6"
                  >
                      {/* Call Us Card */}
                      <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-lg text-white cursor-pointer"
                          onClick={() => window.location.href = "tel:+917542067763"}
                      >
                          <div className="flex items-center gap-4">
                              <FaPhone className="text-3xl" />
                              <div>
                                  <h3 className="text-xl font-semibold">Call Us</h3>
                                  <p className="text-gray-200">+917542067763</p>
                              </div>
                          </div>
                      </motion.div>

                      {/* WhatsApp Card */}
                      <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-6 bg-gradient-to-r from-green-500 to-green-600 rounded-lg shadow-lg text-white cursor-pointer"
                          onClick={() => window.open("https://wa.me/+917542067763", "_blank")}
                      >
                          <div className="flex items-center gap-4">
                              <FaWhatsapp className="text-3xl" />
                              <div>
                                  <h3 className="text-xl font-semibold">WhatsApp</h3>
                                  <p className="text-gray-200">Chat with us on WhatsApp</p>
                              </div>
                          </div>
                      </motion.div>

                      {/* Email Us Card */}
                      <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-6 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg shadow-lg text-white cursor-pointer"
                          onClick={() => window.location.href = "mailto:biosamsuddin@gmail.com"}
                      >
                          <div className="flex items-center gap-4">
                              <FaEnvelope className="text-3xl" />
                              <div>
                                  <h3 className="text-xl font-semibold">Email Us</h3>
                                  <p className="text-gray-200">biosamsuddin@gmail.com</p>
                              </div>
                          </div>
                      </motion.div>

                      {/* Instagram QR Code Card */}
                      {/* <motion.div
                          className="flex flex-col md:flex-row items-center justify-center bg-gray-800 p-6 rounded-lg shadow-lg"
                          initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                      >
                          <div className="w-full md:w-4/5  flex justify-center">
                              <img
                                  src="/images/instagram.jpg"
                                  alt="Instagram QR Code"
                                  className="w-full h-64 md:h-96 object-cover rounded-lg shadow-md mask mask-circle"
                              />
                              
                          </div>

                          <div className="w-full md:w-1/5  flex flex-col items-center md:items-start text-center md:text-left mt-6 md:mt-0 md:ml-8">
                              <h3 className="text-2xl font-semibold text-white">Instagram</h3>
                              <p className="text-gray-200 mt-2">Scan to follow me</p>
                          </div>
                      </motion.div> */}
                      
                  </motion.div>
                  {/* Form and Cards Container */}
                  {/* Form on the left */}
                  <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="w-full md:w-1/2 p-8 bg-white rounded-lg shadow-lg"
                  >
                      <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                      <form className="space-y-4">
                          <div className="form-group w-full">
                              <input
                                  type="text"
                                  name="name"
                                  placeholder=""
                                  id="name"
                                  value={formData.name}
                  onChange={handleChange}
                                  className=" w-full py-2 bg-gray-100 rounded-md placeholder:px-4 "
                              />
                              <label htmlFor="name" className="block text-sm font-medium mb-1">
                                  Enter Your Name
                              </label>
                          </div>
     

                          <div className="form-group w-full">
                              <input
                                  type="text"
                                  name="email"
                                  placeholder=""
                                  id="email"
                                  value={formData.email}
                                  onChange={handleChange}
                                  className=" w-full py-2 bg-gray-100 rounded-md placeholder:px-4 "
                              />
                              <label htmlFor="email" className="block text-sm font-medium mb-1">
                                  Your Email
                              </label>
                          </div>
                          
                          <textarea
                          name="message"
                              placeholder="Your Message"
                              value={formData.message}
                              onChange={handleChange}
                              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-800"
                              rows="5"
                          ></textarea>
                          <button
                              type="submit"
                              className="w-full p-3 bg-gradient-to-r from-pink-700 to-yellow-700 text-white font-bold rounded-full shadow-lg hover:shadow-2xl hover:from-yellow-500 hover:to-pink-500 transition-transform transform hover:scale-105 duration-300 cursor-pointer"
                          >
                              Send Message
                          </button>
                      </form>
                  </motion.div>
              </div>
          </div>
    </motion.section>
  );
};

export default Contact;