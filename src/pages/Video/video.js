import React from 'react'
import './video.css';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { Link } from 'react-router-dom';
const Video = () => {
    return (
        <div className='video'>
            <div className="videoPostSection">
                <div className="video_youtube">
                    <iframe
                        className="video_youtube_video"
                        src="https://www.youtube.com/embed/yebNIHKAC4A"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="video_youtubeAbout">
                    <div className="video_uTubeTitle">{"K-POP"}</div>
                    <div className="youtube_video_ProfileBlock">
                        <div className="youtube_video_ProfileBlock_left">
                            <Link to={'/user/7868'} className="youtube_video_ProfileBlock_left_img">
                                <img className='youtube_video_ProfileBlock_left_image' src={"https://wallpapercave.com/wp/wp15745738.webp"} />
                            </Link>
                            <div className="youtubeVideo_subsView">
                                <div className="youtubePostProfileName">{"K-pop"}</div>
                                <div className="youtubePostProfileSubs">{"2025-01-07"}</div>

                            </div>
                            <div className="subscribeBtnYoutube">Subscribe</div>
                        </div>

                        <div className="youtube_video_likeBlock">
                            <div className="youtube_video_likeBlock_Like">
                                <ThumbUpOffAltIcon />
                                <div className="youtube_video_likeBlock_NoOfLikes">{ }7M</div>
                            </div>
                            <div className="youtubeVideoDivider"></div>
                            <div className="youtube_video_likeBlock_Like">
                                <ThumbDownOffAltIcon />

                            </div>




                        </div>

                    </div>

                    <div className="youtube_video_About">
                        <div>2025-02-07</div>
                        <div>song dedicated to all k-pop fan there...........</div>
                    </div>
                </div>

                <div className="youtubeCommentSection">
                    <div className="youtubeCommentSectionTitle">10 Comments</div>
                    <div className="youtubeSelfComment">

                        <img className='video_youtubeSelfCommentProfile' src="https://wallpapercave.com/wp/wp3544125.jpg" />
                        <div className="addAComment">
                            <input type='text' className='addACommentInput' placeholder='Add a comment' />
                            <div className="cancelSubmitComment">
                                <div className="cancelComment">Cancel</div>
                                <div className="cancelComment">Comment</div>

                            </div>


                        </div>
                    </div>
                    <div className="youtubeOthersComments">
                        <div className="youtubeSelfComment">
                            <img className='video_youtubeSelfCommentProfile' src="https://wallpapercave.com/wp/wp3544125.jpg" />
                            <div className="others_commentSection">
                                <div className="others_commentSectionHeader">
                                    <div className="channelName_comment">Me</div>
                                    <div className="commentTimingOthers">2026-01-02</div>
                                </div>
                                <div className="otherCommentSectionComment">
                                    Loving the music video..!
                                </div>

                            </div>

                        </div>

                        <div className="youtubeSelfComment">
                            <img className='video_youtubeSelfCommentProfile' src="https://wallpapercave.com/wp/wp15525355.jpg" />
                            <div className="others_commentSection">
                                <div className="others_commentSectionHeader">
                                    <div className="channelName_comment">Anna</div>
                                    <div className="commentTimingOthers">2026-06-02</div>
                                </div>
                                <div className="otherCommentSectionComment">
                                    Nice..!
                                </div>

                            </div>

                        </div>

                        <div className="youtubeSelfComment">
                            <img className='video_youtubeSelfCommentProfile' src="https://wallpapercave.com/wp/wp7664490.jpg" />
                            <div className="others_commentSection">
                                <div className="others_commentSectionHeader">
                                    <div className="channelName_comment">Gamer</div>
                                    <div className="commentTimingOthers">2026-05-08</div>
                                </div>
                                <div className="otherCommentSectionComment">
                                    woooww!!!!!
                                </div>

                            </div>

                        </div>


                    </div>


                </div>
            </div>

            <div className="videoSuggestions">

                <div className="videoSuggestionsBlock">
                    <div className="video_suggestion_thumbnail">
                        <img src="https://wallpapercave.com/wp/wp1955114.jpg" className="video_suggestion_thumbnail_img" />

                    </div>
                    <div className="video_suggestions_About">
                        <div className="video_suggestions_About_title">🍳 Cooking with love and a little extra spice!</div>
                        <div className="video_suggestions_About_Profile">kitchen chaos</div>
                        <div className="video_suggestions_About_Profile">136k views . 1 day ago</div>
                    </div>

                </div>

                <div className="videoSuggestionsBlock">
                    <div className="video_suggestion_thumbnail">
                        <img src="https://wallpapercave.com/wp/wp14828660.webp" className="video_suggestion_thumbnail_img" />

                    </div>
                    <div className="video_suggestions_About">
                        <div className="video_suggestions_About_title">Windows 10 tips, setup & daily workflow 🔥</div>
                        <div className="video_suggestions_About_Profile">Operating System</div>
                        <div className="video_suggestions_About_Profile">110k views . 2 days ago</div>
                    </div>

                </div>

                <div className="videoSuggestionsBlock">
                    <div className="video_suggestion_thumbnail">
                        <img src="https://wallpapercave.com/wp/wp2089464.jpg" className="video_suggestion_thumbnail_img" />

                    </div>
                    <div className="video_suggestions_About">
                        <div className="video_suggestions_About_title">Funny moments straight out of Oggy and the Cockroaches 🎥</div>
                        <div className="video_suggestions_About_Profile">oggy mood</div>
                        <div className="video_suggestions_About_Profile">11M views . 10 days ago</div>
                    </div>

                </div>

                <div className="videoSuggestionsBlock">
                    <div className="video_suggestion_thumbnail">
                        <img src="https://wallpapercave.com/wp/wp1852933.jpg" className="video_suggestion_thumbnail_img" />

                    </div>
                    <div className="video_suggestions_About">
                        <div className="video_suggestions_About_title">Smashing goals and living the badminton life one game at a time 🏸🔥</div>
                        <div className="video_suggestions_About_Profile">Sports</div>
                        <div className="video_suggestions_About_Profile">110M views . 1 day ago</div>
                    </div>

                </div>

                <div className="videoSuggestionsBlock">
                    <div className="video_suggestion_thumbnail">
                        <img src="https://wallpapercave.com/wp/wp2921813.jpg" className="video_suggestion_thumbnail_img" />

                    </div>
                    <div className="video_suggestions_About">
                        <div className="video_suggestions_About_title">Solving problems, one equation at a time ✏️➗</div>
                        <div className="video_suggestions_About_Profile">Mathematics</div>
                        <div className="video_suggestions_About_Profile">112k views . 15 day ago</div>
                    </div>

                </div>

                <div className="videoSuggestionsBlock">
                    <div className="video_suggestion_thumbnail">
                        <img src="https://wallpapercave.com/wp/mIZiMGA.jpg" className="video_suggestion_thumbnail_img" />

                    </div>
                    <div className="video_suggestions_About">
                        <div className="video_suggestions_About_title">Dominating the skies with speed and strength ✈️</div>
                        <div className="video_suggestions_About_Profile">Fighter Jet</div>
                        <div className="video_suggestions_About_Profile">166k views . 10 days ago</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Video
