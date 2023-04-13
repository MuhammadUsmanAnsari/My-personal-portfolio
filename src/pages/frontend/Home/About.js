import React from 'react'
import picture from 'assets/usman.jpg'
import { Element } from 'react-scroll'

export default function About() {

    return (
        <Element name="about-section" id='about-section'>
            <div className="container rounded my-5  ">
                <div className="row py-5">
                    {/* animation */}
                    <div className='dots'></div>
                    <div className='dots'></div>
                    <div className="col-12 col-lg-5 d-flex align-items-center justify-content-center">
                        <img src={picture} className="my-image rounded-4 w-50" alt="" />
                    </div>
                    <div className="col-12 col-lg-7 mt-5 mt-lg-0 d-flex flex-column justify-content-center">
                        <h2 className='text-info fw-bold'>ABOUT ME</h2>
                        <div className='my-5 ' >I'm professional Web Developer & Web Designer based in Pakistan working on different projects. I can build awesome Designs with different programming languages. </div>
                        <div className="row">
                            <div className="col-4 col-sm-2 text-info"><b>Name:</b></div>
                            <div className="col"> Muhammad Usman</div>
                        </div>
                        <div className="row">
                            <div className="col-4 col-sm-2 text-info"><b>Data of Birth:</b></div>
                            <div className="col"> Sept 13,2002</div>
                        </div>
                        <div className="row">
                            <div className="col-4 col-sm-2 text-info"><b>Address:</b></div>
                            <div className="col"> 2107-D Ghulamabad Faisalabad Pakistan</div>
                        </div>
                        <div className="row">
                            <div className="col-4 col-sm-2 text-info"><b>Email:</b></div>
                            <div className="col"><a href="mailto:usmanarif2913@gmail.com" className='text-white text-decoration-none'>usmanarif2913 @gmail.com</a></div>
                        </div>
                        <div className="row">
                            <div className="col-4 col-sm-2 text-info"><b>Phone:</b></div>
                            <div className="col"> <a href='tel:+923007588836' className='text-white text-decoration-none'> +92 300 7588836</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}
