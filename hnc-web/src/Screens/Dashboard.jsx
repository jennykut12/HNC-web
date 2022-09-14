import React from 'react';
import { TransparentButton } from '../Components/Button';
import { HeaderText1 } from '../Components/Text';
import { FlexColumnContainer, FlexRowContainer } from '../Containers';
import styled from 'styled-components';
import { Colors } from '../Theme/Variable';
import Navbar1 from '../Components/Navbar1';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';

const ContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    /* margin-left: 30px; */
    /* justify-content: center;
    align-items: center; */
`
const BoxDiv = styled.div`
    /* margin:0 5px; */
    display: flex;
    flex-direction: row;
    border: 1px solid ${Colors.grey};
    /* margin-left: 30px; */
    justify-content: space-evenly;
    align-items: center;
    border-radius: 5px;
`
const Div = styled.div`
    /* margin:0 20px; */
    display: flex;
    flex-direction: row;
    /* margin-left: 30px; */
    justify-content: space-evenly;
    align-items: center;
    border-radius: 5px;
    text-align: start;
`
const Header1text = styled(HeaderText1)`
    margin-left:38px;
`
const Headertext = styled(HeaderText1)`
    margin-left:-12px;
`

const Dashboard = () => {
  return (
    <Container>
        <Navbar1/>
        <ContainerDiv>
            <Row>
                    <Col sm={12} md={6} lg={6}>
                    <HeaderText1>This weeks submission</HeaderText1>
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                        <Link style={{textDecoration: 'none'}} to='/uploadScreen'>
                            <TransparentButton width="140px" text='Upload Question'/>
                        </Link>
                    </Col>
            </Row>
            <FlexRowContainer mt='20px' justifyContent='flex-start' >
                <FlexColumnContainer justifyContent='flex-start'>
                    <HeaderText1>Question</HeaderText1>
                    <HeaderText1 color={Colors.grey}>How many years does a president in nigeria  rule</HeaderText1>
                </FlexColumnContainer>
                <FlexColumnContainer ml='100px' justifyContent='flex-start'>
                    <HeaderText1>Answer</HeaderText1>
                    <HeaderText1 color={Colors.green}>4years</HeaderText1>
                </FlexColumnContainer>
            </FlexRowContainer>
            <BoxDiv>
                <HeaderText1 color={Colors.grey}>Name</HeaderText1>
                <Header1text color={Colors.grey}>Phone</Header1text>
                <Header1text color={Colors.grey}>Address</Header1text>
                <HeaderText1 color={Colors.grey}>Attempt Status</HeaderText1>
            </BoxDiv>
            <Div>
                <Headertext color={Colors.grey}>Prince</Headertext>
                <HeaderText1 color={Colors.grey}>08130900849</HeaderText1>
                <HeaderText1 color={Colors.grey}>Amala hey</HeaderText1>
                <HeaderText1 color={Colors.green}>Correct</HeaderText1>
            </Div>
        </ContainerDiv>
    </Container>
  )
}

export default Dashboard