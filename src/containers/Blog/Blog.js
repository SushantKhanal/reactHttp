import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Posts from './Posts/Posts';
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
                                    to="/posts" 
                                    exact
                                    activeClassName="my-active"
                                    activeStyle={{
                                        color: "#fa923f",
                                        textDecoration: "underline"
                                    }}
                                >
                                Posts
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
                <Switch>
                    <Route path="/new-post" exact component={NewPost}/>  {/*order is important here*/}
                    <Route path="/posts" component={Posts}/>
                    <Redirect from="/" to="/posts"/>
                </Switch>
                {/* <Route path="/" exact render={()=><Posts/>}/> */}
            </div>
        );
    }
}

export default Blog;