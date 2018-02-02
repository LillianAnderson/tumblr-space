import React from 'react';
import axios from 'axios';

import Feed from './Feed'
import Favorites from './Favorites'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      blogName: '',
      tag: '',
      searchResults: [],
      favorites: [],
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleBlogNameChange = this.handleBlogNameChange.bind(this);
    this.handleTagChange = this.handleTagChange.bind(this);
    this.addFavorite = this.addFavorite.bind(this);
    this.removeFavorite = this.removeFavorite.bind(this);
  }

  handleClick() {
    console.log(this.state.blogName, this.state.tag)
    if (this.state.blogName && !this.state.tag) {
      axios.get(`https://api.tumblr.com/v2/blog/${this.state.blogName}.tumblr.com/posts?api_key=dP6BRq6BR5kaXS291fcY1GK7y2LDqN1A6FskMWLBCceYoyF5yu`)
        .then((response) => {
            const posts = response.data.response.posts.slice(0,10)
            this.setState({searchResults: posts})
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (this.state.blogName && this.state.tag) {
      axios.get(`https://api.tumblr.com/v2/blog/${this.state.blogName}.tumblr.com/posts?api_key=dP6BRq6BR5kaXS291fcY1GK7y2LDqN1A6FskMWLBCceYoyF5yu&tag=${this.state.tag}`)
        .then((response) => {
            const posts = response.data.response.posts.slice(0,10)
            this.setState({searchResults: posts})
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (!this.state.blogName && this.state.tag) {
      axios.get(`http://api.tumblr.com/v2/tagged?api_key=dP6BRq6BR5kaXS291fcY1GK7y2LDqN1A6FskMWLBCceYoyF5yu&tag=${this.state.tag}`)
        .then((response) => {
          const posts = response.data.response.slice(0, 10)
          this.setState({searchResults: posts})
        })
        .catch((error) => {
          console.log(error);
        });
    } 
  }

  handleBlogNameChange(e) {
    this.setState({blogName: e.target.value})
  }

  handleTagChange(e) {
    this.setState({tag: e.target.value})
  }

  addFavorite(post) {
    console.log(post)
  }

  removeFavorite(id) {

  }

  render() {
    return (
      <div className='search'>
          <form>
            <input id='blog_name' value={this.state.blogName} onChange={this.handleBlogNameChange}/>
            <input id='tag' value={this.state.tag} onChange={this.handleTagChange}/>
          </form>
          <button onClick={this.handleClick}>SEARCH</button>
          <div className='content'>
            <Feed posts={this.state.searchResults} addFavorite={this.addFavorite}/>
            <Favorites posts={this.state.favorites} removeFavorite={this.removeFavorite}/>
        </div>
      </div>
    )
  }
}

export default App;