// import React from "react";

export const FacilityManagement = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center bg-[url('/facility-bg.jpg')] bg-cover bg-center h-[60vh] text-white">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative text-4xl font-bold md:text-5xl">Expert Facility Management</h1>
        <p className="relative mt-2 text-lg text-gray-300">Comprehensive solutions for smooth operations</p>
      </section>

      {/* Service Details */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <h2 className="text-3xl font-semibold text-center text-blue-600">Why Choose Our Facility Management?</h2>
        <p className="mt-4 text-center text-gray-700 max-w-3xl mx-auto">
          We provide end-to-end facility management services to ensure the efficient functioning of your property. 
          From maintenance to security, we handle it all.
        </p>
      </section>

      {/* Key Features */}
      <section className="py-16 px-6 md:px-16 bg-gray-200">
        <h2 className="text-3xl font-semibold text-center text-gray-900">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-blue-600">Building Maintenance</h3>
            <p className="mt-2 text-gray-700">Regular inspections and repairs for smooth facility operations.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-blue-600">Energy Management</h3>
            <p className="mt-2 text-gray-700">Sustainable solutions to optimize energy consumption.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-blue-600">Safety & Compliance</h3>
            <p className="mt-2 text-gray-700">Ensuring your facility meets safety and regulatory standards.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 md:px-16 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-semibold">Optimize Your Facility Today</h2>
        <p className="mt-2 text-lg">Contact us to improve your facility’s efficiency.</p>
        <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default FacilityManagement;
