import React from 'react'
import Hotsauce from '../images/habonero.jpg'
import ChefHands from '../images/chefhands.jpeg'
import FlowerHands from '../images/flourhands.jpeg'
import FirePizza from '../images/firepizza1.jpeg'


const Hero = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <ol className="carousel-indicators">
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" />
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} />
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} />
  </ol>
  <div className="carousel-inner">
    <div className="container">
    </div>
    <div className="carousel-item active">
      <img src={FirePizza} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={FlowerHands} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={ChefHands} className="d-block w-100" alt="..." />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </a>
</div>


    )
}

export default Hero
