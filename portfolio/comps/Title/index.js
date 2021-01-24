import React from 'react';
import styled, {keyframes} from 'styled-components';

const Container = styled.div`
    width: 100%;
    margin-top: 100px;
`;

const TextWrap = styled.span``;

const Line = styled.span``;

const typingAnimation = keyframes`
from { width: 0 }
to { width: 100% }
`

const cursorAnimation = keyframes`
from, to { border-color: transparent }
50% { border-color: #000; }
`

const Text = styled.h1`
    overflow: hidden; 
    border-right: .15em solid #000;
    margin: 0 auto;
    animation-name: ${typingAnimation}, ${cursorAnimation};
    animation-duration: 3.5s steps(40, end), .75s step-end infinite;
`;

const Title = ({}) => {

    return <Container>
        <Text>
            <TextWrap>
                Hi, I'm Cindy,<br/>I code and design.
            </TextWrap>
        </Text>
    </Container>
}

Title.defaultProps = {

};

export default Title;