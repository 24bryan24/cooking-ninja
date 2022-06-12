import { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

// styles
import './Search.css'

// components

import RecipeList from '../../components/RecipeList'

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('')
  const [newData, setNewData] = useState('')
  const params = useParams()

  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get('q')

  const url = `http://localhost:3000/recipes?q=${query}`
  const { data, isPending, error } = useFetch(url)

  // useEffect(() => {
  //   if(data) {
  //   // setNewData(data.filter(datum => datum.title.includes(term) || datum.method.includes(term) || datum.ingredients.includes(term)))
  //   // console.log(data[1].ingredients, data[1].ingredients.includes('Tomata pasata'))
  //   // console.log(data, Object.keys(data).length)
  //   }
  // }, [data])

      // console.log(params, 'params, location, history')
      // console.log(query)
      // console.log(!!data)
  return (
    <div>
        <h2 className='page-title'>Recipes including: "{query}"</h2>
        {error && <p className='error'>{error}</p>}
        {isPending && <p className='loading'>Loading...</p>}
        {data && <RecipeList recipes={data}/>}  
    </div>
  )
}