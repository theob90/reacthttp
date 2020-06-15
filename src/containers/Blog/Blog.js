import React, { Component } from 'react';

import './Blog.css';
//import axios from 'axios';
//eiani t instance t katw
import axios from '../../axios';
import Posts from '../Posts/Posts'
import {Route, Link} from 'react-router-dom';
import NewPost from '../NewPost/NewPost';

class Blog extends Component {
   

    render () {


        return (
            <div  className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={{
                                pathname:'/new-post',
                                
                            }}>New post</Link></li>
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