import { useState, useEffect } from 'react'

// styles
import './Search.css'

// components

import RecipeList from '../../components/RecipeList'
import { useTheme } from '../../hooks/useTheme'

export default function Search({ data }) {

  const { color } = useTheme()

  const [searchTerm, setSearchTerm] = useState('')
  const [newData, setNewData] = useState('')
  
  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  useEffect(() => {
    if(data) {
    setNewData(data.filter(datum => datum.title.includes(searchTerm) || datum.method.includes(searchTerm) || datum.ingredients.includes(searchTerm)))
    console.log(data[1].ingredients, data[1].ingredients.includes('Tomata pasata'))
    }
  }, [data, searchTerm])

  return (
    <div>
        <label>
          <input 
            type="text" 
            onChange={(e) => handleSearch(e)}
            value={searchTerm}
            placeholder="Search..."
            style={{ color: color, borderBlockColor: color, borderBlockWidth: '2px' }}
          />
        </label>
        {/* <p>{searchTerm}</p> */}
        {newData && <RecipeList recipes={newData}/>}
    </div>
  )
}