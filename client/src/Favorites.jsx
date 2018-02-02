import React from 'react';
import Post from './Post'

const Favorites = ({posts, removeFavorite}) => {
  return (
    <div className='favorites'>
      <h2>FAVORITES</h2>
      {posts.map((post) => {
        return <Post post={post} key={post.id} isFavorite={true} removeFavorite={removeFavorite}/>;
      })}
    </div>
  )
}

export default Favorites;