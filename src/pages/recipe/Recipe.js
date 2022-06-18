import { useParams } from 'react-router-dom'
import { projectFirestore } from '../../firebase/config'

// styles
import './Recipe.css'
import { useTheme } from '../../hooks/useTheme'
import { useEffect, useState } from 'react'

export default function Recipe() {

  const { id } = useParams()
  const { color, darkMode } = useTheme()

  const [recipe, setRecipe] = useState(null)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)

  useEffect(() => {
    setIsPending(true)

    projectFirestore.collection('recipes').doc(id).get().then(doc => {
      if(doc.exists) {
        setIsPending(false)
        setRecipe(doc.data())
      } else {
        setIsPending(false)
        setError('Could not find that recipe, Sir!')
      }
      console.log("🚀 | file: Recipe.js | line 31 | projectFirestore.collection | doc", doc,doc.data())
    })
  }, [id])

  return (
    <div className='recipe' style={ darkMode ? { background: '#333', color: 'white' } : { border: `3px solid ${color}` } }>
        {isPending && <p className='loading'>Loading...</p>}
        {error && <p className='error'>{error}</p>}
        {recipe && (
          <>
            <h2 className='page-title' style={ darkMode ? { color: 'white' } : {}}>{recipe.title}</h2>
            <p>Cooking Time: {recipe.cookingTime}</p>
            <ul>
              {recipe.ingredients.map(ing => (
            <li key={ing} className='ingredient'>{ing}</li>
              ))}
            </ul>
            <p>Preparation Method: {recipe.method}</p> 
          </>
      )}
    </div>
  )
}
