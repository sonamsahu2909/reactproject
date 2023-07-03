import React from 'react'

function Contact() {
  return (
    <>
     
    <div className="container mt-4 pt-4 mb-5  ">
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 text-center">
                   <h1 className="pt-4 mt-4 mb-4 display-3 text-center text-primary1">Do Contact!</h1>
                   <input type="text" placeholder="Name" className="form-control p-3"/><br/>
                   <input type="text" placeholder="Email" className="form-control p-3"/><br/>
                   <input type="text" placeholder="Phone" className="form-control p-3"/><br/>
                   <textarea className="form-control" placeholder="Message" cols="4"></textarea><br/>
                   <button className="btn btn-danger p-3 text-center text-white">Send Message</button>
            </div>
            <div className="col-md-2"></div>
        </div>
    </div>

    <hr className="text-white"/>
    </>
  )
}

export default Contact