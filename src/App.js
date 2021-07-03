import React, {useState} from 'react';
import './App.css';
import {Provider} from 'react-redux';
import {store} from "./redux/store";
import GithubSearchApp from "./components/GithubSearchApp";


let App = () => {

    return (
        <React.Fragment>
            {/* <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <div className="container">
                    <a href="" className="navbar-brand">React Github Search with REDUX</a>
                </div>
            </nav> */}

<nav class="navbar navbar-light fixed-top mb-6">
  <div class="container">
    <a class="navbar-brand" href="/">
      <img
      class= "logo"
        src="https://i.postimg.cc/XYj2G75N/logo.png"
        height ="20"
      />
    </a>
  </div>
</nav>

            <Provider store={store}>
                <GithubSearchApp/>
            </Provider>


            <div style={{marginBottom : '150px'}}/>
        </React.Fragment>
    );
};


export default App;
