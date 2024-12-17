import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header'


function Home() {
  let [products,setproducts]=useState([]);
  

  let everyProduct= async ()=> {
    let JSONProduct= await fetch('https://fakestoreapi.com/products',{method:"GET"});
    let JSOProduct= await JSONProduct.json();
    setproducts(JSOProduct);

  }
  //  useEffect(everyProduct(),[])

  let loc=useLocation();
  return (
    <>
    <div>
      <Header />

      
      <h1>Name:{loc&&loc.state&&loc.state.name?loc.state.name:null}</h1>
      <h1>age:{loc&&loc.state&&loc.state.age?loc.state.age:null}</h1>
      <h1>place:{loc&&loc.state&&loc.state.place?loc.state.place:null}</h1>
    <button type='button' onClick={()=>{
      everyProduct()
    }}>
      click
    </button>
    {
    products.map((ele,i)=>{ 
      return(<div className='p-Main-div'>
        <div className='p-div'>
        <img className='p-imgs' src={ele.image} title={ele.description} alt=" "></img>
        <p>{ele.title }</p>
        <p> &#x20B9;{ele.price}</p>
      </div>
      </div>)

    })

    }
    

      {/* <img className='home-img' src='./images/home.png'></img>
      <img className='home-img' src='./images/fashion.png'></img>
      <img className='home-img' src='./images/mobile1.png'></img>
      <img className='home-img' src='./images/electronics.png'></img>
      <img className='home-img' src='./images/mobile.png'></img> */}

     </div>
     </>
  )
}

export default Home
