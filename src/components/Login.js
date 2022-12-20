import React from 'react'
import styled from 'styled-components'

export const Login = () => {
    return (
        <Container>
            <CTA>
                <CTALogoOne src='/images/cta-logo-one.svg' />
                <SignUp>GET ALL THERE</SignUp>
                <Description>
                    Dussehra is the most auspicious festival celebrated by Hindus across India.
                    This festival is also popularly known as Vijayadashami in some parts of the country.
                    According to Hindu mythology, it is believed that on this day Goddess Durga eliminated the demon,
                    Mahishasura from the earth.
                </Description>
                <CTALogoTwo src='/images/cta-logo-two.png' />
            </CTA>
        </Container>
    )
}

const Container = styled.div`
   position: relative;
   height: calc(100vh - 70px);
   display: flex;
   align-items: top;
   justify-content: center;
   
   &:before{
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    content:"";
    top:0;
    left:0;
    bottom:0;
    right:0;
    background-image: url("/images/login-background.jpg");
    z-index: -1;
   }
`
const CTA = styled.div`
 max-width: 650px;
 padding: 80px 40px;
 width: 90%;
 display:flex;
 flex-direction: column; 
 margin-top: 100px;
 align-items: center;

`
const CTALogoOne = styled.img`
`
const SignUp = styled.a`
   width: 100%;
   background-color: #0063e5;
   font-weight: bold;
   color: #f9f9f9;
   text-align: center;
   padding: 17px 0;
   font-size: 18px;
   cursor: pointer;
   transition: all 250ms;
   letter-spacing: 1.5px;
   margin-top: 8px;
   margin-bottom: 12px;
   border-radius: 5px;

   &:hover{
    background: #0483ee;
   }
`

const Description = styled.div`
   font-size: 11px;
   letter-spacing: 1.5px;
   text-align: center;
   text-height: 1.5;
   margin-bottom: 16px;
`

const CTALogoTwo = styled.img`
width: 90%;
`
