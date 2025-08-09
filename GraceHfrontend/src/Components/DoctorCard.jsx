import React from 'react'

function DoctorCard({ image, name, speciality, education, experience, desc }) {
    return (
        <>
            <div className="rounded-xl w-[670px] flex gap-8 mt-6 p-6 text-center bg-white mx-auto shadow">

                <img src={image} className='w-30 h-30 rounded-xl object-cover' alt='' />
                <div className="text-left">
                    <h1 className="font-black font-bold text-2xl">{name}</h1>
                    <div className="mt-2 text-sm">{speciality}</div>
                    <div className="text-sm">{education}</div>
                    <div className="mt-2 font-medium ">{experience}</div>
                    <div className="text-sm mt-3 justify-center text-neutral-600">{desc}</div>
                </div>

            </div>

        </>
    )
}

export default DoctorCard