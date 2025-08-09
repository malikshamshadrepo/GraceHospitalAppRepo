import React from 'react';

const treatments = [
    {
        title: 'ENT ',
        description: 'Consultation Ear Nose and Throat.',
        image: '/images/ent.jpg'
    },
    {
        title: 'Dental',
        description: 'Dental Consultaion.',
        image: '/images/dental.jpg'
    },
    {
        title: 'OPD',
        description: 'Head and Neck Cance Screening OPD.',
        image: '/images/cancer.jpg'
    },
    {
        title: 'Audiology/Hearing Aids/Speech Therapy',
        description: 'Audiology/Hearing Aids/Speech Therapy.',
        image: '/images/speech.jpg'
    },
    {
        title: 'Endoscopic Examination',
        description: 'Endoscopic Examination of Ear Nose and Throat .',
        image: '/images/Endo.jpg'
    },
    {
        title: 'Emergency',
        description: '24x7 ENT Emergencies and Maxillofacial Trauma.',
        image: '/images/trauma.jpg'
    }
];

const Treatment = () => {
    return (
        <div className="min-h-screen bg-gray-100 px-6 py-12">
            <h2 className="text-3xl font-bold text-center mb-10">Our Treatments</h2>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {treatments.map((treatment, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                        <img
                            src={treatment.image}
                            alt={treatment.title}
                            className="w-full h-40 object-cover rounded mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">{treatment.title}</h3>
                        <p className="text-gray-600">{treatment.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Treatment;
