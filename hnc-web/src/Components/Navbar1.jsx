import React from 'react';
import { FlexRowContainer } from '../Containers';
import icon from '../assets/icon.png';
import styled from 'styled-components';
import { HeaderText1 } from './Text';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const ContainerDiv = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    /* margin-left: 30px; */
    /* justify-content: center;
    align-items: center; */
`
const ImgField = styled.img`
    width: 100px;
    height: 100px;
`
const Header2Text = styled(HeaderText1)`
    margin-left: 60px;
`

const Navbar1 = () => {
  return (
    <ContainerDiv>
        <FlexRowContainer justifyContent='space-between'
    alignItems="center">
        <Navbar >
        <Container fluid>
          <Navbar.Brand href="#home">
          <ImgField src={icon} alt="Icon" className="d-inline-block align-top"/>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Text>
                <FlexRowContainer ml='25px'  mt='-15px'>
                    <Link style={{textDecoration: 'none'}} to='/dashboard' >
                    <Header2Text>
                        Dashboard
                    </Header2Text>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to='/uploadScreen'>
                    <Header2Text>
                        Upload Question
                    </Header2Text>
                    </Link>
                </FlexRowContainer>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </FlexRowContainer>
    </ContainerDiv>
  )
}

export default Navbar1;