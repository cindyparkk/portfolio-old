import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    min-height: 100px;
    background-color: #fff;
    box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    transition: 0.2s;
`;

const MenuLogo = styled.div`
    padding-left: 2%;    
    flex: 4;
`;

const Logo = styled.img`
    max-width: 60px;
    height: auto;
`;

const MenuItem = styled.h2`
    margin: 0px 3%;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Icon = styled.img`
    max-width: 20px;
    height: auto;
    padding: 5px 0px 0px 10px;
`;

const Expand = styled.div`
    // box-shadow: 0 5px 5px -5px #333,
    //             -5px 0 5px -5px #333, 
    //             5px 0 5px -5px #333;
`;

const Header = ({}) => {
    return <Container>
        <MenuLogo>
            <Logo src="/logo.svg" />
        </MenuLogo>
        <MenuItem>work<Icon src="/down.svg"/></MenuItem>
        <MenuItem>about</MenuItem>
        <MenuItem>contact</MenuItem>
    </Container>
}

Header.defaultProps = {

};

export default Header;