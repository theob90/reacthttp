import React, { Component } from 'react';

import './Blog.css';
//import axios from 'axios';
//eiani t instance t katw
import axios from '../../axios';
import Posts from '../Posts/Posts'
import {Route, NavLink, Switch} from 'react-router-dom';
import NewPost from '../NewPost/NewPost';

class Blog extends Component {
   

    render () {


        return (
            <div  className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                 to="/" 
                                 exact
                                 //activeclassname giana mi parei tis allges apo css
                                 activeClassName="my-active"
                                 //line styling 
                                 activeStyle={{
                                     color: '#fa923f',
                                     textDecoration: 'underline'
                                 }}>Home</NavLink></li>
                            <li><NavLink to={{
                                //gia relative path, t match t pairnouem apo
                                // to console,
                                pathname:  '/new-post',
                                
                            }}>New post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>}/> */}
               {/* // to switch tha kaneis render mono to prwto 
               //route pou tha vrei kai tha stamatisei */}
                <Switch>
                <Route path="/new-post"  component={NewPost} />
                <Route path="/"  component={Posts} />
                </Switch>
            </div>
        );
    }
}

export default Blog;