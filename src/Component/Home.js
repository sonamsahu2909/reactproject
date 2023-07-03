import React from 'react'
import '../Component/css/Style.css'
import Slidar from './layout/Slidar'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <>
    <Slidar/>
    <div className="container text-center mt-4 pt-4">
    <Link to="/shopall"> <button className="text-white btn btn-danger">Explore More..</button>
    </Link>
   </div>
 
    <div className="container text-white text-center mt-4 pt-4">
        <h2>FEATURED <span className="text-primary1"> PRODUCT</span></h2>
        <div className="row mt-4 pt-4">
            <div className="col-md-4 col-sm-6 mb-4">
                <img src="image/img1.jpg" width="100%" alt="" />
                <h4 className="text-start  pt-3">Black Jim supermacy T-shirt</h4>
                <h4 className="text-start">RS 999.00 <del>RS 1,499.00</del></h4>
                <Link to="/"><button className="btn btn-danger rounded-5 ">Buy Now</button></Link>
            </div>
            <div className="col-md-4 col-sm-6">
                <img src="image/img3.jpg" width="100%" alt="" />
                <h4 className="text-start pt-3">Black Jim supermacy T-shirt</h4>
                <h4 className="text-start">RS 999.00 <del>RS 1,499.00</del></h4>
                <Link to="/"><button className="btn btn-danger rounded-5 ">Buy Now</button></Link>
            </div>
            <div className="col-md-4 col-sm-6">
                <img src="image/img1.jpg" width="100%" alt=""  />
                <h4 className="text-start pt-3">Black Jim supermacy T-shirt</h4>
                <h4 className="text-start">RS 999.00 <del>RS 1,499.00</del></h4>
                <Link to="/"><button className="btn btn-danger rounded-5 ">Buy Now</button></Link>
            </div>
            <div className="col-md-4 col-sm-6">
                <img src="image/img3.jpg" width="100%" alt="" />
                <h4 className="text-start  pt-3">Black Jim supermacy T-shirt</h4>
                <h4 className="text-start">RS 999.00 <del>RS 1,499.00</del></h4>
                <Link to="/"><button className="btn btn-danger rounded-5 ">Buy Now</button></Link>
            </div>
            <div className="col-md-4 col-sm-6">
                <img src="image/img1.jpg" width="100%" alt="" />
                <h4 className="text-start pt-3">Black Jim supermacy T-shirt</h4>
                <h4 className="text-start">RS 999.00 <del>RS 1,499.00</del></h4>
                <Link to="/"><button className="btn btn-danger rounded-5 ">Buy Now</button></Link>
            </div>
            <div className="col-md-4 col-sm-6">
                <img src="image/img3.jpg" width="100%"  alt="" />
                <h4 className="text-start pt-3">Black Jim supermacy T-shirt</h4>
                <h4 className="text-start">RS 999.00 <del>RS 1,499.00</del></h4>
                <Link to="/"><button className="btn btn-danger rounded-5 ">Buy Now</button></Link>
            </div>

        </div>

    </div>{/*container-fluid end*/}

    <div className="container text-center mt-4 mb-3">
        <Link to="/shopall">
            <button className="btn btn-danger rounded-5 ps-4 pe-4"> view all </button>
        </Link>
       
    </div>

    <hr className="text-white"></hr>
    </>
  )
}

export default Home