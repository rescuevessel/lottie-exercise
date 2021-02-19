import React from 'react'
import './App.css'
import lottie from 'lottie-web'

import hero01 from './lottie/MP_Hero_01_Build_v14.json'
import hero02 from './lottie/MP_Hero_02_Eye_v7.json'
import hero03 from './lottie/MP_Hero_03_IR_v4.json'
import hero04 from './lottie/MP_Hero_04_DM_v4.json'
import hero05 from './lottie/MP_Hero_05_Build_v7c.json'
import hero06 from './lottie/MP_Hero_06_TD_v2.json'
import hero07 from './lottie/MP_Hero_07_GA_v1.json'
import hero08 from './lottie/MP_Hero_08_DI_v1.json'

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
			container: this.hero02obj, // the dom element that will contain the animation
			renderer: 'svg',
			loop: true,
			autoplay: true,
			animationData: hero02, // the path to the animation json
		})
		lottie.loadAnimation({
			container: this.hero03obj, // the dom element that will contain the animation
			renderer: 'svg',
			loop: true,
			autoplay: true,
			animationData: hero03, // the path to the animation json
		})
		lottie.loadAnimation({
			container: this.hero04obj, // the dom element that will contain the animation
			renderer: 'svg',
			loop: true,
			autoplay: true,
			animationData: hero04, // the path to the animation json
		})
		lottie.loadAnimation({
			container: this.hero05obj, // the dom element that will contain the animation
			renderer: 'svg',
			loop: true,
			autoplay: true,
			animationData: hero05, // the path to the animation json
		})
		lottie.loadAnimation({
			container: this.hero06obj, // the dom element that will contain the animation
			renderer: 'svg',
			loop: true,
			autoplay: true,
			animationData: hero06, // the path to the animation json
		})
		lottie.loadAnimation({
			container: this.hero07obj, // the dom element that will contain the animation
			renderer: 'svg',
			loop: true,
			autoplay: true,
			animationData: hero07, // the path to the animation json
		})
		lottie.loadAnimation({
			container: this.hero08obj, // the dom element that will contain the animation
			renderer: 'svg',
			loop: true,
			autoplay: true,
			animationData: hero08, // the path to the animation json
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
					<h2>Mixpanel / Hero 02 / Privacy & Security</h2>
					<div
						style={{ width: 600, margin: '0 auto' }}
						ref={ref => (this.hero02obj = ref)}></div>
				</div>
				<div className='anim'>
					<h2>Mixpanel / Hero 03 / Interactive Reports</h2>
					<div
						style={{ width: 600, margin: '0 auto' }}
						ref={ref => (this.hero03obj = ref)}></div>
				</div>
				<div className='anim'>
					<h2>Mixpanel / Hero 04 / Data Management</h2>
					<div
						style={{ width: 600, margin: '0 auto' }}
						ref={ref => (this.hero04obj = ref)}></div>
				</div>

				<div className='anim'>
					<h2>Mixpanel / Hero 05 / Scalable Infrastructure</h2>
					<div
						style={{ width: 600, margin: '0 auto' }}
						ref={ref => (this.hero05obj = ref)}></div>
				</div>
				<div className='anim'>
					<h2>Mixpanel / Hero 06 / Team Dashboards & Alerts</h2>
					<div
						style={{ width: 600, margin: '0 auto' }}
						ref={ref => (this.hero06obj = ref)}></div>
				</div>

				<div className='anim'>
					<h2>Mixpanel / Hero 07 / Group Analytics</h2>
					<div
						style={{ width: 600, margin: '0 auto' }}
						ref={ref => (this.hero07obj = ref)}></div>
				</div>
				<div className='anim'>
					<h2>Mixpanel / Hero 08 / Data Integration</h2>
					<div
						style={{ width: 600, margin: '0 auto' }}
						ref={ref => (this.hero08obj = ref)}></div>
				</div>
			</div>
		)
	}
}

export default App
