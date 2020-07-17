import React from 'react'
import './Card.css'
import pairs from '../pairs'

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      isHided: true,
      isEliminated: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isHided: !state.isHided
    }));
  }

  eliminate = () =>{
      this.setState({
        isEliminated: true
      });
  }

  render() {
    return (
      <div className={ this.state.isEliminated ? 'card disabled' : 'card'}>
        <div className='title'>
          {this.props.user}
        </div>
        <div className='content'>
          <button className="user-card" onClick={this.handleClick}>
            {/* {this.state.isHided ? '?' : this.props.word} */}
            {this.props.word}
          </button>
          <button className="eliminate" onClick={this.eliminate}>
            Eliminate
         </button>
        </div>
      </div>
    )
  }
}

export default Card