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

      {/* if post is link */}
      {post.type === 'link' &&
        <a src={post.url}>
          {post.photos &&
            <img src={post.photos[0].original_size.url}/>
          }
        
          <div dangerouslySetInnerHTML={{__html: post.source}}></div>
          <div dangerouslySetInnerHTML={{__html: post.title}}></div>
          <div dangerouslySetInnerHTML={{__html: post.description}}></div>
        </a>
      }

      {/* if post is chat */}
      {post.type === 'chat' &&
        <div>
          <div>
            {post.dialogue.map((message) => {
              return <p>{`${message.label} ${message.phrase}`}</p>
            })}
          </div>
          <div dangerouslySetInnerHTML={{__html: post.body}}></div>
        </div>
      }

      {/* if post is audio */}
      {post.type === 'audio' &&
        <div>
          <div dangerouslySetInnerHTML={{__html: post.embed}}></div>
          <div dangerouslySetInnerHTML={{__html: post.caption}}></div>
        </div>
      }
    </div>
  )
}

export default Post;