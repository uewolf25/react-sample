import React from 'react';
import logo from './logo.svg';
import './App.css';
import { setState } from 'expect/build/jestMatchersObject';

class App extends React.Component{
  constructor(props){
    super(props)
    this.ChangeMainpage = this.ChangeMainpage.bind(this)
    this.state = {mainpage: "Hello World"}
  }

  ChangeMainpage(ababa){
    this.setState({mainpage:ababa})
  }

  render(){
    return(
      <div>
        {this.state.mainpage}
        <Print func={this.ChangeMainpage} />
      </div>
    );
  }
}
function Print(props){
  function OnButtonClicked(){
    props.func("button clicked")
  }
    return(
      <div>
        <button onClick={OnButtonClicked} >
          button
        </button>
      </div>
    )
}

export default App;
