import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './Pages/Home/home'
import About from './Pages/About/about'
import Blog from './Pages/Blog/blog'
import Products from './Pages/Products/products'
import Special from './Pages/Special/special'
import Contact from './Pages/Contact/contact'
import NotFoundPage from './Pages/NotFound/notFoundPage'
import * as Routes from './routePaths'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path={Routes.Home} component={HomePage} />
          <Route path='/about-us' component={About} />
          <Route path={Routes.Blog} component={Blog} />
          <Route path={Routes.Products} component={Products} />
          <Route path='/special' component={Special} />
          <Route path='/contact' component={Contact} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
