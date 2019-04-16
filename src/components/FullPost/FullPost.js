import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {

    state={
        loadedPost : {},
        error: false
    }

    componentDidUpdate () {
        if(!this.state.loadedPost.id || (this.state.loadedPost.id && this.state.loadedPost.id !== this.props.id))
        if(this.props.id) axios.get('/posts/' + this.props.id)
            .then(response => {
                this.setState({loadedPost:response.data});
            })
    }

    deletePostHandler = (id) => {
        axios.delete('/posts/' + this.props.id)
        .then(response => {
            console.log("this post was deleted, response:", response)
        }, error => {
            console.log("problem!!")
            this.setState({error: true})
        })
    }

    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if(this.state.error){post = <p style={{textAlign: 'center'}}>Something went wrong</p>} 
        else{
            if(this.props.id)  {
                post = <p style={{textAlign: 'center'}}>Loading...</p>;
            }
            if(this.state.loadedPost)
                post = (
                    <div className="FullPost">
                        <h1>{this.state.loadedPost.title}</h1>
                        <p>{this.state.loadedPost.body}</p>
                        <div className="Edit">
                            <button className="Delete" onClick={()=>this.deletePostHandler(this.state.loadedPost.id)}>Delete</button>
                        </div>
                    </div>

                );
        }        
                
        return post;
    }

}

export default FullPost;