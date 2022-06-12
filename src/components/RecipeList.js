import { Link } from 'react-router-dom'

import './RecipeList.css'

export default function RecipeList({ recipes }) {

  if(recipes.length === 0) {
      return (
        <p className='error'>No results were found with "{}"</p>
      )
  }

  return (
    <div className='recipe-list'>
          {recipes.map(recipe => (
            <div key={recipe.id} className="card">
              <h3 className='title'>{recipe.title}</h3>
              <p>{`-${recipe.cookingTime}-`}</p>
              <div className='method'>{recipe.method.substring(0,100)}...</div>
              <Link to={`/recipes/${recipe.id}`}>Cook this!</Link>
            </div>
          ) )
        }
    </div>
  )
}