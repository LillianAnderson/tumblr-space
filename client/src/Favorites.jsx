import React from 'react';
import Post from './Post'

const Favorites = ({posts}) => {
  return (
    <div className='favorites'>
      FAVORITES
      {posts.map((post) => {
        return <Post post={post} key={post.id} />;
      })}
    </div>
  )
}

export default Favorites;