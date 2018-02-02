import React from 'react';

import Post from './Post'

const Feed = ({posts, addFavorite}) => {
  return (
    <div className='feed'>
      {posts.map((post) => {
        return <Post post={post} key={post.id} isFavorite={false} addFavorite={addFavorite}/>;
      })}
    </div>
  )
}

export default Feed;