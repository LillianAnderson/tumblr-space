import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      blogName: '',
      tag: '',
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleBlogNameChange = this.handleBlogNameChange.bind(this);
    this.handleTagChange = this.handleTagChange.bind(this);
  }

  handleClick() {
    console.log(this.state.blogName, this.state.tag)
    if (this.state.blogName && !this.state.tag) {
      //do something
    } else if (this.state.blogName && this.state.tag) {
      //do something
    } else if (!this.state.blogName && this.state.tag) {
      //do something
    } 
  }

  handleBlogNameChange(e) {
    this.setState({blogName: e.target.value})
  }

  handleTagChange(e) {
    this.setState({tag: e.target.value})
  }

  render() {
    return (
      <div className='search'>
          <form>
            <input id='blog_name' value={this.state.blogName} onChange={this.handleBlogNameChange}/>
            <input id='tag' value={this.state.tag} onChange={this.handleTagChange}/>
          </form>
          <button onClick={this.handleClick}>SEARCH</button>
      </div>
    )
  }
}

export default App;