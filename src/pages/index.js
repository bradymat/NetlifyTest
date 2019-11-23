import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import staticdata from '../../staticdata.json'

import SEO from "../components/seo"
import Layout from "../components/layout"
import Wave from "../components/Wave"
import Card from "../components/Card"
import Section from "../components/Section"
import Cell from "../components/Cell"



const IndexPage = () => (
    <Layout>
    <SEO title="Home" />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>We Create <br/>Digital Experiences</h1>
        <p>That amplify Kiwi Business’ visibility across the digital Space.</p>
        <Link to="/page-2/">learn more</Link>
        <div className="Logos">
          <img src={require('../images/logo-sketch.png')} width="50px" />
          <img src={require('../images/logo-figma.png')} width="50px" />
          <img src={require('../images/logo-studio.png')} width="50px" />
          <img src={require('../images/logo-framer.png')} width="50px" />
          <img src={require('../images/logo-react.png')} width="50px" />
          <img src={require('../images/logo-swift.png')} width="50px" />

        </div>
        <Wave/>

      </div>
    </div>
    <div className="Cards">
      <h2>11 Courses, more coming</h2>
      <div className="CardGroup">
        <Card
          title="React for Designers"
          text="12 sections"
          image={require('../images/wallpaper.jpg')}
        />
        <Card
          title="React for Designers"
          text="12 sections"
          image={require('../images/wallpaper2.jpg')}
        />
        <Card
          title="React for Designers"
          text="12 sections"
          image={require('../images/wallpaper3.jpg')}
        />
        <Card
          title="React for Designers"
          text="12 sections"
          image={require('../images/wallpaper4.jpg')}
        />
      </div>
      </div>
      
      <Section
        image={require('../images/wallpaper2.jpg')}
        logo={require('../images/logo-react.png')}
        title={'React for Designers'}
        text={'Learn how to build a modern website React using the most efficient libraries.'}
      />
      <SectionCaption>12 sections, 6 hours</SectionCaption>
      <SectionGroup>
      {staticdata.cells.map(cell=> (
        <Cell
          title={cell.title}
          image={cell.image}
          />
      ))}
      </SectionGroup>
  </Layout>
)

const SectionCaption = styled.p`
  text-transform: uppercase;
  font-weight: 600px;
  font-sze: 18px;
  color: #94A4BA;
  text-align: center;
`

const SectionGroup = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grind-column-gap: 20px;

  @media(max-width:800px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 20px;
  }
`

export default IndexPage