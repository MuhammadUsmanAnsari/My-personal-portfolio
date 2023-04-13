import React from 'react'
import './_footer.scss'
import { Link as Linked, animateScroll as scroll } from 'react-scroll'
import KeyboardArrowRightTwoToneIcon from '@mui/icons-material/KeyboardArrowRightTwoTone';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <div className="bg-dark border-top border-secondary">
            <div className="container py-4 px-4 px-sm-0 text-light">
                <div className="row ">
                    <div className='footer-logo text-info'>Usman</div>
                </div>
                <div className="row ">
                    <div className="col-12 col-md-4 ">
                        <p className='py-5'>When I am working on a problem I never think about beauty but when I have finished, if the solution is not beautiful, I know it is wrong</p>
                    </div><hr className='d-block d-md-none border border-1' />
                    <div className="col-12 col-sm-4 col-md-2">
                        <h3 className='text-info'>Links</h3>
                        <div className="mt-3 nav-links">
                            <Linked className='btn btn-link text-white text-decoration-none p-0 mt-2' to='hero-section' ><KeyboardArrowRightTwoToneIcon className='arrows'/>Home </Linked><br />
                            <Linked className='btn btn-link text-white text-decoration-none p-0 mt-2' to="about-section" ><KeyboardArrowRightTwoToneIcon className='arrows'/>About </Linked><br />
                            <Linked className='btn btn-link text-white text-decoration-none p-0 mt-2' to='skills-section' ><KeyboardArrowRightTwoToneIcon className='arrows'/>Skills</Linked><br />
                            <Linked className='btn btn-link text-white text-decoration-none p-0 mt-2' to='portfolio-section' ><KeyboardArrowRightTwoToneIcon className='arrows'/>Portfolio</Linked><br />
                            <Linked className='btn btn-link text-white text-decoration-none p-0 mt-2' to='services-section' ><KeyboardArrowRightTwoToneIcon className='arrows'/>Services</Linked><br />
                            <Linked className='btn btn-link text-white text-decoration-none p-0 mt-2' to='contact-section' ><KeyboardArrowRightTwoToneIcon className='arrows'/>Contact</Linked>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4 col-md-3 mt-5 mt-sm-0">
                        <h3 className='text-info'>Services</h3>
                        <div className="mt-3 nav-links">
                            <Linked className='btn btn-link text-white text-decoration-none p-0 mt-2' to='hero-section' ><KeyboardArrowRightTwoToneIcon className='arrows'/>Web Development </Linked><br />
                            <Linked className='btn btn-link text-white text-decoration-none p-0 mt-2' to='hero-section' ><KeyboardArrowRightTwoToneIcon className='arrows'/>Web Design</Linked><br />
                            <Linked className='btn btn-link text-white text-decoration-none p-0 mt-2' to='hero-section' ><KeyboardArrowRightTwoToneIcon className='arrows'/>Business Strategy</Linked><br />
                        </div>
                    </div>
                    <div className="col-12 col-sm-4 col-md-3 mt-5 mt-sm-0">
                        <h3 className='text-info'>Adresss</h3>
                        <div className="row py-3">
                            <div className="col-1 col-sm-2"><FmdGoodOutlinedIcon /></div>
                            <div className="col"><p> 2107-D Dildar chowk Ghulamabad, Faisalabad</p> </div>
                        </div>
                        <div className="row ">
                            <div className="col-1 col-sm-2"><CallOutlinedIcon /></div>
                            <div className="col"><a href='tel:+923007588836' className='btn-link text-white text-decoration-none'> +92 300 7588836</a> </div>
                        </div>
                        <div className="row pt-3">
                            <div className="col-1 col-sm-2 "><EmailOutlinedIcon /></div>
                            <div className="col"><a href="mailto:usmanarif2913@gmail.com" className="btn-link text-white text-decoration-none "> usmanarif2913 @gmail.com</a></div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row ">
                    <div className="col text-center ">
                        <p>Copyright &copy; {year}. All rights reserved. &#10084;</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
