import React, { PureComponent } from 'react'
import Link from 'gatsby-link'
import './Header.css'

class Header extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', 
    this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if(scrollTop > 50) {
      this.setState({ hasScrolled:true })
    } else {
      this.setState({ hasScrolled:false})
    }
  }

  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScroll' : 'Header'}>
    <div className="HeaderGroup">
      <Link to="/"><button className="Logo">HASLEM MEDIA</button></Link>
      <Link to="/page-2">Services</Link>
      <Link to="/test-page">Pricing</Link>
      <Link to="/">Contact</Link>
      <Link to="/"><button>Get In Touch</button></Link>
    </div>
  </div>
  
    )
  }
}

export default Header
