import React, { Component } from 'react';
import Axios from 'axios';

export default class Home extends Component {
    state = {
        books: []
    }

    componentDidMount() {
        Axios.get('/api/books')
            .then(({ data: { books }}) => {
                this.setState({ books })
            })
    }

    render () {
        let { books } = this.setState
        debugger
        return (
            <div className="container">
            <h1> HOME PAGE... list ALL books here</h1>
            </div>
            
        )
    }
}