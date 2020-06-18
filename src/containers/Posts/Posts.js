import React, { Component } from 'react';
import axios from '../../axios';
import {Link} from 'react-router-dom';
import Post from '../../components/Post/Post';
import {Route} from 'react-router-dom';
import './Posts.css'
import FullPost   from '../FullPost/FullPost'
class Posts extends Component{


        state = {
            posts: []

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

        
        render(){
    
        let posts = <p style={{textAlign:'center'}}> something went wrong</p>;
            if(!this.state.error){
                posts=this.state.posts.map(post => {
                    return (
                        //pairnei to id apo t post
                        // to key to vazw oso pio eksw mporw gia n mi vgalei error
                        <Link to={'/' + post.id } key={post.id}>
                            <Post                                 
                                title={post.title}
                                author={post.author}
                                clicked={() =>this.postSelectedHandler(post.id)}/>;
                            </Link> );
                });

        }        

        return(

            <div>
                <section className="Posts">
                    {posts}
                </section>
             {/* //to match mpainei giati an thelw na allaksw t url apo to post
                // na t pairnei dunamika
                //logo tou props, kai oti fortwnei afou fortwsei to Blog
                //erxetai dunamika t link 

                <Route path={this.props.match.url + '/:id'}" exact component={FullPost} />
 */}
                 <Route path="/:id" exact component={FullPost} />

            </div>

        );
    }
}

export default Posts;