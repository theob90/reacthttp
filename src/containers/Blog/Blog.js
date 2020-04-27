import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
//import axios from 'axios';
//eiani t instance t katw
import axios from '../../axios';

class Blog extends Component {

    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    componentDidMount() {

        // me t then tha gine execute otan fortwsei t dedomena
        axios.get('/posts')
            .then(response => {

                //fernei 4 posts
                const posts = response.data.slice(0,4);

                // thelw n m guriizei arthara m author

                const updatedPosts = posts.map(post =>{
                    return{
                        ...post,
                        author:'Max'
                    }
                })
                this.setState({posts: updatedPosts});
                //console.log(response);
            })
            .catch(error =>{
                this.setState({error: true});
            });

    }

    postSelectedHandler = (id) =>{
        this.setState({selectedPostId: id});
    }

    render () {

        let posts = <p style={{textAlign:'center'}}> something went wrong</p>;
        if(!this.state.error){
            posts=this.state.posts.map(post => {
                return <Post key={post.id}
                             title={post.title}
                             author={post.author}
                             clicked={() =>this.postSelectedHandler(post.id)}/>;
            });

        }
         
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;