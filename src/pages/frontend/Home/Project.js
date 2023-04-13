import React from 'react'
import {Link as Linked } from 'react-scroll'


export default function Project() {
    return (
        <div id="project-section">
            <div className="uppar-layer">
                <div className="container ">
                    <div className="row ">
                        <div className="col" >
                            <h1 className='fw-bold'>Have a Project?</h1>
                            <p className='my-4'>Clients satisfaction is my first priority and it will be always. I am available 24/7 you can contact me anytime </p>
                            <Linked className='btn btn-dark px-5 py-2 fs-5 rounded-0    button-styling ' to='contact-section' smooth={true}>Contact Me</Linked>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
