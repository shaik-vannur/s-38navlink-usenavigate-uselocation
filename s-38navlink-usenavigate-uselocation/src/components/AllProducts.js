import React from 'react'

function AllProducts({price,image,title}) {
  return (
    <div>
      <img>{image}</img>
      <p>{title}</p>
      {/* <p>${price}</p> */}
    </div>
  )
}

export default AllProducts
