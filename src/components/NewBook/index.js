import React, { Component } from 'react';
import axios from 'axios';

export default class NewBook extends Component {
    state = {
        title: "",
        author: "", 
        description: ""
    }

    handleChange = ({ target: { name, value }}) => { 
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        debugger
        e.preventDefault();
        axios.post('/api/books', this.state) 
            .then( res => {
                this.props.history.push(`/books/${res.data.newBook._id}`)
            })
    }
    render( ) {
        let { title, author, description } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={this.handleChange}
                    placeholder="Book Title" />
                <input
                    type="text"
                    name="author"
                    value={author}
                    onChange={this.handleChange}
                    placeholder="Author Name" />
                <input
                    type="text"
                    name="description"
                    value={description}
                    onChange={this.handleChange}
                    placeholder="Book Synopsis" />
                <input type="submit" value="Create" />
            </form>
        )
    }
 
 }