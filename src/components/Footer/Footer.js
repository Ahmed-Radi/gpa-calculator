import React from 'react'
import styled from 'styled-components';

function Footer() {
    return (
        <FooterContent>
            <a target='_blank' href="https://www.facebook.com/AhmedRadi20/" rel="noreferrer">Facebook</a>
            <a target='_blank' href="https://www.linkedin.com/in/eng-ahmedradi/" rel="noreferrer">LinkedIn</a>
            <a target='_blank' href="https://github.com/Ahmed-Radi" rel="noreferrer">GitHub</a>
        </FooterContent>
    )
}

export default Footer

const FooterContent = styled.footer`
    background: #000;
    color: #fff;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
        text-decoration: none;
        margin-right: 10px;
    }
`