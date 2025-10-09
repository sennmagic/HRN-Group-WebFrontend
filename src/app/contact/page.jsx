
import React from 'react'
import { FaFacebook, FaInstagram,  FaLinkedin, FaEnvelope, FaPhone,  FaLocationArrow } from 'react-icons/fa';
import Breadcrumb from '@/components/atoms/breadcrumb';
import ContactForm from '@/components/forms/contactform';
import Header from '@/components/atoms/header';
//changes

const ContactPage = () => {
  const breadcrumbItems = [
    { label: 'contact', href: '/about/about-hrn' }
  ];
  return (
    <>
  
      <main className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">

          {/* Contact Content Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-24">
            {/* Left Column - Contact Information */}
            <div className="space-y-8">
    <Header text="Contact Us" />
              
              <p className="text-stone-800 text-lg leading-relaxed">
                Whether you’re looking to launch a new website, streamline your operations, or need guidance on your digital transformation journey — we’re here to help. Fill out the form, and one of our tech specialists will be in touch shortly.
              </p>

              <div className="w-full md:w-80 h-auto flex-col justify-start items-start gap-9 flex">
                {/* WhatsApp Contact */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 relative overflow-hidden">
                  <FaPhone className="text-2xl text-blue-500 hover:opacity-75 transition-opacity mr-4" />
                  </div>
                  <div className="flex flex-col justify-center items-start gap-2">
                    <div className="text-stone-800 text-xs font-normal leading-none tracking-tight">
                      Instant Support & Project Queries
                    </div>
                    <div className="text-stone-800 text-sm font-semibold leading-tight">
                    014534455
                    </div>
                  </div>
                </div>

                {/* Email Contact */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 relative overflow-hidden">
                  <FaEnvelope className="text-2xl text-blue-500 hover:opacity-75 transition-opacity mr-4" />
                  </div>
                  <div className="flex flex-col justify-center items-start gap-2">
                    <div className="text-stone-800 text-xs font-normal leading-none tracking-tight">
                      General Enquiries & Collaborations
                    </div>
                    <div className="text-stone-800 text-sm font-semibold leading-tight">
                    info@hrnnepal.com
                    </div>
                  </div>
                </div>

                {/* Address - India */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 relative overflow-hidden">
                  <FaLocationArrow className="text-2xl text-blue-500 hover:opacity-75 transition-opacity mr-4" />
                  </div>
                  <div className="flex flex-col justify-center items-start gap-2">
                  
                    <div className="text-stone-800 text-sm font-semibold leading-tight">
                  
                      <div className="text-stone-800 text-xs font-normal leading-none tracking-tight">
                        Office Center - Nepal
                      </div>
                      
                      Hadigaun Marga, Kathmandu
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-6">
                <a href="https://www.facebook.com/profile.php?id=61558444111385" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="text-2xl text-blue-600 hover:opacity-75 transition-opacity" />
                </a>
                <a href="https://www.instagram.com/lishnutech/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-2xl text-pink-500 hover:opacity-75 transition-opacity" />
                </a>
              
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <ContactForm formTitle={''} secondaryButton={"Send Enquiry"} />
            </div>
          </div>

          {/* Map Section */}
          <div className="mb-24">
           
            <iframe
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d883.150557585195!2d85.33732169799029!3d27.698686339640496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1900656fc9b7%3A0x6fef2b58d1565a8a!2sLishnu%20Tech%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1745285075803!5m2!1sen!2snp" 
             width="100%" height="450" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
             ></iframe>
          </div>
        </div>
      </main>
    </>
  )
}

export default ContactPage