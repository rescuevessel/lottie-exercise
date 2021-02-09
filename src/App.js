import React from 'react'
import './App.css'
import lottie from 'lottie-web'

import hero01 from './lottie/MP_Hero_01_Build_v14.json'
import hero05 from './lottie/MP_Hero_05_Build_v7c.json'
import hero07 from './lottie/MP_Hero07_Build_v1.json'

class App extends React.Component {
	componentDidMount() {
		console.log('componentDidMount')

		//call the loadAnimation to start the animation
		lottie.loadAnimation({
			container: this.hero01obj, // the dom element that will contain the animation
			renderer: 'svg',
			loop: true,
			autoplay: true,
			animationData: hero01, // the path to the animation json
		})

		lottie.loadAnimation({
			container: this.hero05obj, // the dom element that will contain the animation
			renderer: 'svg',
			loop: true,
			autoplay: true,
			animationData: hero05, // the path to the animation json
		})
		lottie.loadAnimation({
			container: this.hero07obj, // the dom element that will contain the animation
			renderer: 'svg',
			loop: true,
			autoplay: true,
			animationData: hero07, // the path to the animation json
		})
	}

	render() {
		return (
			<div>
				<div className='anim'>
					<h2>Mixpanel / Hero 01 / Limitless Segmentation</h2>
					<div
						style={{ width: 600, margin: '0 auto' }}
						ref={ref => (this.hero01obj = ref)}></div>
				</div>

				<div className='anim'>
					<h2>Mixpanel / Hero 05 / Scalable Infrastructure</h2>
					<div
						style={{ width: 600, margin: '0 auto' }}
						ref={ref => (this.hero05obj = ref)}></div>
				</div>

				<div className='anim'>
					<h2>Mixpanel / Hero 07 / Group Analytics</h2>
					<div
						style={{ width: 600, margin: '0 auto' }}
						ref={ref => (this.hero07obj = ref)}></div>
				</div>
			</div>
		)
	}
}

export default App
