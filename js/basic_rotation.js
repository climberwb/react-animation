import React from 'react';
import ReactDOM from 'react-dom';
import   { Motion,spring } from 'react-motion';
class HelloMessage extends React.Component {
  render(){
    return (<Motion defaultStyle={{x: 0,y:0,rot:0}} style={{x: spring(500),y:spring(200),rot:spring(360)}}>
              {val => {
           
                  let style = {
                      width: val.x,
                      height: val.y,
                      position: 'absolute',
                      top: val.x*0.25,
                      left: val.x*0.25,
                      border: '1px solid red',
                      transform: `rotate(${val.rot}deg)`
                  }
                  return <div style={style}>{val.x}</div>
              }}
            </Motion>
          )
  }
  }


ReactDOM.render(<HelloMessage name="John" />,document.getElementById("my-demo"));

