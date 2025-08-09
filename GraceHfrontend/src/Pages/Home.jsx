import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="bg-gray-100">
            {/* Hero Section */}
            <section className="bg-blue-600 text-white py-20 px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Grace Hospital, Purnia</h1>
                <p className="text-lg max-w-2xl mx-auto">
                    Committed to compassionate and quality healthcare for everyone.
                </p>
                {/* <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded shadow hover:bg-gray-100 transition">
                    Book Appointment
                </button> */}
            </section>

            {/* About Section */}
            <section className="py-16 px-6 max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">About Us</h2>
                <p className="text-gray-700 text-lg">
                    Grace Hospital is a multi-specialty medical center offering advanced healthcare services with experienced doctors,
                    state-of-the-art equipment, and compassionate care. Located in the heart of Purnia, we are dedicated to making a
                    difference in people’s lives.
                </p>
            </section>

            {/* Treatments Preview */}
            <section className="py-16 bg-gray-100 px-6 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10">Our Treatments</h2>
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {['Cardiology', 'Neurology', 'Orthopedics'].map((treatment, idx) => (
                        <div key={idx} className="bg-white rounded-lg p-6 shadow text-center">
                            <img
                                src={`https://via.placeholder.com/300x200?text=${treatment}`}
                                alt={treatment}
                                className="w-full h-40 object-cover rounded mb-4"
                            />
                            <h3 className="text-xl font-semibold">{treatment}</h3>
                            <p className="text-gray-600 text-sm mt-2">Learn more about our specialized treatment in {treatment.toLowerCase()}.</p>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <Link to="/treatments" className="text-blue-600 hover:underline font-medium">
                        View All Treatments →
                    </Link>
                </div>
            </section>

            {/* Doctors Preview */}
            <section className="py-16 px-6 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10">Meet Our Doctors</h2>
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        { name: 'Dr. Ayesha Kapoor', specialization: 'Cardiologist' },
                        { name: 'Dr. Rohit Verma', specialization: 'Orthopedic Surgeon' },
                        { name: 'Dr. Meera Sharma', specialization: 'Neurologist' }
                    ].map((doc, idx) => (
                        <div key={idx} className="bg-white rounded-lg p-6 shadow text-center">
                            <img
                                src={`https://via.placeholder.com/300x300?text=${doc.name.replace(/ /g, '+')}`}
                                alt={doc.name}
                                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-lg font-semibold">{doc.name}</h3>
                            <p className="text-blue-600 text-sm">{doc.specialization}</p>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <Link to="/doctors" className="text-blue-600 hover:underline font-medium">
                        View All Doctors →
                    </Link>
                </div>
            </section>

            {/* Footer / Contact CTA */}
            <footer className="bg-blue-600 text-white py-10 text-center">
                <h3 className="text-xl font-semibold mb-2">Need Help?</h3>
                <p>Contact us at +91 98765 43210 or email: contact@gracehospital.in</p>
                <p className="mt-2 text-sm">&copy; {new Date().getFullYear()} Grace Hospital, Purnia. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
