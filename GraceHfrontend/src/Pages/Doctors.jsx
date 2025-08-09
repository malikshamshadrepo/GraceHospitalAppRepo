import React from 'react';

const doctors = [
    {
        name: 'Dr. Shamsheer Alam',
        specialization: 'ENT Surgeon',
        education: 'MBBS, MS (ENT)',
        experience: '12 years',
        description: 'Expert in angioplasty and heart failure management.',
        image: 'https://via.placeholder.com/400x400?text=Dr.+Ayesha'
    },
    {
        name: 'Dr. Rohit Verma',
        specialization: 'Orthopedic Surgeon',
        education: 'MBBS, MS (Orthopedics)',
        experience: '10 years',
        description: 'Specializes in joint replacement and trauma surgery.',
        image: 'https://via.placeholder.com/400x400?text=Dr.+Rohit'
    },
    {
        name: 'Dr. Meera Sharma',
        specialization: 'Neurologist',
        education: 'MBBS, DM (Neurology)',
        experience: '8 years',
        description: 'Experienced in treating stroke, epilepsy, and headaches.',
        image: 'https://via.placeholder.com/400x400?text=Dr.+Meera'
    }
];

const Doctor = () => {
    return (
        <div className="min-h-screen bg-gray-100 px-6 py-12">
            <h2 className="text-3xl font-bold text-center mb-10">Our Doctors</h2>
            <div className="flex flex-col gap-10 max-w-4xl mx-auto">
                {doctors.map((doc, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition flex flex-col md:flex-row"
                    >
                        <img
                            src={doc.image}
                            alt={doc.name}
                            className="w-full md:w-1/3 h-72 object-cover"
                        />
                        <div className="p-6 md:w-2/3">
                            <h3 className="text-2xl font-semibold">{doc.name}</h3>
                            <p className="text-blue-600 font-medium text-lg">{doc.specialization}</p>
                            <p className="text-base text-gray-700 mt-2"><strong>Education:</strong> {doc.education}</p>
                            <p className="text-base text-gray-700"><strong>Experience:</strong> {doc.experience}</p>
                            <p className="text-gray-600 mt-4 text-base">{doc.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Doctor;
