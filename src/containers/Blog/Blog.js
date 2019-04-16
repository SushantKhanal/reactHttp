import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
// import axios from 'axios';
import Posts from './Posts/Posts';
import axios from '../../axios';
import Post from '../../components/Post/Post';
import NewPost from '../../containers/Blog/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    render () {

        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ol>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/new-post">New Post</Link></li>
                        </ol>
                    </nav>
                </header>
                {/* <Route path="/" exact render={()=><Posts/>}/> */}
                <Route path="/" exact component={Posts}/>

                {/* <Route path="/new-post" exact render={()=><NewPost/>}/> */}
                <Route path="/new-post" exact component={NewPost}/>

            </div>
        );
    }
}

export default Blog;