// import React from './topbar.css';
// import {Link} from "react-router-dom";

// export default function Topbar() {
//   const user=true;
//   return (
//     <div className="top">
//       <div className="topLeft">
//       <i className="topIcon fa-brands fa-square-facebook"></i>
//       <i className="topIcon fa-brands fa-square-twitter"></i>
//       <i className="topIcon fa-brands fa-square-pinterest"></i>
//       <i className="topIcon fa-brands fa-square-instagram"></i>
//       </div>
//       <div className="topCenter">
//         <ul className="topList">
//             <li className="topListItem">
//               <Link className="link" to="/">HOME</Link>
//             </li>
//             <li className="topListItem">
//               <Link className="link" to="/">ABOUT</Link>
//             </li>
//             <li className="topListItem">
//               <Link className="link" to="/">CONTACT</Link>
//             </li>
//             <li className="topListItem">
//               <Link className="link" to="/write">WRITE</Link>
//             </li>
//             <li className="topListItem">
//               {user && "LOGOUT"}
//             </li>
//         </ul>
//       </div>
//       <div className="topRight">
//         {
//           user ?(
//             <img 
//             className="topImg" 
//             src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=''/>
//           ):(
//             <ul className='topList'>
//               <li className='topListItem'>
//                 <Link className="link" to="/login">
//                   LOGIN
//                 </Link>
//               </li>
//               <li className='topListItem'>
//                 <Link className="link" to="/register">
//                   REGISTER
//                 </Link>
//               </li>
//             </ul>
//           )
//         }
        
//         <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
//       </div>
//     </div>
//   )
// }
import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {user && <li className="topListItem">LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
