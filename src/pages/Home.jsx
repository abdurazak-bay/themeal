import React, {useState, useEffect} from 'react'
import apiClient from '../axios/apiClient'
import './Home.css'
import ProductList from '../components/ProductList/ProductList'
import image2 from '../assets/meal-icon.png'
import Paypai from '../assets/Paypai.png'
import icon1 from '../assets/meal-icon1.png'
import icon2 from '../assets/meal-icon2.png'
import icon3 from '../assets/image-icon3.png'
import foto1 from '../assets/foto1.jpg'
import Country from '../components/country/Country'


function Home() {
  const [products, setProducts] = useState([])

  async function getProduct() {
    try {
      const res = await apiClient.get("/search.php?s=a")
      console.log(res);
      setProducts(res.data.meals)
      
    } catch (error) {
      console.log(error);
      
      
    }
    
  }
  useEffect (() => {
    getProduct()
  }, [])
  return (
    <div className='container-home'>
      <div className='container1'>
        <div>
          <img src={image2} alt="Meal Icon" />
        </div>
        <div>
          <h1>Welcome to TheMealDB</h1>
          <p className='p1'>
            Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world.
            <br />We also offer a <span className='guron'>free recipe API</span> for anyone wanting to use it, with additional features for subscribers.
          </p>
          <img className='paypai' src={Paypai} alt="PayPal" />
          <p>Click button above to upgrade free Recipe API to premium.
            <br /> $3 month and cancel anytime. Currently 54 supporters.
          </p>
        </div>
        <div>
          <img src={image2} alt="Meal Icon" />
        </div>
      </div>

      <div className='total'>
        <input type="text" placeholder='Search for a Meal...' />
        <div className='icon'>
          <img src={icon1} alt="Meal Icon" />
          <p>Total Meals: 303</p>

          <div className='icon2'>
            <img src={icon2} alt="Ingredients Icon" />
            <p>Total Ingredients: 575</p>
          </div>

          <img src={icon3} alt="Images Icon" />
          <p>Images: 303</p>
        </div>
      </div>

<div>
  <ProductList data={products}/>
  <Country/>
</div>
      <div className='tamaktar'>
        <h3>Latest Meals</h3>
        <div className='cards'>
          <div className='card'>
          <img src={foto1} alt="" />
          <p>15-minute chicken & halloumi burgers</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
