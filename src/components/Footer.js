import React, { PureComponent } from 'react'
import styled from 'styled-components'

class Footer extends PureComponent {
    render() {
    const { data } = this.props
        return (
            <div>{data.allContentfulLink.edges.map(edge => (
                <a href={edge.node.url}>{edge.node.title}</a>
              ))}</div>
        )
    }
}

export default Footer