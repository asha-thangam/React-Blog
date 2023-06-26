import "./singlePost.css"
import { useLocation ,} from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
export default function SinglePost() {
  const location=useLocation()
  const path=location.pathname.split("/")[2];
  useEffect(()=>{
    const getPost=async()=>{
      const res=await axios.get("/posts/"+path);
      console.log(res)
    };
    getPost()
  },[path])
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg" alt="" />
        <h1 className="singlePostTitle">
        Reference site about Lorem Ipsum, giving information
        <div className="singlePostEdit">
            <i class="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i class="singlePostIcon fa-solid fa-trash"></i>
        </div>
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">Author: <b>Safak</b></span>
            <span className="singlePostDate">1 hr ago</span>
        </div>
        <p>
            Lipsum generator: Lorem Ipsum - All the facts
            lipsum.com
            Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
            Ipsum Dolor Sit Amet
            How to create a blog website using React.js. Blog app React project from scratch for beginners. Design React blog app using functional React components and React Router Dom.
            How to create a blog website using React.js. Blog app React project from scratch for beginners. Design React blog app using functional React components and React Router Dom.
            How to create a blog website using React.js. Blog app React project from scratch for beginners. Design React blog app using functional React components and React Router Dom.
            How to create a blog website using React.js. Blog app React project from scratch for beginners. Design React blog app using functional React components and React Router Dom.
            How to create a blog website using React.js. Blog app React project from scratch for beginners. Design React blog app using functional React components and React Router Dom.
            How to create a blog website using React.js. Blog app React project from scratch for beginners. Design React blog app using functional React components and React Router Dom.
        </p>
      </div>
    </div>
  )
}
