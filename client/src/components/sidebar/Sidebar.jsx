import './sidebar.css'
import logo from "./dev-insights.png"
// https://www.logomaker.net/logo-maker/dashboard
export default function Sidebar() {
  return (
    <div className="sidebar">
     <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT US</span>
        <img src={logo}/>
        <p>
         Welcome to DevInsights!<br/>
         &emsp; DevInsights, we believe in empowering developers and tech enthusiasts to share their insights, knowledge, and experiences with the world. We provide a platform for individuals to express their unique perspectives, discoveries, and innovative ideas in the vast realm of technology.
         <br />
         &emsp;Start your DevInsights journey today and let your voice be heard!
        </p>
     </div>
     <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sports</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Cinema</li>
        </ul>
     </div>
     <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-square-facebook"></i>
            <i className="sidebarIcon fa-brands fa-square-twitter"></i>
            <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
            <i className="sidebarIcon fa-brands fa-square-instagram"></i>
     </div>
     </div>
    </div>
  )
}
