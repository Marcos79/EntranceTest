
	import React from "react";
	import "./components/Container.css";
	import { Toolbar } from "@material-ui/core";
	import "./components/Buttons.css";
	
	export default class App extends React.Component {
	  state = {
		title: "This is the first title : "
	  };
	
	  onClickButton1 = () => {
		this.setState({
		  title: "This is the first title : 1"
		});
	  };
	
	  onClickButton2 = () => {
		this.setState({
		  title: "This is the first title : 2 "
		});
	  };
	  onClickButton3 = () => {
		this.setState({
		  title: "This is the first title : 3 "
		});
	  };
	  onClickButton4 = () => {
		this.setState({
		  title: "This is the first title : 4 "
		});
	  };
	  onClickButton5 = () => {
		this.setState({
		  title: "This is the first title : 5 "
		});
	  };
	  onClickButton6 = () => {
		this.setState({
		  title: "This is the first title : 6",
		
		});
	  };
	
	  render() {
		return (
		  <div>
			<h1>{this.state.title}</h1>
			<div>
			  <Toolbar className="container">
				<div>
				  <button className="button">
					<img src="./1.png" alt="error" onClick={this.onClickButton1} />
				  </button>
				  <button className="button">
					<img src="./2.png" alt="error" onClick={this.onClickButton2} />
				  </button>
				  <button className="button">
					<img src="./3.png" alt="error" onClick={this.onClickButton3} />
				  </button>
				  <button className="button">
					<img src="./4.png" alt="error" onClick={this.onClickButton4} />
				  </button>
				  <button className="button">
					<img src="./5.png" alt="error" onClick={this.onClickButton5} />
				  </button>
				  <button className="button">
					<img src="./6.png" alt="error" onClick={this.onClickButton6} />
				  </button>
				</div>
			  </Toolbar>
			</div>
		  </div>
		);
	  }
	};
	