import React from 'react'
import './App.css'
import lottie from 'lottie-web'
import animationData from './lottie/test-03.json'
import animationData2 from './lottie/MP_Hero_05_Build_v6.json'

let animObj1 = null

let animObj2 = null

class App extends React.Component {
	componentDidMount() {
		console.log('componentDidMount')

		//call the loadAnimation to start the animation
		animObj1 = lottie.loadAnimation({
			container: this.animBox1, // the dom element that will contain the animation
			renderer: 'svg',
			loop: true,
			autoplay: true,
			animationData: animationData, // the path to the animation json
		})

		animObj2 = lottie.loadAnimation({
			container: this.animBox2, // the dom element that will contain the animation
			renderer: 'svg',
			loop: true,
			autoplay: true,
			animationData: animationData2, // the path to the animation json
		})
	}
	handleStop = () => {
		animObj1.stop()
	}
	handlePlay() {
		animObj1.play()
	}
	render() {
		return (
			<div>
				<div className='App'>
					<h2>Mixpanel - Hero 01</h2>
					{/* This is you wrapper where animation will load */}
					<div
						style={{ width: 400, margin: '0 auto' }}
						ref={ref => (this.animBox1 = ref)}></div>
					{/* <button onClick={this.handleStop}>Stop</button>
					<button onClick={this.handlePlay}>Play</button> */}
				</div>

				<div className='App'>
					<h2>Mixpanel - Hero 05</h2>
					{/* This is you wrapper where animation will load */}
					<div
						style={{ width: 600, margin: '0 auto' }}
						ref={ref => (this.animBox2 = ref)}></div>
					{/* <button onClick={this.handleStop}>Stop</button>
					<button onClick={this.handlePlay}>Play</button> */}
				</div>
			</div>
		)
	}
}

export default App
