import React from 'react'

function Slidar() {
  return (
    <>
    {/*  carusal slider  */}

    <div className="carousel slide" data-bs-ride="carousel" id="z">
      <div className="carousel-indicators d-none">
        <button
          type="button"
          data-bs-target="#z"
          data-bs-slide-to="0"
          className="active"
        ></button>

        <button
          type="button"
          data-bs-target="#z"
          data-bs-slide-to="1"
        ></button>
        <button
          type="button"
          data-bs-target="#z"
          data-bs-slide-to="2"
        ></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="4000">
          <img src="image/bgimage.jpg" className="w-100" alt="..." />
          <div className="carousel-caption">
            {/* <h2>HEllo GWalior</h2> */}
          </div>
        </div>

        <div className="carousel-item " data-bs-interval="4000">
          <img src="image/bgimage.jpg" className="w-100" alt="..." />
          <div className="carousel-caption">
            {/* <h2>HEllo GWalior</h2> */}
          </div>
        </div>
        <div className="carousel-item " data-bs-interval="4000">
          <img src="image/bgimage.jpg" className="w-100" alt="..." />
          <div className="carousel-caption">
            {/* <h2>HEllo GWalior</h2> */}
          </div>
        </div>
      </div>
      {/*  carousel-inner  end*/}

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#z"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#z"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
    {/*carousel end*/}
  </>
  )
}

export default Slidar