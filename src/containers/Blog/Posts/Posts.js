import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';
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
        this.props.history.push("/posts/"+id);
    }

    render() {
        const posts = this.state.posts.map(post=>
            // <Link to={'/posts/'+ post.id} key={post.id} >
                <Post clicked={()=>this.postSelectHandler(post.id)}
                    title={post.title} 
                    author={post.author}
                    key={post.id}
                />
            // </Link>
            )
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + "/:id"} exact component={FullPost}/> 
            </div>

        )
    }
}

export default Posts;