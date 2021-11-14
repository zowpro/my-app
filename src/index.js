import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			CheckExistantOwner : "Before"
		};
	}
	componentDidMount() { console.log("Begin");
		const data = { Email: "chaiboussama92@gmail.com" };
		const headers = {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': 'Bearer my-token',
			'My-Custom-Header': 'foobar'
		}
		axios.post("http://localhost:8081/session", {data}, {headers})
		.then(res => { console.log("Yes ", res.data); })
		.catch(error => console.log("No ", error));
	}
	componentWillMount() {
		
		
	}
	SendMessage() { 
		//var EmptyField = { border : "2px ridge red" };
		var NoEmptyField = {};
		this.setState({ 
			NameStyle: NoEmptyField 
		}); 
		
		
	}

	render() {	
		return (<div className="form-contact">
					<h1>{this.state.CheckExistantOwner}</h1>
					
					<div className="form-field text-center">
						<button onClick={() => this.SendMessage} className="submit button">Envoyer</button>
					</div>
				</div>);	
	}
}

// ========================================

ReactDOM.render(
  <Contact />,
  document.getElementById('root')
);
