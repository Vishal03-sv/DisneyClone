import React from 'react'
import styled from 'styled-components'

const Login = () => {
  return (
    <Container>
        <CTA>
            <CTALogoOne src="/Dimages/cta-logo-one.svg"/>
            <SignUp>GET ALL THERE</SignUp>
            <Description>
                Get premier access to raye and the last dragon for an additional fee with a Disney+ subscription. As of 31/26/23. The price of Disney+ and the Disney bundle will increase by $1.
            </Description>
            <CTALogoTwo src="/Dimages/cta-logo-two.png"/>
        </CTA>
    </Container>
  )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;
    

    &:before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0.7;
        z-index: -1;
        background-image: url("/Dimages/login-background.jpg");
        background-position: top;
        background-repeat: no-repeat;
        background-size: cover;
    }

`

const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-top: 70px;
    align-items: center;
    
`
const CTALogoOne = styled.img`

`

const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover{
        background-color: #0483ee;
    }
`

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;

`

const CTALogoTwo = styled.img`
    width: 90%;
`