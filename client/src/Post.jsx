import React from 'react';


const Post = ({post}) => {
  
  return (
    <div className='post'>
      <p>{post.blog_name}</p>

      {/* if post is text */}
      {post.type === 'text' &&
        <div dangerouslySetInnerHTML={{__html: post.body}}></div>
      }

      {/* if post is photo */}
      {post.type === 'photo' &&
        <div>
          <div>
            {post.photos.map((photo) => {
              return <img src={photo.original_size.url} key={post.id}/>;
            })}
          </div>
          <div dangerouslySetInnerHTML={{__html: post.caption}}></div>
        </div>
      }

      {/* if post is quote */}
      {post.type === 'quote' &&
        <div dangerouslySetInnerHTML={{__html: post.text}}></div>
      }
    </div>
  )
}

export default Post;