import { Component } from "react";



export default class Count extends Component{

state = {Count:0}

Test=10;

 increment= () => {

    this.setState({Count:this.state.Count+1})
    console.log("render")

  }

  constructor(){

    super();
console.log("constructor")

  }

  componentDidMount(){
    console.log("componentDidMount")
  }

  componentDidUpdate(){
    console.log("componentDidUpdate")
  }

render(){


return <div>

<button className="btn btn-primary btn-xs " onClick={this.increment}>Click</button>

<div>Count = {this.state.Count}</div>

{console.log("render")}

</div>
}



}
