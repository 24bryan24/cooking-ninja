import { Link } from 'react-router-dom'
// import { useState } from 'react'
import { useTheme } from '../hooks/useTheme'

// styles
import './Footer.css'

// components


export default function Footer() {

  const { color } = useTheme()
  console.log(useTheme(), color)


  return (
    <div className='footer' style={{ background: color }}>
        <nav>
            <Link to="/" className='brand'>Home</Link>
            <Link to="/create">Create Recipe</Link>
        </nav>
    </div>
  )
}
