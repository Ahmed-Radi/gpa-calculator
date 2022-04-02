import React from 'react'
import styled from 'styled-components';

function NotFound() {
    return (
        <Content>
            <h2>404 Page Not Found!</h2>
        </Content>
    )
}

export default NotFound

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: calc(100vh - (68px + 48px));
    h2 {
        font-family: 'Rubik Glitch', cursive;
        font-size: 40px;
        margin: 0;
    }
`