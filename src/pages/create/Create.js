// styles
import './Create.css'

import { useState, useRef, useEffect } from 'react'
import { useFetch } from '../../hooks/useFetch';
import Draggable from 'react-draggable';
import { useHistory } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'



export default function Create() {

  const { color } = useTheme()

  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])
  const ingredientInput = useRef(null)
  const history = useHistory()

  const { postData, data, error, isPending } = useFetch('http://localhost:3000/recipes', "POST")

  const handleSubmit = (e) => {
    e.preventDefault()
    postData({
      title,
      ingredients,
      method,
      cookingTime: cookingTime + ' minutes'
    })
    setTitle('')
    setMethod('')
    setCookingTime('')
    setNewIngredient('')
    setIngredients('')
  }

  const handleAdd = (e) => {
    e.preventDefault()
    const ing = newIngredient.trim()

    if(ing && !ingredients.includes(ing)) {
    setIngredients(prevIngredients => [...prevIngredients, ing])
    }
    setNewIngredient('')
    ingredientInput.current.focus()
    console.log(history)
  }

  const handleClear = (e) => {
    e.preventDefault()
    setNewIngredient('')
    setIngredients('')
    ingredientInput.current.focus()
  }

  console.log(title, ingredients, method, cookingTime, newIngredient)

  useEffect(() => {
      if (data) {
        history.push('/')
      }
    }, [data])


  return (
    <div className='create'>
      <h2 className='page-title'>Add a new recipe</h2>
      
      <form onSubmit={(e) => handleSubmit(e)}>
        
        <label>
          <span>Recipe Title: {title}</span>
          <input 
            type="text" 
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required 
          />
        </label>

        <div></div>

        <label>
          <span>Ingredients: {ingredients}</span>
          <div className='ingredients'>
            <Draggable>
            <input 
              type="text" 
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
              // required 
              />
              </Draggable>
            <button style={{ background: color }} className='btn' onClick={(e) => handleAdd(e)}>add</button>
            <button style={{ background: color }} className='btn' onClick={(e) => handleClear(e)}>clear</button>
          </div>
        </label>

            {/* <ul>
              {ingredients && ingredients.map(ingredient => (
              <li key={ingredient}>
                <a className='links' href={`https://www.shoprite.com/sm/pickup/rsid/3000/results?q=${ingredient}`}>{ingredient}</a>
              </li>
               ))}
            </ul> */}

            <p className='ingList'>{ingredients && ingredients.map(ingredient => (
              <a 
              key={ingredient} 
              href={`https://www.shoprite.com/sm/pickup/rsid/3000/results?q=${ingredient}`} 
              className='ings'>{ingredient}</a>
               ))}</p>

        <label>
          <span>Preparation Instructions: {method}</span>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required 
          />
        </label>

        <label>
          <span>Cooking Time (Minutes) {cookingTime}</span>
          <input
            type="number" 
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required 
          />
        </label>

        <button style={{ background: color }} className='btn' type='submit'>submit</button>

    </form> 
    </div>
  )
}
