import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
       {/* footer div start */}

       <div className="img1">
            <div className="ts1 container-fluid  text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-6">
                            <div className="row  mt-4 line-height">
                                <div className="col-lg-6 col-md-12 mt-4">
                                  <h4>Get In Touch</h4>
                                  <i className="bi bi-geo-alt"></i>
                                  123 Street, Gwalior,M.P
                                  <br/>
                                  <i className="bi bi-envelope-open"></i> &nbsp; info@example.com<br/>
                                  <i className="bi bi-telephone"></i>+012 345 67890<br/>
                                  <i className="fa-brands fa-twitter bg-secondary1 text-white rounded-circle p-2"></i>         
                                  <i className="fa-brands fa-facebook-f bg-secondary1 text-white rounded-circle p-2"></i>
                                  <i className="fa-brands fa-linkedin bg-secondary1 text-white rounded-circle p-2"></i>
                                  <i className="fa-brands fa-instagram bg-secondary1 text-white rounded-circle p-2"></i>
                                </div>
                            <div className="col-lg-6 col-md-12 mt-4">
                                <h4>Quick Link</h4>
                                <Link to="/"><i className="bi bi-arrow-right text-white"></i>Return and Exchange<br/></Link>
                                <Link to="/"><i className="bi bi-arrow-right text-white"></i>Privacy Policys<br/></Link>
                                <Link to="/"><i className="bi bi-arrow-right text-white"></i>Terms of Service<br/></Link>
                                <Link to="/"><i className="bi bi-arrow-right text-white"></i>Shipping<br/></Link>
                                <Link to="/contact"><i className="bi bi-arrow-right text-white"></i>Contact Us<br/></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6 bg-danger pb-4  nl  text-center ">
                        <h4 >Popular Links</h4>
                        <h6>Subscribe Our Newsletter</h6>
                        <p>Amet justo diam dolor rebum lorem sit stet sea justo kasd</p>
                        <div className="d-flex">
                            <input type="text" placeholder="Your Email" className="form-control" />		
                            <button className="btn btn-success bg-primary1 text-white pe-4 ps-4 me-4" style={{border:'none'}}>Sign up</button>
                        </div>
                    </div>
                </div>
            </div>			
        </div>
    </div>

    <div className="container-fluid text-center bg-black text-light">
        <p className="p-3 text-center">© <span className="text-warning">T-shirt.</span> All Rights Reserved. Designed by <span className="text-warning"><Link to="https://www.linkedin.com/in/sonam-sahu-7b8129208" style={{textDecoration:'none',color:'orange'}}>Sonam</Link></span> </p>
    </div>
    {/* footer div end */}
    </>
  )
}

export default Footer