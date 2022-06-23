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

    const unsubscribe = projectFirestore.collection('recipes').doc(id).onSnapshot(doc => {
      if(doc.exists) {
        setIsPending(false)
        setRecipe(doc.data())
      } else {
        setIsPending(false)
        setError('Could not find that recipe, Sir!')
      }
    })

    return () => unsubscribe()
  }, [id])

  const handleClick = async () => {
      await projectFirestore.collection('recipes').doc(id).update({title: "I changed again....ahahahaha"})
  }


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
            <button onClick={handleClick}>Change Title</button>
          </>
      )}
    </div>
  )
}
