import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

// console.log('react component    ', React.Component);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

  }
// console.log('this ', this);
  search (term) {
    console.log(`${term} was searched`);
    //POST REQUEST
    $.ajax({
      method: "GET",
      url: "http://localhost:1128"
    })
    // TODO
  }

  return (
    <div>
      <h1>Github Fetcher</h1>
      <RepoList repos={repos}/>
      <Search onSearch={search}/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
