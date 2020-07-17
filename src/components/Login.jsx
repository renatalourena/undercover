import React from "react";
import './Login.css'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: '',
      player2: '',
      player3: '',
      player4: '',
    };
  }

  addParticipants = () => {
    //TODO
  }

  render() {
    return (
      <div >
        <div className="login">
          <div>Players:</div>
          <div><input value={this.state.player1} type="text" readOnly/></div>
          <div><input value={this.state.player2} type="text" readOnly /></div>
          <div><input value={this.state.player3} type="text" readOnly /></div>
          <div><input value={this.state.player4} type="text" readOnly /></div>
          <div>
            <button className="join-button" onClick={this.addParticipants}>
              Join!
          </button>
          </div>
        </div>

      </div>
    );
  }
}
export default Login;