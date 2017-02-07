const React = require('react')

class YouTubeDebugger extends React.Component {
  constructor() {
    super()

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }

    this.setBitrate = this.setBitrate.bind(this)
    this.setResolution = this.setResolution.bind(this)
  }

  setBitrate() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      })
    })
  }

  setResolution() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.settings.video, {
          resolution: '720p'
        })
      })
    })
  }

  render(){
    return (
      <div>
        <button onClick={ this.setBitrate } className='bitrate'>{ this.state.settings.bitrate }</button>
        <button onClick={ this.setResolution } className='resolution'>{ this.state.settings.video.resolution }</button>
      </div>
    )
  }
}

module.exports = YouTubeDebugger
