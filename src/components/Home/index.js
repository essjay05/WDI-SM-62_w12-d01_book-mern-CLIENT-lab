import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    state = {
        books: []
    }

    componentDidMount() {
        axios.get('/api/books')
            .then(({ data: { books }}) => {
                this.setState({ books })
            })
    }

    render() {
        let { books } = this.state;
        debugger
        return (
            <div >
                <h1> HOME PAGE... list ALL books here</h1>
                <ul>
                    { books.map(({ _id, title }) =>{
                        return (
                            <li key={_id}><Link to={`books/${_id}`}>{ title }</Link> </li>
                        )
                    })
                }
                </ul>
            </div>    
        )
    }
}