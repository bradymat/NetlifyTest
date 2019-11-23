import React, { PureComponent } from 'react'
import styled from 'styled-components'

class Footer extends PureComponent {
    render() {
    const { data } = this.props
        return (
            <FooterGroup>
            <Button>Let's Chat!</Button>
            <LinkGroup>
                {data.allContentfulLink.edges.map(edge => (
                <a href={edge.node.url}>{edge.node.title}</a>
              ))}
            </LinkGroup>
            <Copyright>© {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby.</a> Feel free to call us and ask for help.</Copyright>
            </FooterGroup>
        )
    }
}

const FooterGroup = styled.div`
    width: 100%;
    display: grid;
    grid-gap: 20px;
    background-color: #F1F3F5;
    margin: 0 auto;
    padding: 50px;
`
const Button = styled.div`
    background: linear-gradient(155.99deg, #7B42F6 0%, #B01EFF 100%);
    box-shadow: 0px 10px 20px rgba(123, 66, 246, 0.15);
    border-radius: 30px;
    color: white;
    border: none;
    padding: 16px 60px;
    font-weight: 600;
    font-size: 24px;
    justify-self: center;

`

const LinkGroup = styled.div`
    width: 500px;
    margin: 50px auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
`

const Copyright = styled.div`
    color: #486791;
    width: 500px;
    margin: 0 auto;

`

export default Footer