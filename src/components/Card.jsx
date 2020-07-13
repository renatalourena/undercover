import React from 'react'
import './Card.css'

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isHided: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isHided: !state.isHided
    }));
  }
 
  render() {
    return (
      <div className='card'>
        <buttom onClick={this.handleClick}>
          <div className='title'>{this.props.user}</div>
          <div className='content'>
            { this.state.isHided ? '?': this.props.word}
            {/* {this.props.word} */}
          </div>
        </buttom>
      </div>
    )
  }
}

export default Card