import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { data } from "../../helpers/data";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const LegendContainer = () => {
  return (
    <div>
      <Form.Control type="search" placeholder="Search Legends" />
      <Container>
        <Row xs={1} md={2} lg={3}>
          {data.map((legend) => (
            // <Col xs={10} sm={8} md={6} lg={4} xl={3}> {/* Key prop eklenmeli */}
            <Col>
              <Card>
                <Card.Img variant="top" src={legend.img} />
                <Card.Header>
                  <Card.Title>{legend.name}</Card.Title>{" "}
                  {/* Legend verileri doğru şekilde kullanılmalı */}
                </Card.Header>
                <ul className="m-auto">
                  {
                    legend.statistics.map(item=><li className="list-unstyled h5 text-start"> ⚽️{item}</li>)
                  }
                </ul>
                <span>{legend.official_career}</span>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default LegendContainer;
