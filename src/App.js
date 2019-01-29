import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import NewBook from'./components/NewBook';
import Book from './components/Book';
import NotFound from './components/NotFound';

export default class App extends Component {
    render () {
        return (
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/books/new" component={NewBook} />
                <Route path="/books/:id" component={Book} />
                <Route component={NotFound} />
            </Switch>
        </Layout>
        )
    }
}