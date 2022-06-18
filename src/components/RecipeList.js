import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import trashcan from '../assets/trashcan.svg'
import { projectFirestore } from '../firebase/config'

import './RecipeList.css'

export default function RecipeList({ recipes }) {

  const { color, darkMode } = useTheme()

  if(recipes.length === 0) {
      return (
        <p className='error'>No results were found with "{}"</p>
      )
  }

  const deleteRecipe = (id) => {
      projectFirestore.collection('recipes').doc(id).delete().then(() => {
    console.log("Document successfully deleted!");
}).catch((error) => {
    console.error("Error removing document: ", error);
});
  }

  return (
    <div className='recipe-list'>
          {recipes.map(recipe => (
            <div key={recipe.id} className="card" style={ darkMode ? { background: '#333', color: 'white' } : { border: `3px solid ${color}` } }>
              <img 
                  className='delete'
                  src={trashcan}
                  onClick={() => deleteRecipe(recipe.id)}></img>
              <h3 className='title' style={ darkMode ? { color: '#e4e4e4'} : {} }>{recipe.title}</h3>
              <p style={ darkMode ? { color: '#e4e4e4'} : {} }>{`-${recipe.cookingTime}-`}</p>
              <div className='method' style={ darkMode ? { color: '#e4e4e4'} : {} }>{recipe.method.substring(0,100)}...</div>
              <Link  style={{ background: color, color: 'white' }} to={`/recipes/${recipe.id}`}>Cook this!</Link>
            </div>
          ) )
        }
    </div>
  )
}