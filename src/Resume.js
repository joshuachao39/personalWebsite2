import React, { Component } from 'react'
import ReactPDF from 'react-pdf'
import joshPDF from './josh_resume.pdf'
import history from './history'
import mug from './mug.svg'

var Resume = React.createClass({
	
	getInitialState() {
		return {width: 0, height: 0}
	},
	returnToDesktop() {
		history.push('/')
	},
	componentDidMount() {
  		this.updateDimensions();
  		window.addEventListener('resize', this.updateDimensions);
	},

	componentWillUnmount() {
  		window.removeEventListener('resize', this.updateDimensions);
	},

	updateDimensions() {
  		this.setState({ width: window.innerWidth, height: window.innerHeight });
	},
	render() {
		return (
			<div style={{display: "flex", 
						 flexFlow: "column nowrap", 
						 alignItems: "center",
						 justifyContent: "center",
						 width: "100%",
						 height: "100%",
						 fontFamily: "Lobster Two"}}>
				<div>
					<ReactPDF file={joshPDF} width={this.state.width * 0.35} style={{marginTop: 20}}/>
				</div>
				{/*buttons! */}
				<div style={{display: "flex",
			                 flexFlow: "row nowrap",
			                 justifyContent: "center"}}>
					<div style={{width: 300, 
								 height: 80, 
								 background: "#FF5A5E",
								 borderRadius: 75,
								 border: "4px dashed #fff",
								 boxShadow: "0 0 0 6px #FF5A5E, 2px 1px 6px 4px rgba(10, 10, 0, 0.5)",
								 margin: "50px 50px 0px 0px",
								 display: "flex",
								 alignItems: "center",
								 justifyContent: "center",
								 color: "white",
								 fontSize: 30}}
						  onClick={this.returnToDesktop}>
						Return to Desktop
					</div> 
					
					<a href={joshPDF} download="Josh Chao Resume" style={{textDecoration: "none"}}>
						<div style={{width: 300, 
							 height: 80, 
							 background: "#FF5A5E",
							 borderRadius: 75,
							 border: "4px dashed #fff",
							 boxShadow: "0 0 0 6px #FF5A5E, 2px 1px 6px 4px rgba(10, 10, 0, 0.5)",
							 margin: "50px 0px 0px 50px",
							 display: "flex",
							 alignItems: "center",
							 justifyContent: "center",
							 color: "white",
							 fontSize: 36}}>
							 	Download
						 </div>
					</a>
				</div>

				{/* background */}
				<div style={{width: this.state.width, height: this.state.height / 5, background: "#F4EAD5", zIndex: -1, position: "fixed", bottom: 0}}></div>
		    	<div style={{width: this.state.width, height: (this.state.height / 5) * 4, background: "#C6E5D9", zIndex: -1, position: "fixed", top: 0}}></div>

		    	<img src={mug} style={{position: "absolute", right: 0, bottom: 50, width: this.state.width * 0.2}}/>

		    </div>
		);
	}
})

export default Resume;