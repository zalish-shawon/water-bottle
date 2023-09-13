import { useState } from 'react'
import './App.css'
import TotalBottle from './assets/TotalBottle'
import { useEffect } from 'react'
import SingleBottle from './SingleBottle'
import Cart from './Cart'
import swal from 'sweetalert';
import Price from './Price'



function App() {

  
const [bottles, setBottle] = useState([])
const [cart, setCart] = useState([])
const [price, SetPrice] = useState(0)


const handleItemPrice = (bottle) => {
  
  const itemsDetails = [...cart, bottle]
   const isExits = cart.find(item => item.id === bottle.id)
    if(isExits) {
      return swal("Already Selected!");
    } else {
      setCart(itemsDetails)
    }

  let value = bottle.price
  
  cart.forEach(item => value += item.price)
    SetPrice(value)
}

useEffect(() => {
  fetch('bottle.json')
  .then(res => res.json())
  .then(data => setBottle(data))
},[])

  return (
    <>
      <h1 className=' text-5xl font-bold 
      text-center mt-6'>Memorable Water Bottle</h1>
      <TotalBottle bottles = {bottles}></TotalBottle>
      <div className='flex justify-between'>
      <div className='grid grid-cols-3 gap-4 w-[75%]'>
      {
        bottles.map(bottle => <SingleBottle key={bottle.id} bottle={bottle} handleItemPrice={handleItemPrice}></SingleBottle>)
       }
      </div>
       
       <div className='w-[20%] mt-3'>
        <Cart key={cart.id} cart={cart}></Cart>
        <Price price ={price}></Price>
       </div>

      </div>
      

    </>
  )
}

export default App
