
import React from 'react'
import { BiSolidPhoneCall } from 'react-icons/bi'
import { GoDotFill } from 'react-icons/go'
import { IoCheckmarkDoneSharp } from 'react-icons/io5'
import { SiPolestar } from 'react-icons/si'
import { Link } from 'react-router-dom'

function Whychooseus() {
    return (
        <>
            <div className="py-5">
                <div className="container overflow-hidden py-3">
                    <div className="row g-5 justify-content-center">
                        <div className="col-12 col-lg-4" data-aos="fade-right" data-aos-duration="1500" data-aos-once="true">
                            <div className="h-100 shadow">
                                <img src="https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/home4_img-10.jpg" alt="" className='img-fluid w-100 h-100 object-fit-cover' />
                            </div>
                        </div>
                        <div className="col-12 col-lg-4" data-aos="zoom-in"
                                    data-aos-duration="1500" data-aos-once="true">
                            <div className="h-100 text-center d-flex flex-column justify-content-between">
                                <div className="about-section justify-content-start justify-content-lg-center pt-4" data-aos="fade-up"
                                    data-aos-duration="1500" data-aos-once="true">
                                    <div className="line  "  style={{color:"rgb(90, 113, 124)",borderBlockColor:"rgb(90, 113, 124)"}}></div>
                                    <span  style={{color:"rgb(90, 113, 124)"}}>WHY CHOOSE US</span>
                                </div>
                                <h1 className="Discover text-dark pt-2 text-start text-lg-center" data-aos="fade-down"
                                    data-aos-duration="1800" data-aos-once="true">We Can Build Your Dreams</h1>
                                <div className="text-start text-lg-center " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorem voluptate quos laboriosam consectetur reprehenderit magni alias recusandae dignissimos atque!</div>
                                <div className="d-block d-md-flex justify-content-center py-2">
                                    <div>
                                    <div className='d-flex  align-content-center align-items-center ' >
                                            <div className='theme fs-4 fw-bold '><SiPolestar  /></div>
                                            <div className='pera ps-1 fw-bold text-nowrap'> Architecture & interior</div>
                                        </div>
                                        <div className='d-flex  align-content-center align-items-center' >
                                            <div className='theme fs-4 fw-bold '><SiPolestar  /></div>
                                            <div className='pera ps-1 fw-bold text-nowrap'> Project planing</div>
                                        </div>
                                        <div className='d-flex  align-content-center align-items-center' >
                                            <div className='theme fs-4 fw-bold '><SiPolestar  /></div>
                                            <div className='pera ps-1 fw-bold text-nowrap'> Product design</div>
                                        </div>
                                        <div className='d-flex  align-content-center align-items-center' >
                                            <div className='theme fs-4 fw-bold '><SiPolestar  /></div>
                                            <div className='pera ps-1 fw-bold text-nowrap'> Custom solution</div>
                                        </div>
                                      
                                    </div>
                                    <div className=' ps-0 ps-md-4'>
                                        <div className='d-flex  align-content-center align-items-center' >
                                            <div className='theme fs-4 fw-bold '><SiPolestar  /></div>
                                            <div className='pera ps-1 fw-bold text-nowrap'> Design development</div>
                                        </div>
                                        <div className='d-flex  align-content-center align-items-center' >
                                            <div className='theme fs-4 fw-bold '><SiPolestar  /></div>
                                            <div className='pera ps-1 fw-bold text-nowrap'> Building concept</div>
                                        </div>
                                        <div className='d-flex  align-content-center align-items-center' >
                                            <div className='theme fs-4 fw-bold '><SiPolestar  /></div>
                                            <div className='pera ps-1 fw-bold text-nowrap'> Feasibility</div>
                                        </div>
                                     
                                        <div className='d-flex  align-content-center align-items-center' >
                                            <div className='theme fs-4 fw-bold '><SiPolestar  /></div>
                                            <div className='pera ps-1 fw-bold text-nowrap'> Renovating</div>
                                        </div>
                                    </div>
                                </div>
                        <Link to={"tel:9824331155"} className="text-decoration-none text-start text-lg-center"> <div className='whyno'  ><BiSolidPhoneCall /> 98243 31155</div></Link>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4" data-aos="fade-left" data-aos-duration="1500" data-aos-once="true">
                            <div className="h-100 shadow">
                                <img src="https://img.freepik.com/free-photo/modern-styled-small-entryway_23-2150712887.jpg?ga=GA1.1.294526294.1713588320&semt=ais_hybrid" alt="" className='img-fluid w-100 h-100 object-fit-cover' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Whychooseus