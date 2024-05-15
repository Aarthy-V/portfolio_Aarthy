import React from 'react'
import github from '../../../public/images/github.png';
import linkedin from '../../../public/images/linkedin.png';
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
    return (
        <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
            <div>
                <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>
                    {" "}
                    I'm currently looking for new opportuinities, my inbox
                    is always open. Whether you have a question or just want to say
                    hi, I'll try my best to get back to you!
                </p>
                <div className='socials flex flex-row gap-2'>
                    <Link href="github.com">
                        <Image src={github} alt="Git" />
                    </Link>
                    <Link href="linkedin.com">
                        <Image src={linkedin} alt="Linked In" />
                    </Link>
                </div>
            </div>
            <div>
                <form className='flex flex-col'>
                    <div>
                        <label htmlfor="email" className='text-white block text-sm font-medium'>Your Email</label>
                        <input
                            type="email"
                            id="email"
                            required
                            className='bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            placeholder='jacob@gmail.com'
                        />
                    </div>
                    <div className='mb-6'>
                        <label htmlfor="subject" className='text-white block text-sm font-medium'>Subject</label>
                        <input
                            type="text"
                            id="subject"
                            required
                            className='bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            placeholder='Just say Hi...'
                        />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default EmailSection