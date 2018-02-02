import React from 'react';


const Post = ({post}) => {
  
  return (
    <div className='post'>
      <p>{post.blog_name}</p>
      
      {/* if post is text */}
      {post.type === 'text' &&
        <div dangerouslySetInnerHTML={{__html: post.body}}></div>
      }
    </div>
  )
}

export default Post;