import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Home from '../Home';

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
          email:'', password:''
        };
        console.log("Component created, initial state:",this.state);
    }

    clicked = ()=>{
        this.setState({
            email:this.refs.email.value, password:this.refs.password.value
        });
    };

    goHome = ()=>{
        console.log("Go home name:",this.state.email," pswd:",this.state.password);
        ReactDOM.render(<Home name={this.state.email} password={this.state.password} />, document.getElementById('root'));
    };

    render(){
        console.log("Rendered");
        return(
            <div className="main">
                <div className="container">
                    <h1>Login</h1>
                    <input className="input" type="text" ref="email" />
                    <input className="input" type="text" ref="password"/>
                    <button onClick={()=>{this.clicked()}}>Login</button>
                    <label className="input">{this.state.email}</label>
                    <label className="input">{this.state.password}</label>

                </div>
            </div>
        );
    }



    componentWillMount(){
        console.log("Component Will Mount");
    }

    componentDidMount(){
        console.log("Component mounted");
    }

    componentWillReceiveProps(nextProps){
        console.log("Will recieve :",nextProps);
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("Should update - next props:",nextProps," nextState:",nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState){
        console.log("Will update - next props:",nextProps," nextState:",nextState);
    }

    componentDidUpdate(prevProps, prevState){
        console.log("Did update - previous props:",prevProps," previous State:",prevState);
        this.goHome();
    }


}

export default Login;