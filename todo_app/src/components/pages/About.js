import React from 'react'

// React fragments - using it with router
// When I don't need an element in the DOM.

function About() {
    return (
        <React.Fragment>
            <h1>About</h1>
            <p>This is just a Todo List App built with React JS</p>
        </React.Fragment>
    )
}

export default About;
