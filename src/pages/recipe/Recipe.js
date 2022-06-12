import { useFetch } from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'

// styles
import './Recipe.css'

export default function Recipe() {

  const { id } = useParams()
  const url = `http://localhost:3000/recipes/${id}`
  const { data: recipe, isPending, error } = useFetch(url)
  // console.log(recipe.title)
  // console.log(recipe.ingredients.map(ingredient => ingredient))

  return (
    <div className='recipe'>
        {isPending && <p className='loading'>Loading...</p>}
        {error && <p className='error'>{error}</p>}
        {recipe && (
          <>
            <h2 className='page-title'>{recipe.title}</h2>
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
