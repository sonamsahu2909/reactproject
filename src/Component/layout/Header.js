import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
       <nav>
    <div className="navbar bg-dark navbar-dark navbar-expand-md fixed-top">
     <div className="container-fluid">
         <Link to="/" className="navbar-brand">
             <img src="image/logo.jpeg" alt="" className="web-logo" />
             {/* <h2 className="web-logo text-primary1 text-center ps-4">sonam@gmail.com</h2> */}
             <img src="" alt="" className="mobile-logo" />
         </Link>
 
         {/* mobile view */}
 
         <button  className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#aa">
             <span className="navbar-toggler-icon"></span>
         </button>
 
         {/* mobile view end */}
 
         {/* menu start */}
         <div className="navbar-collapse collapse justify-content-center ps-4 " id={'aa'} >
             <ul className="navbar-nav">
                <li><Link to="/" className="nav-link">HOME</Link></li>
                <li><Link to="/shopall" className="nav-link">SHOP ALL</Link></li>
                <li><Link to="/ourstory" className="nav-link">OUR STORY</Link></li>
                <li><Link to="/contact" className="nav-link">CONTACT</Link></li>
                 <button className="btn btn-danger login" data-bs-toggle="modal" data-bs-target="#sonam">
                     Login
                 </button>
             </ul>
         </div>
         {/* menu end */}
     </div>{/*container-fluid end*/}
    </div> {/* nav bar div end */}
   </nav>

{/* Button trigger modal*/}
<div class="modal fade " id="sonam">
    <div class="modal-dialog modal-lg" >{/*modal-xl,sm,lg*/}
     <div class="modal-content">
       <div class="modal-header bg-dark">
        <h1 class="text-white"><span style={{color: "orange;"}}>ADMIN</span> LOGIN</h1><br/>
       
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  
       </div>{/*modal header end*/}
       <div class="modal-body bg-dark">

         <form>
             <div class="mb-5 mt-3">

               <input type="text" class="form-control p-3  " placeholder="Email" />
             </div>
             <div class="mb-3">
               <input type="password" class="form-control bg-light text-white border-0 p-3" name="Password" placeholder="Password"/><br/>
             </div>
             <div class="text-center">
                <button class="btn btn-warning text-white px-5">Log in</button><br/><br/>
                <span class="text-white">DON`T HAVE AN ACCOUNT?</span><br/>
                <Link class="text-warning" data-bs-toggle="modal" data-bs-target="#register" >REGISTER NOW</Link>
             </div>
            </form>
  
       </div>{/* modal body*/}
    </div>{/*model dialog--- end=*/}
  </div>
</div>{/*modal end*/}

{/* Button trigger modal*/}
<div class="modal fade " id="register">
    <div class="modal-dialog modal-lg" >{/*modal-xl,sm,lg*/}
     <div class="modal-content">
       <div class="modal-header bg-dark">
        <h1 class="text-white"><span style={{color: "orange;"}}>ADMIN</span> LOGIN</h1><br/>
       
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  
       </div>{/*modal header end*/}
       <div class="modal-body bg-dark">

         <form>
             <div class="mb-5 mt-3">
               <input type="text" class="form-control p-3  " placeholder="Name" />
             </div>
             <div class="mb-5 mt-3">
               <input type="text" class="form-control p-3  " placeholder="Email" />
             </div>
             <div class="mb-3">
               <input type="password" class="form-control bg-light text-white border-0 p-3" name="Password" placeholder="Password"/><br/>
             </div>
             <div class="mb-3">
               <input type="password" class="form-control bg-light text-white border-0 p-3" name="Password" placeholder="Confirm Password"/><br/>
             </div>
             <div class="text-center">
                <button class="btn btn-warning text-white px-5">Log in</button><br/><br/>
                <span class="text-white">DON`T HAVE AN ACCOUNT?</span><br/>
                <Link class="text-warning" data-bs-toggle="modal" data-bs-target="#sonam">Login</Link>
             </div>
            </form>
  
       </div>{/* modal body*/}
    </div>{/*model dialog--- end=*/}
  </div>
</div>{/*modal end*/}


    </>
  )
}

export default Header