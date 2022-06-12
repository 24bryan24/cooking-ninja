import { useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'

// styles
import './Searchbar.css'

export default function Searchbar() {
    const [term, setTerm] = useState('')
    const history = useHistory()
    const searchBarRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        history.push(`/search?q=${term}`)
        searchBarRef.current.value = ''
    }

  return (
    <div className='searchbar'>
        <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="search">Search:</label>
            <input 
                type="text" 
                id='search'
                onChange={(e) => setTerm(e.target.value)}
                ref={searchBarRef}
                required
            />
        </form>
    </div>
  )
}
