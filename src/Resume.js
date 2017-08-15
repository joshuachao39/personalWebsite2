import React, { Component } from 'react'
import ReactPDF from 'react-pdf'
import joshPDF from './josh_resume.pdf'
import history from './history'

var Resume = React.createClass({
	returnToDesktop: function() {
		history.push('/')
	},
	render: function() {
		return (
			<div style={{display: "flex", 
						 flexFlow: "column nowrap", 
						 alignItems: "center",
						 width: "100%", 
						 background: "#e5e5e5"}}>
				<ReactPDF file={joshPDF} width={800}/>
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
								 margin: "50px 50px 50px 0px",
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
							 margin: "50px 0px 50px 50px",
							 display: "flex",
							 alignItems: "center",
							 justifyContent: "center",
							 color: "white",
							 fontSize: 36}}>
							 	Download
						 </div>
					</a>
				</div>

		    </div>
		);
	}
})

export default Resume;