import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  subscribe = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getButtonText = () => {
    const {isSubscribed} = this.state
    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()
    return (
      <div className="welcome-container">
        <div className="welcome">
          <h1 className="invite">Welcome</h1>
        </div>
        <div className="Thanks">
          <p className="Thank">Thank you!Happy Learning</p>
        </div>
        <div className="buttons">
          <button onClick={this.subscribe}>{buttonText}</button>
        </div>
      </div>
    )
  }
}
export default Welcome
