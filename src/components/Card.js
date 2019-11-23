import React, { PureComponent } from 'react'
import './Card.css'


class Card extends PureComponent {
    render() {
    const { image, title, text} = this.props
        return (
            <div className="Card">
        <img src={image}/>
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
        )
    }
}

export default Card