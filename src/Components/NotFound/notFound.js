import './styles.css'
import Layout from '../Layout/layout'
import { NavLink, Router } from 'react-router-dom'
import * as Routes from '../../routePaths'

function NotFound() {
  return (
    <div>
      <Layout>
        <div class='main-404'>
          <div>
            <div class='text-404'>Error 404. Page not found!</div>
            <NavLink class='nav-404' exact to={Routes.Home}>
              Return to Home
            </NavLink>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default NotFound
