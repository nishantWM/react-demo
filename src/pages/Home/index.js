import React, {Component} from 'react';

class Home extends Component{
    constructor(props){
        super(props);
        console.log("home rendered");

        this.state={
          items : []
        };
    }



    listFill = () => {
        let list=[];
        for (let i = 0; i < this.state.items.length; i++) {
            list.push(<li key={this.state.items[i]}><label>{this.state.items[i]}</label><button onClick={()=>{this.delete(i)}}>Delete</button></li>);
        }
        return list;
    };

    add = ()=>{
        let items=this.state.items;
        items.push(this.refs.input.value);
        this.setState({
            items:items
        });
    };

    delete = (index)=>{
         let items = this.state.items;
         items.splice(index,1);
         this.setState({
            items:items
         });
    };

    render(){
        return(
            <div className="container">
                <input className="input" ref="input" type="text"/><button onClick={()=>{this.add()}}>Add</button>
                <ul>
                    {this.listFill()}
                </ul>
            </div>
        );
    }

    componentWillUpdate(){

    }
    componentDidUpdate(){

    }
}

export default Home;