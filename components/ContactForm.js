import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { SnackbarProvider, useSnackbar } from 'notistack';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const formRef = useRef();
  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_cqftwza',
      'template_x7oz459',
      formRef.current,
      'aF4r3dZwQptZC6Q0p'
    )
      .then((result) => {
        console.log(result.text);
        enqueueSnackbar('Message sent successfully!', { variant: 'success' });
      }, (error) => {
        console.log(error.text);
        enqueueSnackbar('Failed to send message.', { variant: 'error' });
      });
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 mt-5">
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

const App = () => {
  return (
    <SnackbarProvider maxSnack={3}>
      <ContactForm />
    </SnackbarProvider>
  );
};

export default App;
