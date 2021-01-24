import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    min-height: 150px;
    background-color: #272834;
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    padding-right: 3%;
`;

const FooterEmail = styled.div`
    padding-left: 3%;
    flex: 4;
`;

const Email = styled.h3`
    color: #fff;
`;

const Footer = ({}) => {
    return <Container>
        <FooterEmail>
            <Email>contact@cindypark.ca</Email>
        </FooterEmail>
    </Container>
}

Footer.defaultProps = {

};

export default Footer;