import './style.css'
import { Row, Col } from 'reactstrap'

function Footer() {
  return (
    <div>
      <div class='footer'>
        <Row>
          <Col
            xl={{ size: '4', offset: '1' }}
            lg={{ size: '4', offset: '1' }}
            md={{ size: '6', offset: '3' }}
            sm={{ size: '12', offset: '0' }}
          >
            <div class='footer-header'>
              <div style={{ color: '#e26e35' }}>A</div> <div>-Shop</div>
            </div>
            <div class='footer-text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam
              quis enim lobortis scelerisque fermentum dui faucibus in ornare.
              Mattis rhoncus urna neque viverra justo nec ultrices dui sapien.
            </div>
          </Col>
          <Col
            xl={{ size: '6', offset: '1' }}
            lg={{ size: '6', offset: '1' }}
            md={{ size: '6', offset: '3' }}
            sm={{ size: '12', offset: '0' }}
          >
            <div class='footer-links'>
              <a href='http://www.google.com' class='link'>
                example
              </a>
              <a href='http://www.google.com' class='link'>
                example
              </a>
              <a href='http://www.google.com' class='link'>
                example
              </a>
              <a href='http://www.google.com' class='link'>
                example
              </a>
              <a href='http://www.google.com' class='link'>
                example
              </a>
              <a href='http://www.google.com' class='link'>
                example
              </a>
            </div>
            <div class='footer-links'>
              <a href='http://www.google.com' class='link'>
                example
              </a>
              <a href='http://www.google.com' class='link'>
                example
              </a>
              <a href='http://www.google.com' class='link'>
                example
              </a>
              <a href='http://www.google.com' class='link'>
                example
              </a>
              <a href='http://www.google.com' class='link'>
                example
              </a>
              <a href='http://www.google.com' class='link'>
                example
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}
export default Footer
