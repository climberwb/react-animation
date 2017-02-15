import React from 'react';
import ReactDOM from 'react-dom';
import   { Motion,spring } from 'react-motion';
class HelloMessage extends React.Component {
   constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = {x1_initial: 0, x1_final:100, x2_initial:100, x2_final:0};
  }
  toggle(){
    const {x1_initial,x1_final,x2_initial, x2_final} = this.state;
    this.setState({
      x1_initial:x1_final,
      x1_final:x1_initial,
      x2_initial:x2_final,
      x2_final:x2_initial
      
    });
  }
  render(){
    const {x1_initial,x1_final,x2_initial, x2_final}= this.state;
    
    return (<Motion defaultStyle={{x1:x1_initial,x2:x2_initial}} style={{x1: spring(x1_final), x2: spring(x2_final)}}>
              {obj => {
                  const { x1, x2 } = obj
                  let x1_percent = x1+'%';
                  let x2_percent=x2+'%';
                  let redDiv = {
                  overflow: 'hidden',
	               whiteSpace:'nowrap',
	                display:'inline-block',
                  background:'red',
                  height: '500px',
                  width:x1_percent
                  }
                  let greenDiv = {
                  whiteSpace:'nowrap',
                      overflow: 'hidden',
                      height: '500px',
                      width: x2_percent,
                      display:'inline-block',
                      // position: 'absolute',
                      left: '200px',
                      background: 'green'
                  }
                  return (
                    <div onClick={this.toggle}>
                        <div style={redDiv}> sa1 sa2 sa3 sa4 sa5 sa6 sa7 sa8</div>
                        <div style={greenDiv}>blah1 blah2 blah3 blah4 blah5 blah6 blah7 blah8</div>
                    </div>
                )
              }}
            </Motion>
          )
  }
  }

// video
ReactDOM.render(<HelloMessage />,document.getElementById("my-demo"));

