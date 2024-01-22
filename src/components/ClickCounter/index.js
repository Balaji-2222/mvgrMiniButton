import {Component} from 'react'
import './index.css'
class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="text">
          <button className="button" type="button" onClick={this.onIncrement}>
            SUBSCRIBE
          </button>
        </div>
        <h1 className="heading">
          Subscribers:
          <span className="coding"> {count} </span>
        </h1>
      </div>
    )
  }
}

export default ClickCounter
