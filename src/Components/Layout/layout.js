import Header from '../Header/header'
import Footer from '../Footer/footer'
import { Container, Row, Col } from 'reactstrap'

function Layout({ children }) {
  return (
    <div>
      <Container fluid='true'>
        <Row noGutters>
          <Col xl='12' lg='12' md='12' sm='12' xs='12'>
            <Header />
          </Col>
          <Col xl='12' lg='12' md='12' sm='12' xs='12'>
            <div>{children}</div>
          </Col>
          <Col xl='12' lg='12' md='12' sm='12' xs='12'>
            <Footer />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Layout
