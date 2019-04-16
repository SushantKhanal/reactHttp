import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Posts from './Posts/Posts';
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
                            <li><NavLink 
                                    to="/" 
                                    exact
                                    activeClassName="my-active"
                                    activeStyle={{
                                        color: "#fa923f",
                                        textDecoration: "underline"
                                    }}
                                >
                                Home
                                </NavLink>
                            </li>
                            {/* <li><NavLink to="/new-post">New Post</NavLink></li> */}
                            <li><NavLink to={{
                                pathname: "/new-post",
                                hash: "#submit",
                                search: "?quick-submit=true"
                            }}>New Post</NavLink></li>

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