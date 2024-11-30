import React from "react";

const contactData = [
  {
    icon: "https://cdn.iconscout.com/icon/premium/png-512-thumb/address-154-425646.png?f=webp&w=256",
    title: "Address",
    details: "Place: Mangaon, Dist.: Raigad, State: Maharashtra, India, Pin: 402112",
  },
  {
    icon: "https://cdn.iconscout.com/icon/free/png-512/free-phone-2015-1100768.png?f=webp&w=256",
    title: "Phone",
    details: "+91 7768882495",
  },
  {
    icon: "https://cdn.iconscout.com/icon/premium/png-512-thumb/address-54-103144.png?f=webp&w=256",
    title: "Email",
    details: "dalvishrikant5456@gmail.com",
  },
];

const Contact = () => {
  return (
    <div
      id="contact"
      className="lg:w-10/12 md:w-11/12 w-full flex-col m-auto my-10 lg:p-8 md:p-8  shadow-lg rounded-lg"
    >
      {/* Header */}
      <h2 className=" text-3xl  font-bold text-white relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4 lg:ml-1 mb-6 ">Contact Now</h2>
      <hr className="mb-8" />

      {/* Map Section */}
      <div className="w-full h-[300px] mb-8">
        <iframe
          className="w-full h-full  border border-gray-300 shadow-md"
          frameBorder="0"
          src="https://www.google.com/maps/embed/v1/place?q=Mangaon&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          title="Google Map"
        ></iframe>
      </div>

      {/* Contact Info */}
      <div className="w-full lg:flex p-4 text-sm">
        {/* Left Section: Contact Details */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          {contactData.map((data, index) => (
            <div key={index} className="flex items-start mb-6">
              <img
                className="w-12 h-12 mr-4 bg-white rounded-full shadow-md"
                src={data.icon}
                alt={data.title}
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-700">{data.title}:</h3>
                <p className="text-gray-600">{data.details}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section: Contact Form */}
        <div className="lg:w-1/2 p-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Send a Message</h3>
          <hr className="mb-6" />
          <form
            action="https://formspree.io/f/mjkbygqk"
            method="POST"
            className="space-y-4"
          >
            <input
              className="w-full p-3 border border-gray-300  shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Name"
              type="text"
              name="Name"
              required
            />
            <input
              className="w-full p-3 border border-gray-300  shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
              type="email"
              name="email"
              required
            />
            <textarea
              className="w-full p-3 border border-gray-300  shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              placeholder="Message"
              name="message"
              required
            ></textarea>
            <button
              type="submit"
              className="px-6 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold shadow-md hover:shadow-sm transition-all"
            >
              Hire Me
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
