import React, { Component } from 'react'
import Terminal from './Terminal/index'
import history from './history'

import mug from './mug.svg'
import Icon from './icon'

const bashHistory = [
    { value: 'Welcome to Josh Chao\'s personal website!' },
    { value: 'Please type `help` and then the \'Enter\' key to begin.' },
];

const extensions = {
	resume: {
        exec: ({ structure, bash_history, cwd }) => {
            history.push('/resume')
            return { structure, cwd, bash_history };
        },
    },
}

const structure = {
    src: {
        file1: { content: 'This is the text content for <file1> of <src>' },
        file2: { content: 'This is the text content for <file2> of <src>' },
        childDir1: {
            file: { content: 'This is the text content for <file> of <src/childDir1>' },
        },
        childDir2: {
        }
    },
    '.hiddenDir': {
    },
    '.hiddenFile': { content: 'This is a hidden file' },
    file: { content: 'This is the text content for <file> of the root directory' },
};



class Main extends Component {
	constructor(props) {
		super(props)
		this.state = { width: 0, height: 0 }
		this.updateDimensions = this.updateDimensions.bind(this)
	}
	componentDidMount() {
  		this.updateDimensions();
  		window.addEventListener('resize', this.updateDimensions);
	}

	componentWillUnmount() {
  		window.removeEventListener('resize', this.updateDimensions);
	}

	updateDimensions() {
  		this.setState({ width: window.innerWidth, height: window.innerHeight });
	}

	render() {
		return (
			<div style={{display: "flex", 
                   flexFlow: "column nowrap", 
                   alignItems: "center",
                   justifyContent: "center", 
                   width: "100%", 
                   height: "100%"}}>
		        {/* This is the screen */}
		        <div style={{width: this.state.width * 0.6, 
		                     height: this.state.height * 0.6,
		                     border: "40px solid #494949",
		                     borderRadius: "25px 25px 0px 0px",
		                     boxShadow: "0px -5px 26px 10px rgba(0, 0, 0, 0.1)",
		                     zIndex: 999}}>
		          <Terminal prefix="joshchao@ucsd.edu" history={bashHistory} extensions={extensions} structure={structure}/>
		        </div>

		    	{/* This is the bottom part of the screen */}
		    	<div style={{width: (this.state.width * 0.6) + 80, 
		    		         height: 150, 
		    		         background: "#F2F2F2",
		    		         borderRadius: "0px 0px 25px 25px",
		    		         display: "flex",
		    		         alignItems: "center",
		    		         position: "relative",
		    		         justifyContent: "center",
		    		         boxShadow: "0px 5px 26px 10px rgba(0, 0, 0, 0.1)"}}>
		    		<div style={{width: 40, height: 40, background: "#494949", borderRadius: "100px"}}></div>
		    		{/*Post it note*/}
		    		<div style={{width: (this.state.width * 0.15),
		    		             height: 225,
		    		             background: "#fff07f",
		    		             position: "absolute",
		    		             top: 50,
		    		             left: 30,
		    		             display: "flex",
		    		             flexFlow: "column wrap",
		    		             justifyContent: "center",
		    		             alignItems: "center"}}>
		    		    <p style={{margin: 0, fontFamily: "Just Another Hand", fontSize: 30, fontWeight: "bold", textDecoration: "underline", marginTop: 15}}> Help Commands </p>
		    		    <ul style={{listStyle: "none", margin: "5px 0px 0px 0px", columnCount: 2, fontFamily: "Just Another Hand", fontSize: 35, lineHeight: "110%", padding: 0}}>
		    		    	<li>clear</li>
		    		    	<li>about</li>
		    		    	<li>education</li>
		    		    	<li>skills</li>
		    		    	<li>projects</li>
		    		    	<li>contact</li>
		    		    	<li>resume</li>
		    		    </ul>
		    		</div>
		    	</div>



		    	{/* this is the stand */}
		    	<div style={{width: (this.state.width / 8), borderBottom: "100px solid #E1E1E1", borderLeft: "50px solid transparent", borderRight: "50px solid transparent", height: 0}}></div>
		    	<div style={{width: (this.state.width / 8) + 200, background: "#F2F2F2", height: 30, boxShadow: "0px 10px 26px 5px rgba(0, 0, 0, 0.2)"}}></div>


		    	{/*background sky and desk*/}
		    	<div style={{width: this.state.width, height: this.state.height / 5, background: "#F4EAD5", zIndex: -1, position: "fixed", bottom: 0}}></div>
		    	<div style={{width: this.state.width, height: (this.state.height / 5) * 4, background: "#C6E5D9", zIndex: -1, position: "fixed", top: 0}}></div>
		    	

		    	{/* This is the mug*/}
		    	{/*<div style={{width: this.state.width / 7, height: this.state.height / 4, background: "#FF5A5E", position: "absolute", right: 75, bottom: 50, borderRadius: "0px 0px 50px 50px"}}></div>*/}
		    	<img src={mug} style={{position: "absolute", right: 0, bottom: 50, width: this.state.width * 0.2}}/>
		    </div>
		);
	}
}

//{/* This is the desk */}

export default Main;