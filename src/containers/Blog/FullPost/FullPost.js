import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {

    state={
        loadedPost : {},
        error: false
    }

    componentDidMount () {
        this.fetchNewlyLoadedPostHandler()
    }

    componentDidUpdate () {
        this.fetchNewlyLoadedPostHandler()
    }

    fetchNewlyLoadedPostHandler = () => {
        if(!this.state.loadedPost.id || 
            (this.state.loadedPost.id 
                && this.state.loadedPost.id !== +this.props.match.params.id)) {
                    if(this.props.match.params.id) {
                        axios.get('/posts/' + this.props.match.params.id)
                            .then(response => {
                                this.setState({loadedPost:response.data});
                            })
                    }
                }
    }

    deletePostHandler = (id) => {
        axios.delete('/posts/' + this.props.match.params.id)
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
            if(this.props.match.params.id)  {
                post = <p style={{textAlign: 'center'}}>Loading...</p>;
            }
            if(this.state.loadedPost)
            if(this.props.match.params.id == this.state.loadedPost.id)
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