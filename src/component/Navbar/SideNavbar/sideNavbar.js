import React from 'react'
import './sideNavbar.css'
import HomeIcon from '@mui/icons-material/Home';
import VideocamIcon from '@mui/icons-material/Videocam';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import HistoryIcon from '@mui/icons-material/History';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ContentCutIcon from '@mui/icons-material/ContentCut';
const SideNavbar = ({sideNavbar}) => {
    return (
        <div className={sideNavbar?"home-sideNavbar":"homeSideNavbarHide"}>

            <div className="home_sideNavbarTop" >
                <div className={'home_sideNavbarTopOption'}>
                    <HomeIcon />
                    <div className="home_sideNavbarTopOptionTitle">Home</div>

                </div>

                <div className={'home_sideNavbarTopOption'}>
                    <VideocamIcon />
                    <div className="home_sideNavbarTopOptionTitle">Shorts</div>

                </div>

                <div className={'home_sideNavbarTopOption'}>
                    <SubscriptionsIcon />
                    <div className="home_sideNavbarTopOptionTitle">Subscription</div>

                </div>
            </div>

            <div className="home_sideNavbarMiddle">
                <div className={'home_sideNavbarTopOption'}>
                    <div className="home_sideNavbarTopOptionTitle">You</div>
                    <ChevronRightIcon />
                </div>

                <div className={'home_sideNavbarTopOption'}>
                    <RecentActorsIcon />
                    <div className="home_sideNavbarTopOptionTitle">Your Channel</div>

                </div>
                <div className={'home_sideNavbarTopOption'}>
                    <HistoryIcon />
                    <div className="home_sideNavbarTopOptionTitle">History</div>

                </div>

                <div className={'home_sideNavbarTopOption'}>
                    <PlaylistPlayIcon />
                    <div className="home_sideNavbarTopOptionTitle">Playlists</div>

                </div>

                <div className={'home_sideNavbarTopOption'}>
                    <OndemandVideoIcon />
                    <div className="home_sideNavbarTopOptionTitle">Your Videos</div>

                </div>

                <div className={'home_sideNavbarTopOption'}>
                    <WatchLaterIcon />
                    <div className="home_sideNavbarTopOptionTitle">WatchLater</div>

                </div>

                <div className={'home_sideNavbarTopOption'}>
                    <ThumbUpIcon />
                    <div className="home_sideNavbarTopOptionTitle">Liked Videos</div>

                </div>


                <div className={'home_sideNavbarTopOption'}>
                    <ContentCutIcon />
                    <div className="home_sideNavbarTopOptionTitle">Your Clips</div>

                </div>


            </div>
            <div className="home_sideNavbarMiddle">

    <div className="home_sideNavbarTopOption">
        <div className="home_sideNavbarTopOptionTitleHeader">
            Subscriptions
        </div>
    </div>

    <div className="home_sideNavbarTopOption">
        <img
            className='home_sideNavbar_ImgLogo'
            src='https://wallpapercave.com/wp/wp7940084.jpg'
            alt=""
        />
        <div className="home_sideNavbarTopOptionTitle">News</div>
    </div>

    <div className="home_sideNavbarTopOption">
        <img
            className='home_sideNavbar_ImgLogo'
            src='https://wallpapercave.com/wp/wp14109459.jpg'
            alt=""
        />
        <div className="home_sideNavbarTopOptionTitle">Naruto</div>
    </div>

    <div className="home_sideNavbarTopOption">
        <img
            className='home_sideNavbar_ImgLogo'
            src='https://wallpapercave.com/uwp/uwp4853852.jpeg'
            alt=""
        />
        <div className="home_sideNavbarTopOptionTitle">Android</div>
    </div>

    <div className="home_sideNavbarTopOption">
        <img
            className='home_sideNavbar_ImgLogo'
            src='https://wallpapercave.com/wp/wp11265349.jpg'
            alt=""
        />
        <div className="home_sideNavbarTopOptionTitle">
            Interior design
        </div>
    </div>

</div>

        </div>

    )
}

export default SideNavbar
