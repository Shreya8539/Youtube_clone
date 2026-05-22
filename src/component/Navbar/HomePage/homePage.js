import React from 'react'
import './homePage.css'
import { Link } from 'react-router-dom';
const HomePage = ({ sideNavbar }) => {

  const options = ["All", "Cricket", "Music", "Live", "Cooking", "Games", "Dramas", "Mixes", "Foodies", "Haul ", " reels", "study", "kitchen", "stories", "movies", "Dinners", "Youtube", "Presentations", "Thrillers", "Animations", "poems", "3D videos", "toys", "contents"];

  return (
    <div className={sideNavbar ? 'homePage' : 'fullHomePage'}>
      <div className="homePage_options">
        {
          options.map((item, index) => {
            return (
              <div key={index} className="homePage_option">
                {item}
              </div>
            );
          })
        }


      </div>

      <div className={sideNavbar ? "home_mainPage" : "home_mainPageWithoutLink"}>

        <Link to={'/watch/9897'} className="youtube_video">

          <div className="youtube_thumbnailBox">
            <img src="https://wallpapercave.com/wp/wp15515592.jpg" alt="Thumbnail" className="youtube_thumbnailPic" />
            <div className="youtube_timingThumbnail">
              28.10
            </div>
          </div>


          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img src="https://wallpapercave.com/wp/wp15745738.webp" alt="profile" className="youtube_thumbnail_Profile" />
            </div>
            <div className="yutubeTitleBox_Title">
              <div className="youtube_videoTitle">K-pop</div>
              <div className="youtube_channelName">SONGS</div>
              <div className="youtubVideo_views">20.7M</div>
            </div>

          </div>

        </Link>

        <div className="youtube_video">

          <div className="youtube_thumbnailBox">
            <img src="https://wallpapercave.com/wp/wp16324635.webp" alt="Thumbnail" className="youtube_thumbnailPic" />
            <div className="youtube_timingThumbnail">
              15:25
            </div>
          </div>


          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img src="https://wallpapercave.com/wp/wp16324639.webp" alt="profile" className="youtube_thumbnail_Profile" />
            </div>
            <div className="yutubeTitleBox_Title">
              <div className="youtube_videoTitle">Water Adventure</div>
              <div className="youtube_channelName">DISCOVERY</div>
              <div className="youtubVideo_views">19.2M</div>
            </div>

          </div>

        </div>


        <div className="youtube_video">

          <div className="youtube_thumbnailBox">
            <img src="https://wallpapercave.com/wp/wp15474023.jpg" alt="Thumbnail" className="youtube_thumbnailPic" />
            <div className="youtube_timingThumbnail">
              56:05
            </div>
          </div>


          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img src="https://wallpapercave.com/wp/wp15474056.jpg" alt="profile" className="youtube_thumbnail_Profile" />
            </div>
            <div className="yutubeTitleBox_Title">
              <div className="youtube_videoTitle">Brad pitt</div>
              <div className="youtube_channelName">MOVIE</div>
              <div className="youtubVideo_views">111M</div>
            </div>

          </div>

        </div>

        <div className="youtube_video">

          <div className="youtube_thumbnailBox">
            <img src="https://wallpapercave.com/wp/wp16041620.jpg" alt="Thumbnail" className="youtube_thumbnailPic" />
            <div className="youtube_timingThumbnail">
              30:00
            </div>
          </div>


          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img src="https://wallpapercave.com/wp/wp9672711.jpg" alt="profile" className="youtube_thumbnail_Profile" />
            </div>
            <div className="yutubeTitleBox_Title">
              <div className="youtube_videoTitle">Stranger things</div>
              <div className="youtube_channelName">THRILLER</div>
              <div className="youtubVideo_views">90.9m</div>
            </div>

          </div>

        </div>

        <div className="youtube_video">

          <div className="youtube_thumbnailBox">
            <img src="https://wallpapercave.com/wp/wp2124540.jpg" alt="Thumbnail" className="youtube_thumbnailPic" />
            <div className="youtube_timingThumbnail">
              10:56
            </div>
          </div>


          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img src="https://wallpapercave.com/wp/wp2253864.jpg" alt="profile" className="youtube_thumbnail_Profile" />
            </div>
            <div className="yutubeTitleBox_Title">
              <div className="youtube_videoTitle">Burger king </div>
              <div className="youtube_channelName">FOODIE</div>
              <div className="youtubVideo_views">5.2k</div>
            </div>

          </div>

        </div>

        <div className="youtube_video">

          <div className="youtube_thumbnailBox">
            <img src="https://wallpapercave.com/wp/wp1812310.jpg" alt="Thumbnail" className="youtube_thumbnailPic" />
            <div className="youtube_timingThumbnail">
              20:22
            </div>
          </div>


          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img src="https://wallpapercave.com/wp/wp14818631.webp" alt="profile" className="youtube_thumbnail_Profile" />
            </div>
            <div className="yutubeTitleBox_Title">
              <div className="youtube_videoTitle">cell</div>
              <div className="youtube_channelName">BIOLOGY</div>
              <div className="youtubVideo_views">9k</div>
            </div>

          </div>

        </div>

        <div className="youtube_video">

          <div className="youtube_thumbnailBox">
            <img src="https://wallpapercave.com/wp/wp14824748.webp" alt="Thumbnail" className="youtube_thumbnailPic" />
            <div className="youtube_timingThumbnail">
              45:08
            </div>
          </div>


          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img src="https://wallpapercave.com/wp/wp14714059.webp" alt="profile" className="youtube_thumbnail_Profile" />
            </div>
            <div className="yutubeTitleBox_Title">
              <div className="youtube_videoTitle">Race</div>
              <div className="youtube_channelName">BMW</div>
              <div className="youtubVideo_views">131M</div>
            </div>

          </div>

        </div>

        <div className="youtube_video">

          <div className="youtube_thumbnailBox">
            <img src="https://wallpapercave.com/wp/wp8338704.jpg" alt="Thumbnail" className="youtube_thumbnailPic" />
            <div className="youtube_timingThumbnail">
              25:09
            </div>
          </div>


          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img src="https://wallpapercave.com/wp/wp8338670.jpg" alt="profile" className="youtube_thumbnail_Profile" />
            </div>
            <div className="yutubeTitleBox_Title">
              <div className="youtube_videoTitle">Shows</div>
              <div className="youtube_channelName">PRIME</div>
              <div className="youtubVideo_views">11k</div>
            </div>

          </div>

        </div>

        <div className="youtube_video">

          <div className="youtube_thumbnailBox">
            <img src="https://wallpapercave.com/wp/wp14073195.jpg" alt="Thumbnail" className="youtube_thumbnailPic" />
            <div className="youtube_timingThumbnail">
              10:03
            </div>
          </div>


          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img src="https://wallpapercave.com/wp/wp14831369.webp" alt="profile" className="youtube_thumbnail_Profile" />
            </div>
            <div className="yutubeTitleBox_Title">
              <div className="youtube_videoTitle">NBA</div>
              <div className="youtube_channelName">FOOTBALL</div>
              <div className="youtubVideo_views">50k</div>
            </div>

          </div>

        </div>
      </div>




    </div>
  )
}


export default HomePage


