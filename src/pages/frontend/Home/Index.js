import React, { useState } from 'react'
import { animateScroll as scroll } from 'react-scroll'

import Footer from 'components/footer/Footer'
import Navbar from 'components/header/Navbar'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Services from './Services'
import Portfolio from './Portfolio'
import Project from './Project'

import KeyboardArrowUpTwoToneIcon from '@mui/icons-material/KeyboardArrowUpTwoTone';
import Contact from './Contact'

export default function Home() {
    const [display, setDisplay] = useState(false)


    const changeColor = () => {
        if (window.scrollY >= 220) {
            setDisplay(true)
        } else {
            setDisplay(false)
        }
    }
    window.addEventListener('scroll', changeColor)
    return (
        <>
            <Navbar />
            <main >
                <Hero />
                <About />
                <Skills />
                <Services />
                <Project />
                <Portfolio />
                <Contact />
                {display
                    ? <button className='btn btn-info rounded-circle text-white p-2 top-button' onClick={() => scroll.scrollToTop()}><KeyboardArrowUpTwoToneIcon /></button>
                    : ""
                }
            </main>
            <Footer />
        </>
    )
}
