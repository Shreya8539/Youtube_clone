import React,{useState} from 'react'
import './navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
const Navbar = ({setSideNavbarFunc,sideNavbar}) => {
    const [userPic,setUserPic] = useState("https://cdn-icons-png.flaticon.com/512/149/149071.png")
    const [navbarModal,setNavbarModal] = useState(false);

    const handleClickModal=()=>{
        setNavbarModal(prev=>!prev);
    }
    const sideNavbarFunc=()=>{
        setSideNavbarFunc(!sideNavbar)
    }
  return (
    <div className='navbar'>

       <div className="navbar-left">
        <div className="navbarhamberger" onClick={sideNavbarFunc}>
            <MenuIcon sx={{color:"white"}}/>
        </div>

        <Link to={'/'} className="navbar_youtubeImg">
            <YouTubeIcon sx={{fontSize:"34px"}} className='navbar_youtubeImage'/>
            <div className='navbar_utubeTitle'>YouTube</div>
        </Link>

       </div>

       <div className="navbar-middle">
         <div className="navbar_searchBox">
           <input type='text' placeholder='search' className='navbar_searchBoxInput'/> 
           <div className="navbar_searchIconBox"><SearchIcon sx={{fontSize:"28px",color:"white"}} /></div>
         </div>
         <div className="navbar_mike">
            <KeyboardVoiceIcon sx={{color:"white"}}/>
         </div>
        </div>
        <div className="navbar-right">
            <VideoCallIcon sx={{fontSize: "30px",cursor:"pointer",color:"white"}} />
            <NotificationsIcon sx={{fontSize: "30px",cursor:"pointer",color:"white"}} />
            <img onClick={handleClickModal} src={userPic} className='navbar-right-logo' alt='Logo' />

            { navbarModal &&
                <div className="navbar-modal">
                    <div className="navbar-modal-option">Profile</div>
                    <div className="navbar-modal-option">Logout</div>
                    <div className="navbar-modal-option">Login</div>
                </div>
            }
            
        </div>
    </div>
  )
}

export default Navbar


