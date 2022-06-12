import { useFetch } from '../../hooks/useFetch'

// styles
import './Home.css'

// components
import RecipeList from '../../components/RecipeList'
import SearchCopy from '../search/Search copy'

export default function Home() {

  const handleClick = () => {
    if(document.body.style.backgroundColor === 'rgb(223, 223, 223)') {
      document.body.style.backgroundColor = 'rgb(50, 54, 168)'
      // console.log(document.body.style.backgroundColor)
    } else {
      document.body.style.backgroundColor = 'rgb(223, 223, 223)'
      // console.log(document.body.style.backgroundColor)
    }
  }

  const { data, isPending, error } = useFetch('http://localhost:3000/recipes')

  // function setWidth() {
  //   let ingredients = document.querySelectorAll('.ingredient');
  //   const newWidth = Math.floor(Math.random() * 250 + 200);
  //   [...ingredients].forEach(ingredient => {
  //     ingredient.style.setProperty('--hover-width', `${newWidth}px`)
  //   })
  //   //console.log([...ingredients].forEach(ingredient => console.log(ingredient.style.--hover-width)))
  // }

  return (
    <div className='home'>
        <button onClick={handleClick}>Dark Mode</button>
        <SearchCopy data={data}/>
        {error && <p className='error'>{error}</p>}
        {isPending && <p className='loading'>Loading...</p>}
        {/* {data && <RecipeList recipes={data}/>} */}
    </div>
  )
}