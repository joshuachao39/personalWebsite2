import React, { Component } from 'react'
import Terminal from './Terminal/index'
import history from './history'

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

class Main extends Component {
	render() {
		return (
			<div style={{display: "flex", 
                   flexFlow: "row nowrap", 
                   alignItems: "center", 
                   justifyContent: "center", 
                   width: "100%", 
                   height: "100%",
                   backgroundColor: "black"}}>
		        <div style={{width: "50vw", 
		                     height: "50vh"}}>
		          <Terminal prefix="joshchao@ucsd.edu" history={bashHistory} extensions={extensions}/>
		        </div>
		    </div>
		);
	}
}

export default Main;