import { Link } from "react-router-dom";
import "./post.css";

// export default function Post({post}) {
//   return (
//     <div className="post">
//       {post.photo &&(
//               <img 
//               className="postImg" 
//               src={post.photo} 
//               alt=""
//               />
//       )
//       }
//       <div className="postInfo">
//         <div className="postCats">{
//           post.categories.map((c)=>(
//             <span className="postCat">{c.name}</span>
//           ))}
//         </div>
//         <Link to={`/post/${post._id}`} className="link">
//           <span className="postTitle">{post.title}</span>
//         </Link>
//         <hr />
//         <span className="postDate">{new Date(post.createdAt).toDateString}</span>
//       </div>
//       <p className="postDesc">
//         {post.desc}
//       </p>
//     </div>
    
//   );
// }

export default function Post(){
  return(
    <div className="post">
      <img 
        className="postImg"
        src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80"
        alt=""
      />
      <div className="postsInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <Link to ='/post/1' className="linkStyle">
        <span className="postTitle">Lorem Ipsum, sometimes referred to as 'lipsum'</span>
        </Link>
        <hr/>
        <span className="postDate">21 Nov 2022</span>
      </div>
      <div className="postDesc">
      In publishing and graphic design, Lorem ipsum is a placeholder text commonly 
      used to demonstrate the visual form of a document or a typeface without
       relying on meaningful content. Lorem ipsum may be used as a placeholder
        before final copy is available. It is also used to temporarily
         replace text in a process called greeking, which allows designers 
         to consider the form of a webpage or publication, without the meaning of the text influencing the design.
      Lorem ipsum is typically a corrupted version of De finibus 
      bonorum et malorum, a 1st-century BC text by the 
      Roman statesman and philosopher Cicero, with words 
      altered, added, and removed to make it nonsensical and improper 
      Latin. The first two words themselves are a truncation of 
      'dolorem ipsum' ('pain itself').
      </div>
    </div>
  )
}