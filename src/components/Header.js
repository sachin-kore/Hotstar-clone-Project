import React from 'react'
import styled from 'styled-components';


export const Header = () => {
    return (
        <Nav>
            <Logo src='https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg' />
            <NavMenu>
                <a>
                    <img src='/images/home-icon.svg' />
                    <span>HOME</span>
                </a>
                <a>
                    <img src='/images/search-icon.svg' />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src='/images/watchlist-icon.svg' />
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src='/images/original-icon.svg' />
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src='/images/movie-icon.svg' />
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src='/images/series-icon.svg' />
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <UserImage src='/images/profile.jpg' />
        </Nav>

    )
}

const Nav = styled.div`
  height:70px;
  background-color:#090b13;
  display:flex;
  align-items:center;
  padding: 0px 35px;
  justify-content: space-between;
  overflow-x:hidden;
 
  
`
const Logo = styled.img`
  height:45px;
`
const NavMenu = styled.div`
  display:flex;

  a{
    display:flex;
    align-items:center;
    padding:0px 24px;
    cursor:pointer;

    img{
        height:24px;
        padding:0px 5px;
    }
    span{
        font-size:13px;
        letter-spacing:1.42px;
        position:relative;
        
        &:after{
            content:"";
            height:2px;
            background:white;
            position:absolute;
            left:0;
            right:0;
            bottom:-6px;
            opacity:0;
            transform-origin:left center;
            transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
            transform: scaleX(0);
    }
}
         &:hover{
            span:after{
                transform: scaleX(1);
                opacity:1;
            }
          
        }
  }
  
`;
const UserImage = styled.img`
    height:50px;
    width:50px;
    border-radius:50%;
`
