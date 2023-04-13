import React, { useEffect } from 'react'
import ViewInArTwoToneIcon from '@mui/icons-material/ViewInArTwoTone';
import DisplaySettingsTwoToneIcon from '@mui/icons-material/DisplaySettingsTwoTone';
import MobileFriendlyTwoToneIcon from '@mui/icons-material/MobileFriendlyTwoTone';
import CodeTwoToneIcon from '@mui/icons-material/CodeTwoTone';
import AppShortcutTwoToneIcon from '@mui/icons-material/AppShortcutTwoTone';
import ColorLensTwoToneIcon from '@mui/icons-material/ColorLensTwoTone';

export default function Services() {
    return (
        <div className="container my-5" id='services-section' data-aos="fade-down"  data-aos-easing="linear" data-aos-duration="800">
            <h2 className='text-info text-center fw-bold my-5'>SERVICES</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 gx-2 gx-sm-4 gy-5">
                <div className="col">
                    <div className="card border border-secondary bg-dark py-5 px-2">
                        <div className='bg-info p-3 services-icon'><ViewInArTwoToneIcon className='fs-2'/></div>
                        <h4>Web Design</h4>
                        <p className='text-secondary'>I've worked on 30+ web applications in last 3 years. I've worked on React, Angular, React Native, Firebase and many more.</p>
                    </div>
                </div>
                <div className="col">
                    <div className="card border border-secondary bg-dark py-5 px-2">
                        <div className='bg-info p-3 services-icon'><DisplaySettingsTwoToneIcon className='fs-2'/></div>
                        <h4>Web Application</h4>
                        <p className='text-secondary'>I've created many creative web applications with unique and different stylling</p>
                    </div>
                </div>
                <div className="col">
                    <div className="card border border-secondary bg-dark py-5 px-2">
                        <div className='bg-info p-3 services-icon'><MobileFriendlyTwoToneIcon className='fs-2'/></div>
                        <h4>Responsive Design</h4>
                        <p className='text-secondary'>A designer knows he has achieved perfection and one of the biggest achievment for a designer is responsive website</p>
                    </div>
                </div>
                <div className="col">
                    <div className="card border border-secondary bg-dark py-5 px-2">
                        <div className='bg-info p-3 services-icon'><CodeTwoToneIcon className='fs-2'/></div>
                        <h4>Web Development</h4>
                        <p className='text-secondary'>My commitment is to provide very contemporary solutions to website development. So if you need a perfect team, give me a call</p>
                    </div>
                </div>
                <div className="col">
                    <div className="card border border-secondary bg-dark py-5 px-2">
                        <div className='bg-info p-3 services-icon'><AppShortcutTwoToneIcon className='fs-2'/></div>
                        <h4>Mobile Apps</h4>
                        <p className='text-secondary'>Mobile is the next big thing to grow your business. I provide quality IOS and android mobile app development services</p>
                    </div>
                </div>
                <div className="col">
                    <div className="card border border-secondary bg-dark py-5 px-2">
                        <div className='bg-info p-3 services-icon'><ColorLensTwoToneIcon className='fs-2'/></div>
                        <h4>UI/UX DESIGN</h4>
                        <p className='text-secondary'>I'm proficient in interface design of web and mobile applications (Android and iOS)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
