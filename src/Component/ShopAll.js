import React from 'react'
import { Link } from 'react-router-dom'
import './css/Style.css'

function ShopAll() {
  return (
   <>
   <div className='container  text-center mt-5 pt-5'>
        <h2 ClassName=" mt-4 pt-4 text-center" style={{color:'#820a0e'}}> PRODUCT</h2>
        <div className="row text-white mt-4 pt-4">
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
        </div>
   </div>
    <hr ClassName="text-white"/>
   </>
  )
}

export default ShopAll