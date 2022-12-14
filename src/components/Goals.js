import React from 'react';
import { connect } from 'react-redux';
import {
    handleAddGoal,
    handleRemoveGoal
} from "../actions/goals";
import List from "./List";

class Goals extends React.Component{
    addItem = (e) => {
        e.preventDefault();
        this.props.dispatch(handleAddGoal(this.input.value,
            ()=> this.input.value= ''
        ))
    }
    removeItem = (goal) => {
        this.props.dispatch(handleRemoveGoal(goal));
    }
    render() {
        return (
            <div>
                <h1>Goals List</h1>
                <input type='text' placeholder="Add Goals" ref={(input) => this.input = input}/>
                <button onClick={this.addItem}>Add Todo</button>
                <List items={this.props.goals} remove={this.removeItem}/>
            </div>
        );
    }
}

export default connect((state) => ({
    goals: state.goals
}))(Goals)