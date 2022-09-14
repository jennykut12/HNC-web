import React from 'react';
import styled from 'styled-components';
import icon from '../assets/icon.png';
import { TransparentButton } from '../Components/Button';
import { Colors } from '../Theme/Variable';
import {Link} from 'react-router-dom';

const ContainerDiv = styled.div`
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const ImgField = styled.img`
    margin-top: 30px;
    width: 170px;
    height: 170px;
    margin-bottom: 20px;
`
const InputField = styled.input`
    width: 170px;
    height: 30px;
    border-radius: 10px;
    margin-bottom: 20px;
    border: 1px solid ${Colors.grey};
    padding:5px 20px;
`
const ButtonDiv = styled.div`
    margin-top: 40px;
`

const Login = () => {
  return (
    <ContainerDiv>
        <ImgField src={icon} alt="Icon" />
        <InputField placeholder='Username' />
        <InputField placeholder='Password' />
        <Link to='/dashboard' >
        <ButtonDiv>
            <TransparentButton text='Login'/> 
        </ButtonDiv>
        </Link>
    </ContainerDiv>
  )
}

export default Login