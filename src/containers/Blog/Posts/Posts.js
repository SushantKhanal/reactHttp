import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component {

    state = {
        posts : [],
        selectedPostId : null,
    }

    componentDidMount() {
        console.log(this.props);
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
        //the following code is the replacement for <Link>
        // this.props.history.push({pathname: "/"+id});
        this.props.history.push("/"+id);
    }

    render() {
        const posts = this.state.posts.map(post=>
            // <Link to={'/'+ post.id} key={post.id} >
                <Post clicked={()=>this.postSelectHandler(post.id)}
                    title={post.title} 
                    author={post.author}
                />
            // </Link>
            )
        return (
            <section className="Posts">
                {posts}
            </section>
        )
    }
}

export default Posts;