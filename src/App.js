import React from 'react'
import './App.css'
import lottie from 'lottie-web'
import animationData from './lottie/MP_Hero_05_Build_v7c.json'
import animationData2 from './lottie/MP_Hero_01_Build_v10.json'
import animationData3 from './lottie/MP_Hero_01_Build_v10_half.json'

let animObj1 = null

let animObj2 = null

let animObj3 = null

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
		animObj3 = lottie.loadAnimation({
			container: this.animBox3, // the dom element that will contain the animation
			renderer: 'svg',
			loop: true,
			autoplay: true,
			animationData: animationData3, // the path to the animation json
		})
	}
	handleStop = () => {
		animObj1.stop()
	}
	handlePlay() {
		animObj2.play()
	}
	handleContinue() {
		animObj3.play()
	}
	render() {
		return (
			<div>
				<div className='anim'>
					<h2>Mixpanel / Hero 01 / Limitless Segmentation</h2>
					<div
						style={{ width: 600, margin: '0 auto' }}
						ref={ref => (this.animBox2 = ref)}></div>
					{/* <button onClick={this.handleStop}>Stop</button>
					<button onClick={this.handlePlay}>Play</button> */}
				</div>
				<div className='anim'>
					<h2>Mixpanel / Hero 05 / Scalable Infrastructure</h2>
					<div
						style={{ width: 600, margin: '0 auto' }}
						ref={ref => (this.animBox1 = ref)}></div>
					{/* <button onClick={this.handleStop}>Stop</button>
					<button onClick={this.handlePlay}>Play</button> */}
				</div>
			</div>
		)
	}
}

export default App
