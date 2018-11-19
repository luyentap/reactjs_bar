
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { } from '../';
import { fecth_data_skill, set_data_skill } from '../action/action_creater';
import '../style.css';
import { Skill } from './skill';

export class GraphBar extends Component {
    render = () => {
        //mapStateToProps
        const { id,name, percent } = this.props;
        console.log(name);
        return (
            <div className="graph-bar">
                <div className="box">
                    <Skill height={percent} name={name}></Skill>
                    <Skill height="20%" name="css"></Skill>
                    <Skill height="10%" name="jquery"></Skill>
                </div>
            </div>
        );
    }
}

console.log("bar.jsx");
function mapStateToProps(skill) {// parameter:state
    console.log("mapState");
    return {
        id: skill.id,
        name:"2",
        percent: skill.percent
    };
}


function mapDispatchToProps(dispatch) {
    console.log("map dispatch");
    return {
        actions: bindActionCreators({set_data_skill,fecth_data_skill}, dispatch)
    };
}


export default 
connect(mapStateToProps, {mapDispatchToProps})(GraphBar);
