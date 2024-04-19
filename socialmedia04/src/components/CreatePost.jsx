import React, { useContext, useRef } from 'react'
import {PostList} from '../store/post-list-store';

const CreatePost =()=> {
const {addPost} =useContext(PostList)

  const userIdElement=useRef();
  const postTitleElement=useRef();
  const postBodyElement=useRef();
  const reactionsElement=useRef();
  const tagsElement=useRef();

  const handleSubmit=(event)=>{
   event.preventDefault();
   const userId = userIdElement.current.value;
   const postTitle=postTitleElement.current.vlaue;
   const postBody=postBodyElement.current.value;
   const reactions=reactionsElement.current.value;
   const tags=tagsElement.current.value.split(" ");
   
   userIdElement.current.value= "";
   postTitleElement.current.vlaue= "";
   postBodyElement.current.value= "";
   reactionsElement.current.value="";
   tagsElement.current.value= "";

   addPost(userId,postTitle,postBody,reactions,tags);
   
   
  }
  return (
    <div>
      <form className='createpost' onSubmit={handleSubmit}>
      <div className="mb-3">
    <label htmlFor="title" className="form-label">User id</label>
    <input type="text" ref={userIdElement} className="form-control" id="userId"  placeholder='Your user Id'/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Post Title</label>
    <input type="text" ref={postTitleElement} className="form-control" id="titlr" aria-describedby="emailHelp" placeholder='How are you feeling today?'/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="body" className="form-label">Post content</label>
    <input type="text"  rows="4" ref={postBodyElement} className="form-control" id="body"  placeholder='Tell us more about it?'/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="body" className="form-label">Reactions</label>
    <input type="text"  ref={reactionsElement} className="form-control" id="reactions"  placeholder='How many people reacted to this post?'/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="body" className="form-label">Tags</label>
    <input type="text" ref={tagsElement} className="form-control" id="tags"  placeholder='please enter tags using space'/>
    
  </div>
 
  
  <button type="submit" className="btn btn-primary">Post</button>
</form>
    </div>
  )
}

export default CreatePost
