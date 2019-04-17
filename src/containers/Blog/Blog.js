import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent/asyncComponent';
// import NewPost from '../../containers/Blog/NewPost/NewPost';
import './Blog.css';

const AsyncNewPost = asyncComponent(() => {  //now i am only importing NewPost when the constant 'asyncNewPost' gets used somewhere
    return import('../../containers/Blog/NewPost/NewPost');
})

class Blog extends Component {

    state = {
        auth : true,
    }

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
                    {/* {this.state.auth ? <Route path="/new-post" exact component={NewPost}/> : null} */}
                    {this.state.auth ? <Route path="/new-post" exact component={AsyncNewPost}/> : null}  {/*order is important here*/}
                    <Route path="/posts" component={Posts}/>
                    {/* <Redirect from="/" to="/posts"/> */}
                    <Route render={()=><h1 style={{textAlign: 'center'}}>Page Not Found</h1>} />
                </Switch>
                {/* <Route path="/" exact render={()=><Posts/>}/> */}
            </div>
        );
    }
}

export default Blog;