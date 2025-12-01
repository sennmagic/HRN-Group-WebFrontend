"use client";

import React, { useState  } from "react";



const ContactForm = ({
  padding = 30,
  width = "full",
  formTitle,

}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    additionalInfo: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  const nameFields = [
    { name: "firstName", label: "First Name", placeholder: "Your First Name" },
    { name: "lastName", label: "Last Name", placeholder: "Your Last Name" },
  ];

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col items- px-4">
        <div
          className={`bg-white max-w-7xl w-full rounded-3xl shadow-md border border-gray-200  flex flex-col gap-7 ${
            width === "full" ? "w-full" : "w-full md:w-[800px]"
          }`}
          style={{ padding }}
        >
          {formTitle && (
            <h2 className="text-2xl font-semibold text-gray-800 text-center">
              {formTitle}
            </h2>
          )}

          {/* First Name & Last Name */}
          <div className="w-full flex flex-col md:flex-row gap-6">
            {nameFields.map(({ name, label, placeholder }) => (
              <div key={name} className="flex flex-col w-full">
                <label className="text-sm text-gray-700 font-medium mb-1">
                  {label}
                </label>
                <input
                  required
                  type="text"
                  placeholder={placeholder}
                  value={formData[name]}
                  onChange={(e) => handleChange(name, e.target.value)}
                  className="border border-blue-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder:text-primary"
                />
              </div>
            ))}
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-700 font-medium mb-1">
              Phone Number
            </label>
            <input
              required
              type="tel"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="border border-blue-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder:text-primary"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-700 font-medium mb-1">
              Email Address
            </label>
            <input
              required
              type="email"
              placeholder="Your Email Address"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="border  rounded-md border-blue-500 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder:text-primary"
            />
          </div>

          {/* Additional Info */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-700 font-medium mb-1">
              Additional Necessity
            </label>
            <textarea
              placeholder="e.g. We'd like to Contact for."
              value={formData.additionalInfo}
              onChange={(e) => handleChange("additionalInfo", e.target.value)}
              className="border border-blue-500 rounded-md px-4 py-2 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder:text-primary"
            />
          </div>
          {/* Submit Button */}
          <div className="flex justify-start">
            <button type="submit" className="inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors">
              Submit
            </button>
          </div>
        </div>

      
      </div>
    </form>
  );
};

export default ContactForm;