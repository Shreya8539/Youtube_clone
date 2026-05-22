import React from 'react'
import './profile.css';
import SideNavbar from '../../component/Navbar/SideNavbar/sideNavbar';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Link } from 'react-router-dom';

const Profile = ({ sideNavbar }) => {
  return (
    <div className='profile'>
      <SideNavbar sideNavbar={sideNavbar} />

      <div className="profile_page">

        <div className="profile_top_section">
          <div className="profile_top_section_profile">
            <img src="https://wallpapercave.com/wp/wp15315609.jpg" className="profile_top_section_img" />
          </div>
          <div className="profile_top_section_About">
            <div className="profile_top_section_About_Name">Lifestyle</div>
            <div className="profile_top_section_info">@user_xyz , 2 videos</div>
            <div className="profile_top_section_info">Just a girl sharing her lifestyle, memories, adventures & random fun moments 💫
              New videos, positive vibes, and relatable content every week.
              Hit subscribe and join the family ❤️</div>
          </div>

        </div>

        <div className="profile_videos">
          <div className="profile_videos_title">Videos &nbsp; <PlayArrowIcon /></div>

          <div className="profileVideos">

            {/*..................div for video..............*/}
            <Link to={'/watch/8998'} className="profileVideos_block">
              <div className="profileVideos_block_thumbnail">
                <img src="https://wallpapercave.com/wp/z8FPcZZ.jpg" className="profileVideos_block_thumbnail_img" />
              </div>

              <div className="profileVideos_block_detail">
                <div className="profileVideos_block_detail_name">Birthday vlog</div>
                <div className="profileVideos_block_detail_about">Created at 2024-03-09</div>
              </div>
            </Link>


            {/*..................div for video..............*/}
            <Link to={'/watch/8998'} className="profileVideos_block">
              <div className="profileVideos_block_thumbnail">
                <img src="https://wallpapercave.com/wp/wp1831998.jpg" className="profileVideos_block_thumbnail_img" />
              </div>

              <div className="profileVideos_block_detail">
                <div className="profileVideos_block_detail_name">Diwali dhmaal</div>
                <div className="profileVideos_block_detail_about">Created at 2024-11-11</div>
            </div>
          </Link>
        </div>

      </div>
    </div>
    </div >
  )
}

export default Profile
