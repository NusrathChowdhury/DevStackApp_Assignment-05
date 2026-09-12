import React from 'react';
import BannerImage from '../assets/Stylized Multi-layered 3D Tech Stack Illustration.png'

const Banner = () => {
    return (
        <div className='max-w-6xl mx-auto px-6 py-16'>

            <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-12'>

                {/* Left Column */}
                <div className='text-left'>

                    <h2 className='text-4xl md:text-5xl font-bold leading-tight mb-5'>
                        Build Your Ideal <br />
                        <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
                            Development Stack
                        </span>
                    </h2>

                    <p className='text-gray-600 text-lg leading-7 mb-8 max-w-xl'>
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits your
                        next project.
                    </p>

                    <div className='flex flex-wrap gap-4'>

                        <button className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] text-white px-6 py-3 rounded-lg font-medium shadow-md hover:scale-105 transition duration-300">
                            Explore Technologies
                        </button>

                        <button className="bg-white text-black px-6 py-3 rounded-lg border border-gray-300 font-medium hover:bg-gray-100 hover:scale-105 transition duration-300">
                            Learn More
                        </button>
                        

                    </div>

                </div>

                {/* Right Column */}
                <div className='flex justify-center'>
                    <img
                        src={BannerImage}
                        alt="Development Stack"
                        className='w-full max-w-[550px]'
                    />
                </div>

            </div>

        </div>
    );
};

export default Banner;