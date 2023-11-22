import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const PostContainer = () => {
    const {posts,loading} = useContext(AppContext);

  return (
    <div>
        {loading ? 
        "loading" : 
        posts.map((post)=>{
           return <div className='post-div' key={post.id}>
                <p><b>{post.title}</b></p>
                <p>By {post.author} on {post.category}</p>
                <p>Posted on {post.date}</p>
                <p>{post.content}</p>
                <div className='tag-div'>
                    {post.tags.map((tag)=>{
                        return <span>{`#${tag}`}</span>
                    })}
                </div>
            </div>
        })
        }
    </div>
  )
}

export default PostContainer