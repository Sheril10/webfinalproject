import React from "react";
import './Areamain.css';
import { FaMedrt, FaFontAwesomeFlag, FaFacebookMessenger, FaAngleDown, FaUserFriends, FaSearch } from 'react-icons/fa';
import { MdVideoCall, MdMoreHoriz } from 'react-icons/md';
import { AiFillVideoCamera, AiFillLike, AiOutlineComment, AiOutlineShareAlt, AiFillPicture, AiFillSmile } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
function AreaMain() {
    return (
        <div className="Main">

            {/* Right Sidebar */}
            <div className="Right">
                <div className="Pfp">
                    <img src="1.jpg" alt="Profile" />
                    Zeeshan
                </div>
                <div className="Side"><FaUserFriends color="blue" fontSize="1.6rem" /><div>Friends</div></div>
                <div className="Side"><FaFontAwesomeFlag color="green" fontSize="1.6rem" /><div>Pages</div></div>
                <div className="Side"><FaMedrt color="green" fontSize="1.6rem" /><div>Covid 19 Info Center</div></div>
                <div className="Side"><FaFacebookMessenger color="green" fontSize="1.6rem" /><div>Messenger Kids</div></div>
                <div className="Side"><FaAngleDown color="green" fontSize="1.6rem" /><div>See More</div></div>

                <br />
                <div className="Shortcuts"><img src="3.jpeg" alt="Shortcut" />Potraits of FCCU </div>
                <div className="Shortcuts"><img src="4.jpg" alt="Shortcut" />Sheril's Shorcuts</div>
                <div className="Shortcuts"><img src="1.jpg" alt="Shortcut" />Best Quotations</div>
                <div className="Sidess"><FaAngleDown color="blue" fontSize="2rem" /><div>See More</div></div>
            </div>

            {/* Middle Content */}
            <div className="Middle">
                <div className="addStory">
                    {[
                        { img: "1.jpg", label: "Shail Bobby" },
                        { img: "2.jpeg", label: "Zeeshan haider" },
                        { img: "3.jpeg", label: "Nasir Ghulfam" },
                        { img: "4.jpg", label: "Baig Malik" },
                        { img: "4.jpg", label: "Picture Obsessed" }
                    ].map((story, index) => (
                        <div className="Story" key={index}>
                            <img src={story.img} alt={story.label} className="story-img" />
                            <div className="story-label">{story.label}</div>
                        </div>
                    ))}
                </div>

                <div className="Post">
                    <p className="Statement1">
                        <img src="1.jpg" alt="user" className="img1" />
                        What's on your mind, Zeeshan?
                    </p>
                    
                    <div className="Call">
                        <div className="icon">
                            <div className="video">
                            <div className="caption-option">
                                <AiFillVideoCamera fontSize="2rem" color="orange" />
                                <p>Live Video</p>
                            </div>
                            <div className="caption-option">
                                <AiFillPicture fontSize="2rem" color="green" />
                                <p>Photo/Video</p>
                            </div>
                            <div className="caption-option">
                                <AiFillSmile fontSize="2rem" color="red" />
                                <p>Feeling/Activity</p>
                            </div>
                            </div>
                        </div>
                        </div>


                    <div className="Posted">
                        <div className="poster">
                            <p className="Statement">
                                <img src="2.jpeg" alt="poster" className="img-small" />
                                Sheril Bobby
                            </p>
                            <p className="update">Updated her cover image.</p>
                        </div>

                        <div className="caption">Please Like, Comment and Subscribe to our YouTube Channel.</div>

                        <div className="FacebookImg">
                            <img src="4.jpg" alt="cover" className="facebook-cover" />
                        </div>

                        <div className="Comment">
                            <div className="Like"><AiFillLike /><span>Like</span></div>
                            <div className="Like"><AiOutlineComment /><span>Comment</span></div>
                            <div className="Like"><AiOutlineShareAlt color="grey" /><span>Share</span></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Left Sidebar */}
            <div className="Left">
                <div className="Aq"><div className="Contacts">Contacts</div></div>
                <div className="Comm">
                    <div className="icons"><MdVideoCall fontSize="1.8rem" /></div>
                    <div className="icons"><FaSearch fontSize="1.8rem" /></div>
                    <div className="icons"><MdMoreHoriz fontSize="1.8rem" /></div>
                </div>
                <div className="concise">
                    <div className="Pfp2"><img src="1.jpg" alt="pfp" />Ali Ibrahim</div>
                    <div className="Pfp2"><img src="4.jpg" alt="pfp" />Zeeshan</div>
                    <div className="Pfp2"><img src="1.jpg" alt="pfp" />Ali Sahotra</div>
                    <div className="Pfp2"><img src="4.jpg" alt="pfp" />Zeeshan Malik</div>
                </div>
            </div>
        </div>
    )
}

export default AreaMain;
