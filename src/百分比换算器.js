import React, { Component } from 'react';
class Input extends Component {
    handleOnChange(e) {
        console.log(e.target.value)
        if(this.props.numOnChange) {
            this.props.numOnChange(e.target.value)
        }
    }
    render () {
      return <input type='number' onChange={this.handleOnChange.bind(this)} />  
    }
  }
  
  class PercentageShower extends Component {
    render () {
      return (
        <div>
            {(this.props.number*100).toFixed(2)}%
        </div>
      )
    }
  }

  class PercentageApp extends Component {
    constructor() {
        super();
        this.state = {
            number:''
        }
    }
    handleOnChange(num) {
        this.setState({
            number:num
        })
    }
    render () {
      return (
        <div>
            <Input numOnChange = {this.handleOnChange.bind(this)}/>
            <PercentageShower number={this.state.number}/>
        </div>
      )
    }
  }
  export default PercentageApp
//一会试试这个，用来检验default的作用,.//////测验结果：只能有一个default
//   class PercentageApp2 extends Component {
//     render () {
//       return (
//         <div></div>
//       )
//     }
//   }
//   export default PercentageApp2
