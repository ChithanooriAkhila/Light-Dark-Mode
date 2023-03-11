// Write your code here
// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {mode: 'light'}

  modeChange = () => {
    this.setState(prevState => ({
      mode: prevState.mode === 'light' ? 'dark' : 'light',
    }))
  }

  render() {
    const {mode} = this.state
    return (
      <div className="bg-container">
        <div className={`${mode} mode-container`}>
          <h1>Click To Change Mode</h1>
          <button type="button" onClick={this.modeChange}>
            {mode === 'light' ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
