const React = require('react')

class DigitalClicker extends React.Component {
  constructor() {
      super()

      this.state = {
        timesClicked: 0
      }

      this.increment = this.increment.bind(this)
  }

  increment() {
    this.setState({
      timesClicked: (this.state.timesClicked + 1)
    })
  }

  render(){
    return (
      <div>
        <button onClick={ this.increment }>{ this.state.timesClicked }</button>
      </div>
    )
  }
}

module.exports = DigitalClicker
