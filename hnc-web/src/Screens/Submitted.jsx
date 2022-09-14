import React from 'react';
import Navbar1 from '../Components/Navbar1';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';
import { HeaderText4 } from '../Components/Text';
import { FlexColumnContainer } from '../Containers';
import { TransparentButton } from '../Components/Button';

const Submitted = () => {
  return (
    <div>
        <Navbar1/>
        <Container>
            <FlexColumnContainer mt='130px' justifyContent='center' align='center'>
                <HeaderText4>Your question has being submitted</HeaderText4>
            </FlexColumnContainer>
            <FlexColumnContainer mt='50px' justifyContent='center' align='center'>
            <Link style={{textDecoration: 'none'}} to='/dashboard' >
                <TransparentButton text='Continue'/>
            </Link>
            </FlexColumnContainer>
        </Container>
    </div>
  )
}

export default Submitted