import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";
import { BiPhoneCall } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import "../../Assets/Css/ContactusPage.css";
import HOC from "../../HOC/HOC";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import videolinkConatct from "../../Assets/Video/8449347-uhd_2560_1440_25fps.mp4";
import MainSection from "../../HOC/MainSection";

function ContactUs() {
  return (
    <>
      <MainSection text="Contact Us" classs='contactbgimg' />
      <div>
        <div className="container">
          <div className="mx-auto py-5">
            <div className="contact_bg">
              <div className="row mx-auto overflow-hidden">
                <div className="col-12 col-lg-6">
                  <h1
                    className="display-3 fw-bold pt-5"
                    data-aos="fade-up"
                    data-aos-duration="1500" data-aos-once="true"
                  >
                    Let's Talk
                  </h1>
                  <p data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true">
                    We welcome opportunities for collaboration. Please submit
                    invitations, business proposals, or general inquiries.
                  </p>
                  <h5
                    className="fw-bold pt-2 pt-lg-5"
                    data-aos="zoom-in"
                    data-aos-duration="1500" data-aos-once="true"

                  >
                    Call Us
                  </h5>
                  <div
                    className="fw-bold fs-3"
                    data-aos="zoom-in"
                    data-aos-duration="1500" data-aos-once="true"
                  >
                    <Link to={"tel:9824331155"} className="text-decoration-none text-dark">
                      +91 98243 31155

                    </Link>
                  </div>
                  <div
                    className="d-flex py-4"
                    data-aos="zoom-in"
                    data-aos-duration="1500" data-aos-once="true"
                  >
                    <div className="icon-wrapper">
                      <FaFacebookF className="fs-4 icon facebook" />
                    </div>
                    <div className="mx-2 icon-wrapper">
                      <BsInstagram className="fs-4 icon instagram" />
                    </div>
                    <div className="mx-2 icon-wrapper">
                      <FaLinkedinIn className="fs-4 icon linkedin" />
                    </div>
                    <div className="mx-2 icon-wrapper">
                      <FaTwitter className="fs-4 icon twitter" />
                    </div>
                  </div>
                </div>
                <div
                  className="col-12 col-lg-6 border border-2 border-dark rounded-4 p-3"
                  data-aos="fade-up"
                  data-aos-duration="1500" data-aos-once="true"
                >
                  <div className="d-lg-flex justify-content-between gap-3 my-lg-3">
                    <input
                      type="text"
                      name="firstname"
                      id=""
                      placeholder="First Name"
                      className="w-100 w-md-50 w-lg-50  px-4 py-2 rounded-3"
                    />
                    <input
                      type="text"
                      name="lastname"
                      id=""
                      placeholder="Last Name"
                      className="w-100 w-md-50 w-lg-50 px-4 py-2 rounded-3 my-3 my-lg-0"
                    />
                  </div>
                  <div className="d-lg-flex justify-content-between gap-3 my-lg-3">
                    <input
                      type="text"
                      name="companyemail"
                      id=""
                      placeholder="Company E-mail"
                      className="w-100 w-md-50 w-lg-50 px-4 py-2 rounded-3"
                    />
                    <input
                      type="text"
                      name="companyname"
                      id=""
                      placeholder="Comapny Name"
                      className="w-100 w-md-50 w-lg-50 px-4 py-2 rounded-3 my-3 my-lg-0"
                    />
                  </div>
                  <div className="d-lg-flex justify-content-between gap-3 my-lg-3">
                    <select
                      name="industry"
                      className="w-100 w-md-50 w-lg-50 px-4 py-2 rounded-3"
                      id=""
                    >
                      <option value="Industry">Industry</option>
                      <option value="Consumer Goods">Consumer Goods</option>
                      <option value="Education">Education</option>
                      <option value="Energy">Energy</option>
                      <option value="Entertainment">Entertainment</option>
                      <option value="Finance">Finance</option>
                      <option value="Government">Government</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Media">Media</option>
                      <option value="Non-Profit">Non-Profit</option>
                      <option value="Professional Services">
                        Professional Services
                      </option>
                      <option value="Real Estate/Developers">
                        Real Estate/Developers
                      </option>
                      <option value="Retail">Retail</option>
                      <option value="Technology">Technology</option>
                      <option value="Transportation">Transportation</option>
                    </select>
                    <select
                      name="companysize"
                      className="w-100 w-md-50 w-lg-50 px-4 py-2 rounded-3 my-3 my-lg-0"
                      id=""
                    >
                      <option value="Company Size">Company Size</option>
                      <option value="1-50 Employees">1-50 Employees</option>
                      <option value="51-200 employees">51-200 employees</option>
                      <option value="201-1,000 employees">
                        201-1,000 employees
                      </option>
                      <option value="1,001-5,000 employees">
                        1,001-5,000 employees
                      </option>
                      <option value="5,001+ employees">5,001+ employees</option>
                    </select>
                  </div>
                  <div className="d-lg-flex justify-content-between gap-3 my-lg-3">
                    <select
                      name="role"
                      className="w-100 w-md-50 w-lg-50 px-4 py-2 rounded-3"
                      id=""
                    >
                      <option value="Role">Role</option>
                      <option value="Administrator">Administrator</option>
                      <option value="C-Level/President/Owner">
                        C-Level/President/Owner
                      </option>
                      <option value="Consultant">Consultant</option>
                      <option value="Editor/Reporter/Writer">
                        Editor/Reporter/Writer
                      </option>
                      <option value="Educator/Professor/Teacher">
                        Educator/Professor/Teacher
                      </option>
                      <option value="General Manager/Director">
                        General Manager/Director
                      </option>
                      <option value="Other">Other</option>
                      <option value="Project Manager">Project Manager</option>
                      <option value="Retired">Retired</option>
                      <option value="Student/Intern">Student/Intern</option>
                      <option value="Vice President/SVP/EVP">
                        Vice President/SVP/EVP
                      </option>
                    </select>
                    <input
                      type="text"
                      name="country"
                      id=""
                      placeholder="Country"
                      className="w-100 w-md-50 w-lg-50 px-4 py-2 rounded-3 my-3 my-lg-0"
                    />
                  </div>
                  <div className="d-lg-flex justify-content-between gap-3 my-lg-3">
                    <input
                      type="text"
                      name="city"
                      id=""
                      placeholder="City"
                      className="w-100 w-md-50 w-lg-50 px-4 py-2 rounded-3"
                    />
                    <select
                      name="question"
                      className="w-100 w-md-50 w-lg-50 px-4 py-2 rounded-3 my-3 my-lg-0"
                      id=""
                    >
                      <option value="I have a question about">
                        I have a question about
                      </option>
                      <option value="Business Proposal">
                        Business Proposal
                      </option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Media Inquiry">Media Inquiry</option>
                      <option value="Partnership (Consulting Services or Vendors)">
                        Partnership (Consulting Services or Vendors)
                      </option>
                    </select>
                  </div>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Message"
                    className="w-100 px-4 py-2 rounded-3 text-dark"
                    id=""
                  ></textarea>
                  <div className="text-center py-3">
                    <button
                      type="button"
                      className="Inter bg_button text-white fs-6 ps-4 pe-5 py-2 fw-bold position-relative"
                    >
                      Submit
                      <span className="bg_iconbtn py-3 px-2 text-dark position-absolute end-0">
                        <HiOutlineArrowSmRight className="fs-5" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="contact_location py-5 px-0 p-lg-5">
            <video
              className="contact_video_bg"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={videolinkConatct} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="container">
              <div className="main_box  row ">
                <div className="col-12 col-lg-4">
                  <Link to={"tel:9824331155"} className="text-decoration-none">
                    <div
                      className="bg-item_contact py-5 rounded-4 mb-3"
                      style={{ height: "90%" }}
                      data-aos="zoom-in"
                      data-aos-duration="1500" data-aos-once="true"
                    >
                      <div className="text-white text-center">
                        <div className="contacticon fw-bold">
                          <BiPhoneCall className="fs-1" />
                        </div>
                        <h3 className="py-3">Call Us</h3>
                        <div>+91 98243 31155
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-12 col-lg-4">
                  <Link onClick={() => {
                    window.open("https://www.google.com/maps/place/Mindscape+Design/@21.1759921,72.804965,17z/data=!3m1!4b1!4m6!3m5!1s0x3be04d6d455da8af:0x9f1037b31fab7bd1!8m2!3d21.1759921!4d72.804965!16s%2Fg%2F11fmz05skp?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D", "_blank");
                  }} target="_blank" rel="noopener noreferrer" className="text-decoration-none" >
                    <div
                      className="bg-item_contact py-5 rounded-4 mb-3"
                      style={{ height: "90%" }}
                      data-aos="zoom-in"
                      data-aos-duration="1500" data-aos-once="true"
                      data-aos-delay="400"
                    >
                      <div className="text-white text-center">
                        <div className="contacticon fw-bold">
                          <GrLocation className="fs-1" />
                        </div>
                        <h3 className="py-3">Location</h3>
                        <div className="p-1">
                          3rd Floor, Evoq, Ghod Dod Rd, opp. Narmad Library, Surat-395007
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-12 col-lg-4">
                  <Link to={"mailto:mindscapedesign2018@gmail.com"} className="text-decoration-none" target="_blank">
                    <div
                      className="bg-item_contact py-5 rounded-4 mb-3"
                      style={{ height: "90%" }}
                      data-aos="zoom-in"
                      data-aos-duration="1500" data-aos-once="true"
                      data-aos-delay="600"
                    >
                      <div className="text-white text-center">
                        <div className="contacticon fw-bold">
                          <IoMailOpenOutline className="fs-1 " />
                        </div>
                        <h3 className="py-3">E-mail</h3>
                        <div>mindscapedesign2018@gmail.com</div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div
            className="w-100 my-5"
            data-aos="zoom-in"
            data-aos-duration="1500" data-aos-once="true"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3720.408012772494!2d72.8052599!3d21.1759447!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d6d455da8af%3A0x9f1037b31fab7bd1!2sMindscape%20Design!5e0!3m2!1sen!2sin!4v1649822750057!5m2!1sen!2sin"
              height="450"
              width="100%"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Locate Us"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default HOC(ContactUs);
