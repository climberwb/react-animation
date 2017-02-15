import React from 'react';
import ReactDOM from 'react-dom';
import   { Motion,spring } from 'react-motion';
class HelloMessage extends React.Component {
  render(){
    return (<Motion defaultStyle={{y:500,z:4}} style={{y: spring(100,{stiffness:100, damping:10}),z:spring(1)}}>
              {obj => {
                  const { y, z } = obj
                  let style = {
                     transform: `translate(100px, ${y}px) scale(${z})`,
                     background:'red',
                     height: y,
                     width:y
                  }
                  return <div style={style}></div>
              }}
            </Motion>
          )
  }
  }

// video
ReactDOM.render(<HelloMessage name="John" />,document.getElementById("my-demo"));

