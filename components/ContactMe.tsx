import React, { useState } from "react";
import { motion } from "framer-motion";
interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const defaultData: ContactForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function ContactMe() {
  const [formData, setFormData] = useState<ContactForm>(defaultData);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add a better way of sending emails to me
    window.location.href = `mailto:pbara7a@gmail.com?subject=${formData.subject}&body=Name: ${formData.name}. Message: ${formData.message}. From: ${formData.email}`;
    setFormData(defaultData);
  };

  const handleChange = (e: React.FormEvent) => {
    const { name, value } = e.target as HTMLTextAreaElement | HTMLInputElement;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly px-10 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          Want to colaborate?{" "}
          <span className="decoration-[#e09000] underline">Get in touch!</span>
        </h4>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              onChange={handleChange}
              placeholder="Name"
              name="name"
              value={formData.name}
              className="contact-input"
              type="text"
              required
            />
            <input
              onChange={handleChange}
              placeholder="Email"
              name="email"
              value={formData.email}
              className="contact-input"
              type="email"
              required
            />
          </div>

          <input
            onChange={handleChange}
            placeholder="Subject"
            name="subject"
            value={formData.subject}
            className="contact-input"
            type="text"
            required
          />

          <textarea
            onChange={handleChange}
            placeholder="Message"
            name="message"
            value={formData.message}
            className="contact-input"
            required
          />
          <button
            type="submit"
            className="bg-[#e09000] hover:bg-[#eba523] py-5 px-10 rounded-md text-black font-bold text-lg transition-all ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default ContactMe;
