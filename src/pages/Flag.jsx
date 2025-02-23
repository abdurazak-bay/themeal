import React, {useEffect, useState} from 'react'
import ProductList from '../components/ProductList/ProductList'
import apiClient from '../axios/apiClient'
import { useParams } from 'react-router-dom'
import Country from '../components/country/Country'


function Flag() {

    const {value} = useParams()
    const [product, setProducts] = useState([])

    async function getFlag() {
        try {
            const res = await apiClient.get(`/filter.php?a=${value}`)

            console.log(res);
            setProducts(res.data.meals)
            
        } catch (error) {

        }
    }

    useEffect(() => {
        getFlag()
    }, [value])

  return (
    <div>
      Flag {value}
      <ProductList data={product}/>
      <Country/>
    </div>
  )
}

export default Flag