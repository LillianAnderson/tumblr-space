import React from 'react';
import Post from './Post'

const Favorites = ({posts, removeFavorite}) => {
  return (
    <div className='favorites'>
      FAVORITES
      {posts.map((post) => {
        return <Post post={post} key={post.id} isFavorite={true} removeFavorite={removeFavorite}/>;
      })}
    </div>
  )
}

export default Favorites;