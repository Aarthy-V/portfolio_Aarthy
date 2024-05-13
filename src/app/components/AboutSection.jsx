import React from 'react'
import Image from 'next/image'

const AboutSection = () => {
  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src="/images/about.png" width={500} height={500} />
            <div>
                <h2 className='text-4xl font-bold text-white mb-4'>Abou Me</h2>
                <p className='text-base lg:text-lg'>
                    I am a Full stack web developer with a passion
                    for creating interactive and responsive web application.
                    I have experience working with JavaScript, React, Node.js.
                    I am a quick learner and I am always looking to expand my knowledge 
                    and skill set. I am excited to work with others to create amazing
                    applications.
                </p>
                <div className='flex flex-row mt-8'>
                    <span>Skills</span>
                    <span>Education</span>
                    <span>Experience</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection