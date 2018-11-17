import React, { Component } from 'react';

export class Skill extends Component{
  render=()=>{
  const style = {
    height: this.props.height,
    color:'red',
  };

  return(
  <div className="skill">
      <div className="graph">
        <div className="percent" style={style} >
          {this.props.height}
        </div>
      </div>
      <div className="name">
          {this.props.name}
      </div>
    </div>
  );
  }
}