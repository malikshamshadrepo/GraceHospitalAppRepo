import React, { useState } from 'react';

const Contact = () => {

    return (
        <div className="max-w-4xl mx-auto p-6  shadow-lg bg-white rounded-lg mt-10">
            <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <div>
                    <h3 className="text-xl font-semibold mb-2">Hospital Address</h3>
                    <p>Grace Hospital Purnia</p>
                    <p>Near KundiPul, Medcity, Opposite Global Diagnostics</p>
                    <p>NH-31, Line Bazar, Purnia - 854301</p>
                    <p>Phone: +91 98765 43210</p>
                    <p>Email: contact@sunrisehospital.in</p>

                    <div className="mt-4">
                        <iframe
                            title="Hospital Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.041996927404!2d73.84709607488555!3d18.562028082541197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0706b24afc5%3A0xc40b0a7ef5ddc514!2sRuby%20Hall%20Clinic!5e0!3m2!1sen!2sin!4v1699358723941!5m2!1sen!2sin"
                            width="100%"
                            height="250"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
