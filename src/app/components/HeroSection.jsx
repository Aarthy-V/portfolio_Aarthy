import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <section>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <div className='col-span-7 place-self-center text-canter sm:text-left'>
                    <h1 className='text-white mb-4 text-4xl lg:text-6xl sm:text-5xl font-extrabold'>
                        <div className=''>Hello, I'm </div>
                        Aarthy
                    </h1>
                    <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                        I am a Computer Engineering Undergraduate, practicing in Full stack development.
                    </p>
                    <div>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>Hire Me</button>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3'>Download CV</button>
                    </div>
                </div>
                <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                    <div className='rounded-full bg-[#181818] w-[250px] h-[259px] lg:w-[400px] lg:h-[400px] relative'>
                        <Image src="/images/Aarthy.jpeg"
                            alt=""
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection


