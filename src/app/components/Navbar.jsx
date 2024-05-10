import React from 'react'
import Link from 'next/link'
import NavLink from './NavLink'

const navLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    }

]
const Navbar = () => {
  return (
    <nav>
        <div className='flex flex-wrao items-center justify-between mx-auto p-8'>
            <Link href={'/'} className='text-5xl text-white font-semibold'>LOGO</Link>
            <div className='menu'>
                <ul>
                    {
                        navLinks.map((link, index)=>(
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;