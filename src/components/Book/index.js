import React, { Component } from 'react';
import axios from 'axios';

export default class Book extends Component {
    state = {
        title: "", 
        author: "",
        description: "",
        loading: true
    }

    componentDidMount() {
       
        let { id } = this.props.match.params;
        axios.get(`/api/books/${id}`)
            .then(({ data }) => {
                this.setState({ book: data.book, loading: false })
            })

    }

    handleSubmit = (e) => {
        e.preventDefault();
        let { id } = this.props.match.params;   
        debugger
        axios.delete(`/api/books/${id}`)
       
            .then( res => {
                debugger
                this.props.history.push(`/`)
            })
    }

    render () {
        debugger
        let { book, loading } = this.state
        if (loading) return <div></div>
        return (
            <div>
                <h1> { book.title } </h1>
                <h3> { book.author } </h3>
                <p> { book.description } </p>
                <form onSubmit={this.handleSubmit}>
                    <input type="submit" value="Delete"/>
                </form>
            </div>
        )
    }

}