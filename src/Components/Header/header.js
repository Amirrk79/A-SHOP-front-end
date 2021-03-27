import { FaFacebook } from 'react-icons/all'
import { AiFillTwitterCircle } from 'react-icons/all'
import { AiFillInstagram } from 'react-icons/all'
import { FaTelegram } from 'react-icons/all'
import { FaPhone } from 'react-icons/all'
import { FiMail } from 'react-icons/all'
import { NavLink } from 'react-router-dom'
import * as Routes from '../../routePaths'
import { Row, Col } from 'reactstrap'
import './style.css'

function Header() {
  return (
    <div>
      <div class='header'>
        <Row noGutters>
          <Col
            xl={{ size: '3', offset: '1' }}
            lg={{ size: '3', offset: '1' }}
            md={{ size: '3', offset: '0' }}
            sm={{ size: '2', offset: '0' }}
          >
            <div class='header-icons'>
              <div>
                <FaFacebook class='header-icon' />
              </div>
              <div>
                <AiFillTwitterCircle class='header-icon' />
              </div>
              <div>
                <AiFillInstagram class='header-icon' />
              </div>
              <div>
                <FaTelegram class='header-icon' />
              </div>
            </div>
          </Col>
          <Col
            xl={{ size: '5', offset: '3' }}
            lg={{ size: '6', offset: '2' }}
            md={{ size: '7', offset: '1' }}
            sm={{ size: '10', offset: '0' }}
          >
            <div class='header-links'>
              <div class='header-link'>
                <FaPhone class='header-right-icons' />
                +98 9981046496
              </div>
              <div class='header-link'>
                <FiMail class='header-right-icons' />{' '}
                AmirHosseinKazemiSeresht@aol.com
              </div>
            </div>
          </Col>
        </Row>
        <Row noGutters>
          <Col>
            <div class='header2'>
              <Row noGutters>
                <Col
                  xl={{ size: '3', offset: '1' }}
                  lg={{ size: '3', offset: '1' }}
                  md={{ size: '4', offset: '0' }}
                  sm={{ size: '4', offset: '0' }}
                >
                  <div class='a-shop'>
                    <div style={{ color: '#e26e35' }}>A</div>-Shop
                  </div>
                </Col>
                <Col
                  xl={{ size: '7', offset: '1' }}
                  lg={{ size: '7', offset: '1' }}
                  md={{ size: '7', offset: '1' }}
                  sm={{ size: '8', offset: '0' }}
                >
                  <div class='header-navbar'>
                    <NavLink
                      class='navbar-navlink'
                      exact
                      to={Routes.Home}
                      activeStyle={{ color: '#e26e35' }}
                    >
                      Home
                    </NavLink>
                    <NavLink
                      class='navbar-navlink'
                      exact
                      to={Routes.Products}
                      activeStyle={{ color: '#e26e35' }}
                    >
                      Products
                    </NavLink>
                    <NavLink
                      class='navbar-navlink'
                      exact
                      to={Routes.AboutUs}
                      activeStyle={{ color: '#e26e35' }}
                    >
                      AboutUs
                    </NavLink>
                    <NavLink
                      class='navbar-navlink'
                      exact
                      to={Routes.Special}
                      activeStyle={{ color: '#e26e35' }}
                    >
                      Special
                    </NavLink>
                    <NavLink
                      class='navbar-navlink'
                      exact
                      to={Routes.Blog}
                      activeStyle={{ color: '#e26e35' }}
                    >
                      Blog
                    </NavLink>
                    <NavLink
                      class='navbar-navlink'
                      exact
                      to={Routes.Contact}
                      activeStyle={{ color: '#e26e35' }}
                    >
                      Contact
                    </NavLink>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Header
