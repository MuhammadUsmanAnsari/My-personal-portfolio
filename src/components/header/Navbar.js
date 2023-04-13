import React, { useState } from 'react'
import { Link as Linked, animateScroll as scroll } from 'react-scroll'
import './_navbar.scss'


export default function Navbar() {
    const [color, setColor] = useState(false)


    const changeColor = () => {
        if (window.scrollY >= 220) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-dark  ${color ? "bg-dark position-fixed  py-3" : "bg-transparent"}`}  >
                <div className="container">
                    <Linked className={`navbar-brand ${color ? "text-info" : ""}`} to='hero-section'>Usman</Linked>
                    <a className="btn navbar-toggler border-secondary  " type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation" href="#offcanvasExample">
                        <span className="navbar-toggler-icon"></span>
                    </a>
                    <div className="collapse navbar-collapse offcanvas offcanvas-top " id="navbarSupportedContent">
                        <div className="offcanvas-header w-100 d-flex d-lg-none">
                            <Linked className={`navbar-brand ${color ? "text-info" : ""}`} to='hero-section' data-bs-toggle="offcanvas">Usman</Linked>
                            <button type="button" className="bg-white btn-close ms-auto" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                        </div>
                        <ul className="navbar-nav w-100 d-flex justify-content-end">
                            <li className="nav-item text-center ms-4 mb-2 mb-lg-0 ">
                                <Linked className={`nav-link ${color ? "text-info" : ""}`} spy={true} smooth={true} duration={800} activeclassname='active' aria-current="page" to='hero-section' data-bs-toggle="offcanvas">HOME</Linked>
                            </li>
                            <li className="nav-item text-center ms-4 mb-2 mb-lg-0">
                                <Linked className={`nav-link ${color ? "text-info" : ""}`} spy={true} smooth={true} duration={800} activeclassname='active' to="about-section" data-bs-toggle="offcanvas">ABOUT</Linked>
                            </li>
                            <li className="nav-item text-center ms-4 mb-2 mb-lg-0">
                                <Linked className={`nav-link ${color ? "text-info" : ""}`}spy={true} smooth={true} duration={800} activeclassname='active' to="skills-section" data-bs-toggle="offcanvas">SKILLS</Linked>
                            </li>
                            <li className="nav-item text-center ms-4 mb-2 mb-lg-0">
                                <Linked className={`nav-link ${color ? "text-info" : ""}`}spy={true}smooth={true} duration={800} activeclassname='active' to="services-section" data-bs-toggle="offcanvas">SERVICES</Linked>
                            </li>
                            <li className="nav-item text-center ms-4 mb-2 mb-lg-0">
                                <Linked className={`nav-link ${color ? "text-info" : ""}`} spy={true} smooth={true} duration={800} activeclassname='active' to="portfolio-section" data-bs-toggle="offcanvas">PORTFOLIO</Linked>
                            </li>
                            <li className="nav-item text-center ms-4 mb-2 mb-lg-0">
                                <Linked className={`nav-link ${color ? "text-info" : ""}`} spy={true}smooth={true} duration={800} activeclassname='active' to="contact-section" data-bs-toggle="offcanvas">CONTACT</Linked>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>



        </>
    )
}
