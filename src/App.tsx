import { Weather } from "./features/weather/Weather";
import "./App.css";

import { Container, Row, Col } from "react-grid-system";

function App() {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <Weather />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
