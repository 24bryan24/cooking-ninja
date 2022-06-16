import { BrowserRouter, Switch, Route } from 'react-router-dom'

// page components
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Search from './pages/search/Search'
import Recipe from './pages/recipe/Recipe'
import Navbar from './components/Navbar'
import ThemeSelector from './components/ThemeSelector'

// custom hooks
import { useTheme } from './hooks/useTheme'


// styles
import './App.css'

function App() {

  const { darkMode } = useTheme()

  return (
    <div className="App" style={ darkMode ? { background: '#484848'} : {} }>
    
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/recipes/:id">
            <Recipe />
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App
