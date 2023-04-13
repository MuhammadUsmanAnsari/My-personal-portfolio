import React from 'react'
import { Image } from 'antd'
//icons
import WebAssetTwoToneIcon from '@mui/icons-material/WebAssetTwoTone';

import furniture from 'assets/furniture.jpg'
import agriculture from 'assets/agriculture.jpg'
import onlineCourse from 'assets/online-course.jpg'
import eventPlanner from 'assets/event-planner.png'
import hackathon from 'assets/hackathon-project.png'




export default function Portfolio() {
  return (
    <div className='container' id='portfolio-section'>
      <h2 className='text-info text-center fw-bold my-5'>PORTFOLIO</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        <Image.PreviewGroup>
          <div className="col">
            <div className="card bg-dark">
              <div className="card-img rounded-0 rounded-top">
                <Image width="100%" className='inner-img' src={furniture} />
              </div>
              <div className="card-body">
                <h3 className="card-title fw-bold text-info">Furniture Website</h3>
                <p className="card-text d-flex justify-content-between">Web Design & Development <WebAssetTwoToneIcon className='fs-1'/></p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bg-dark">
              <div className="card-img rounded-0 rounded-top">
                <Image width="100%" className='inner-img' src={onlineCourse} />
              </div>
              <div className="card-body">
                <h3 className="card-title fw-bold text-info">Online Courses</h3>
                <p className="card-text d-flex justify-content-between">Web Design & Development <WebAssetTwoToneIcon className='fs-1'/></p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bg-dark">
              <div className="card-img rounded-0 rounded-top">
                <Image width="100%" className='inner-img' src={agriculture} />
              </div>
              <div className="card-body">
                <h3 className="card-title fw-bold text-info">Premium Crops</h3>
                <p className="card-text d-flex justify-content-between">Web Design & Development <WebAssetTwoToneIcon className='fs-1'/></p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bg-dark">
              <div className="card-img rounded-0 rounded-top">
                <Image width="100%" className='inner-img' src={hackathon} />
              </div>
              <div className="card-body">
                <h3 className="card-title fw-bold text-info">IT Solutions</h3>
                <p className="card-text d-flex justify-content-between">Web Design & Development <WebAssetTwoToneIcon className='fs-1'/></p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bg-dark">
              <div className="card-img rounded-0 rounded-top">
                <Image width="100%" className='inner-img' src={eventPlanner} />
              </div>
              <div className="card-body">
                <h3 className="card-title fw-bold text-info">Event Planner</h3>
                <p className="card-text d-flex justify-content-between">Web Design & Development <WebAssetTwoToneIcon className='fs-1'/></p>
              </div>
            </div>
          </div>
        </Image.PreviewGroup >
      </div >
    </div >
  )
}
