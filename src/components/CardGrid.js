import React from 'react'
import ArugulaPizza from '../images/Menu_items/arugulapizza.jpeg'
import MargPizza from '../images/Menu_items/margpizza.jpeg'

const CardGrid = () => {
    return (
        <div className="card-group">
  <div className="card">
    <img src={ArugulaPizza} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Arugula Pizza</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div className="card-footer">

    </div>
  </div>
  <div className="card">
    <img src={MargPizza} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Thin Crust</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div className="card-footer">

    </div>
  </div>
  <div className="card">
    <img src={ArugulaPizza} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Vegan</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div className="card-footer">

    </div>
  </div>
</div>

    )
}

export default CardGrid
