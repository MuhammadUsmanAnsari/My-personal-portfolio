import React, { useEffect } from 'react'
import { Progress } from 'antd'
import AOS from 'aos'


export default function Skills() {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])



    return (
        <div className="container py-5" id='skills-section'>
            <h2 className='text-info text-center fw-bold '>MY SKILLS</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 g-md-4 text-center my-5">
                <div className="col ">
                    <div className="card bg-dark py-5" data-aos="zoom-in-down" >
                        <h3 className='mb-4 text-dark'>HTML5</h3>
                        <Progress
                            type="circle"
                            percent={93}
                            strokeColor={{
                                '0%': '#108ee9',
                                '100%': '#87d068',
                            }}
                            trailColor="transparent"
                            size="default"
                            strokeWidth={8}
                        />
                    </div>

                </div>
                <div className="col ">
                    <div className="card bg-dark py-5" data-aos="zoom-in-up">
                        <h3 className='mb-4 text-dark'>CSS3</h3>
                        <Progress
                            type="circle"
                            percent={90}
                            strokeColor={{
                                '0%': '#108ee9',
                                '100%': '#87d068',
                            }}
                            trailColor="transparent"
                            size="default"
                            strokeWidth={8}

                        />
                    </div>

                </div>
                <div className="col ">
                    <div className="card bg-dark py-5" data-aos="zoom-in-up">
                        <h3 className='mb-4 text-dark'>Bootstrap</h3>
                        <Progress
                            type="circle"
                            percent={95}
                            strokeColor={{
                                '0%': '#108ee9',
                                '100%': '#87d068',
                            }}
                            trailColor="transparent"
                            size="default"
                            strokeWidth={8}

                        />
                    </div>

                </div>
                <div className="col ">
                    <div className="card bg-dark py-5" data-aos="zoom-in-down">
                        <h3 className='mb-4 text-dark'>Javascript</h3>
                        <Progress
                            type="circle"
                            percent={80}
                            strokeColor={{
                                '0%': '#108ee9',
                                '100%': '#87d068',
                            }}
                            trailColor="transparent"
                            size="default"
                            strokeWidth={8}

                        />
                    </div>

                </div>
                <div className="col ">
                    <div className="card bg-dark py-5" data-aos="zoom-in-up">
                        <h3 className='mb-4 text-dark'>React</h3>
                        <Progress
                            type="circle"
                            percent={75}
                            strokeColor={{
                                '0%': '#108ee9',
                                '100%': '#87d068',
                            }}
                            trailColor="transparent"
                            size="default"
                            strokeWidth={8}

                        />
                    </div>

                </div>
                <div className="col ">
                    <div className="card bg-dark py-5" data-aos="zoom-in-up">
                        <h3 className='mb-4 text-dark'>jQuery</h3>
                        <Progress
                            type="circle"
                            percent={70}
                            strokeColor={{
                                '0%': '#108ee9',
                                '100%': '#87d068',
                            }}
                            trailColor="transparent"
                            size="default"
                            strokeWidth={8}

                        />
                    </div>

                </div>
            </div>
        </div>
    )
}
