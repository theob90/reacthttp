import React, { Component } from 'react';

import './Blog.css';
//import axios from 'axios';
//eiani t instance t katw
import axios from '../../axios';
import Posts from '../Posts/Posts'
import {Route} from 'react-router-dom';
import NewPost from '../NewPost/NewPost';

class Blog extends Component {
   

    render () {


        return (
            <div  className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New post</a></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>}/> */}
                <Route path="/" exact component={Posts} />
                <Route path="/new-post"  component={NewPost} />

            </div>
        );
    }
}

export default Blog;