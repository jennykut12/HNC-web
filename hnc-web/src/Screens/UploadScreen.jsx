import React from 'react';
import Navbar1 from '../Components/Navbar1';
import Form from 'react-bootstrap/Form';
import { FlexColumnContainer } from '../Containers';
import { HeaderText1 } from '../Components/Text';
import { TransparentButton } from '../Components/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Link} from 'react-router-dom';

const UploadScreen = () => {
  return (
    <div>
        <Navbar1/>
        <Container>
        <FlexColumnContainer>
            <HeaderText1>Upload Question of the week</HeaderText1>
        </FlexColumnContainer>
        <Form>
      <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
        <Col md="8" sm='8'lg='8' xs='11'>
        <Form.Control as="textarea" rows={3} type="text" placeholder="Question" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
        <Col md="6" sm='6'lg='6' xs='8'>
        <Form.Control type="text" placeholder="" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formBasicCheckbox">
        <Col md="6" sm='6'lg='6' xs='8'>
            <Form.Control type="text" placeholder="" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formBasicCheckbox">
        <Col md="6" sm='6'lg='6' xs='8'>
            <Form.Control type="text" placeholder="" />
        </Col>
      </Form.Group>
      <FlexColumnContainer>
        <Form.Group as={Row} className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>
                <HeaderText1>Correct Answer</HeaderText1>
            </Form.Label>
            <Col md="6" sm='6'lg='6' xs='8'>
                <Form.Control type="text" placeholder="" />
            </Col>
        </Form.Group>
      </FlexColumnContainer>
      <FlexColumnContainer mt='20px'>
            <Link style={{textDecoration: 'none'}} to='/submitted'>
                <TransparentButton variant="primary" type="submit" text='Submit'/>
            </Link>
        {/* <TransparentButton variant="primary" type="submit" text='Submit'/> */}
      </FlexColumnContainer>
    </Form>
    </Container>
    </div>
  )
}

export default UploadScreen