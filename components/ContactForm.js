// components/ContactForm.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message.');
      });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold">Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold">Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold">Message</label>
        <textarea name="message" value={formData.message} onChange={handleChange} className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"></textarea>
      </div>
      <button type="submit" className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 transition duration-300">Send</button>
    </form>
  );
};

export default ContactForm;
