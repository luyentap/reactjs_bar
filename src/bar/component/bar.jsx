
import '../style.css';
import React, { Component } from 'react';
import { render } from 'react-dom';
import {Skill} from './skill';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {store_skill} from '../store/store_skill';
import {FETCH_SKILL,SET_SKILL}from '../action/action_type';
import {action_skill}from '../action/action_creater';


export class GraphBar extends Component{
  render=()=>{
    return(
      <div class="graph-bar">
        <div class="box">
            <Skill height="50%" name="store_skill.name"></Skill>
            <Skill height="20%" name="css"></Skill>
            <Skill height="10%" name="jquery"></Skill>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
        return {
            store_skill: state.FETCH_SKILL
        };
    }

    function mapDispatchToProps(dispatch) {
        return {
            actions: bindActionCreators(action_skill, dispatch)
        };
    }

    export default connect(mapStateToProps, mapDispatchToProps)(GraphBar);