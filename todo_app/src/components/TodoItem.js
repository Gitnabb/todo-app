import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    render() {
        return (
            <div style={itemStyle}>
                <p>{this.props.todo.title}</p>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

//
const itemStyle = {
    backgroundColor: '#f3f3f3'
}

export default TodoItem
