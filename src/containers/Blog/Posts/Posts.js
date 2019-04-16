import React, { Component } from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component {

    state = {
        posts : [],
        selectedPostId : null,
    }

    componentDidMount() {
        axios.get("/posts")
            .then(response=>{
                const posts = response.data.slice(0,4);
                const updatedPost = posts.map(post=>{return{
                    ...post,
                    author : 'Max',
                }})
                this.setState({posts: updatedPost})
            })
    }

    postSelectHandler = (id) => {
        this.setState({selectedPostId: id})
    }

    render() {
        const posts = this.state.posts.map(post=>
            <Post clicked={()=>this.postSelectHandler(post.id)}
                key={post.id} 
                title={post.title} 
                author={post.author}
            />)
        return (
            <section className="Posts">
                {posts}
            </section>
        )
    }
}

export default Posts;