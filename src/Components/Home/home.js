import { Container, Row, Col } from 'reactstrap'
import './style.css'
import Header from '../Header/header'
import Footer from '../Footer/footer'

function Home() {
  return (
    <div style={{ overflow: 'auto' }}>
      <Container fluid='true'>
        <Row noGutters>
          <Col xl='12' lg='12' md='12' sm='12' xs='12'>
            <Header />
          </Col>
          <Col xl='12' lg='12' md='12' sm='12' xs='12'>
            <div class='main'>
              <Row noGutters>
                <Col
                  xl={{ size: '3', offset: '2' }}
                  lg={{ size: '3', offset: '2' }}
                  md={{ size: '4', offset: '2' }}
                  sm={{ size: '4', offset: '2' }}
                >
                  <div class='main-info'>
                    <div class='shop-with-us'>Shop With Us</div>
                    <div class='shop-info'>
                      Experience the best prices and quality with us.
                    </div>
                    <div class='main-btns'>
                      <button class='shop-now-btn'>SHOP NOW</button>
                      <button class='sign-in'>SIGN IN</button>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col
            xl={{ size: '4', offset: '4' }}
            lg={{ size: '4', offset: '4' }}
            md={{ size: '6', offset: '3' }}
            sm={{ size: '12', offset: '0' }}
          >
            <div class='info1'>
              <div class='header1-info1'>POPULAR PRODUCTS</div>
              <div class='header2-info1'>Our Products</div>
              <div class='info1-text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
          </Col>

          <Col
            xl={{ size: '6', offset: '0' }}
            lg={{ size: '6', offset: '0' }}
            md={{ size: '6', offset: '0' }}
            sm={{ size: '12', offset: '0' }}
          >
            <div class='info2'>
              <div class='header1-info1'>POPULAR PRODUCTS</div>
              <div class='header2-info1'>Our Quality</div>
              <div class='info1-text'>
                Condimentum id venenatis a condimentum vitae sapien. Platea
                dictumst quisque sagittis purus. Tellus cras adipiscing enim eu
                turpis. Auctor eu augue ut lectus arcu bibendum at. Morbi
                tristique senectus et netus et malesuada fames ac turpis. Ornare
                arcu odio ut sem nulla pharetra diam sit amet. Suspendisse
                faucibus interdum posuere lorem ipsum dolor. Nam libero justo
                laoreet sit amet. Consequat interdum varius sit amet mattis.
                Amet facilisis magna etiam tempor orci eu. Sem nulla pharetra
                diam sit amet. Orci sagittis eu volutpat odio. Nunc eget lorem
                dolor sed viverra ipsum nunc. Sit amet consectetur adipiscing
                elit pellentesque.
              </div>
            </div>
          </Col>
          <Col
            xl={{ size: '6', offset: '0' }}
            lg={{ size: '6', offset: '0' }}
            md={{ size: '6', offset: '0' }}
            sm={{ size: '12', offset: '0' }}
          >
            <div class='info3'>
              <div class='header1-info1'>POPULAR PRODUCTS</div>
              <div class='header2-info1'>Our Prices</div>
              <div class='info1-text'>
                Proin libero nunc consequat interdum varius sit amet. Et
                malesuada fames ac turpis egestas. Purus ut faucibus pulvinar
                elementum integer enim neque volutpat ac. Nec feugiat in
                fermentum posuere urna. Praesent semper feugiat nibh sed
                pulvinar. Pretium fusce id velit ut tortor pretium viverra.
                Scelerisque eu ultrices vitae auctor. Sit amet commodo nulla
                facilisi nullam. Aliquam malesuada bibendum arcu vitae. Laoreet
                id donec ultrices tincidunt arcu. Quis vel eros donec ac odio
                tempor orci dapibus. Et molestie ac feugiat sed lectus. Quisque
                sagittis purus sit amet volutpat consequat mauris.
              </div>
            </div>
          </Col>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default Home
