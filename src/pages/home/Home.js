import { useEffect, useState } from 'react'
import { projectFirestore } from '../../firebase/config'

// styles
import './Home.css'

// components
// import RecipeList from '../../components/RecipeList'
import SearchCopy from '../search/Search copy'

export default function Home() {

  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)

  useEffect(() => {
    setIsPending(true);

    projectFirestore.collection('recipes').get().then((snapshot) => {
        if(snapshot.empty) {
          setError('No recipes to load!');
        } else {
          let results = [];
          snapshot.docs.forEach(doc => {
            results.push({id: doc.id, ...doc.data()})
          })
          setData(results)
          setIsPending(false)
        }
    }).catch(err => {
          setError(err.message)
          setIsPending(false)
    })
  }, [data])

  return (
    <div className='home'>
        <SearchCopy data={data}/>
        {error && <p className='error'>{error}</p>}
        {isPending && <p className='loading'>Loading...</p>}
        {/* {data && <RecipeList recipes={data}/>} */}
    </div>
  )
}