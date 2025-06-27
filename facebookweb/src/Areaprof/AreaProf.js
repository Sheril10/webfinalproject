import React from "react";
import '../Areamain/Areamain.css'; // CSS reuse

import {
  AiOutlineSearch,
  AiFillHome,
  AiOutlineWallet
} from 'react-icons/ai';
import {
  FaRegFlag,
  FaUsers,
  FaPlusCircle,
  FaFacebookMessenger,
  FaBell,
  FaUserFriends,
  FaFontAwesomeFlag,
  FaMedrt,
  FaAngleDown,
  FaSearch
} from 'react-icons/fa';
import {
  MdVideoCall,
  MdMoreHoriz,
  MdOndemandVideo
} from 'react-icons/md';

import { useNavigate } from 'react-router-dom';

function AreaProf() {
    const navigate = useNavigate();
    return (
            <div className="Homepage">
                       <div className="header">
                           <div className="header1">
                               <div
  className="homelogo"
  onClick={() => navigate("/Areamain")}
  style={{ cursor: "pointer" }}
>
  <img
    src="logo.png"
    alt="facebooklogo"
    style={{ height: "40px", padding: "1rem" }}
  />
</div>

                               <div className="Search">
                                   <AiOutlineSearch style={{height:"4rem"}}/>
                                   <input placeholder ="Facebook Search" type="Search"/>
                               </div>
                           </div>
                           <div className="header2">
                               <div className="Icon">
                                   <AiFillHome fontSize="1.6rem"/>
                               </div>
                               <div className="Icon">
                                   <FaRegFlag fontSize="1.6rem" />
                               </div>
                               <div className="Icon">
                                   <MdOndemandVideo fontSize="1.6rem"/>
                               </div>
                               <div className="Icon">
                                   <FaUsers fontSize="1.6rem" />
                               </div>
                               <div className="Icon">
                                   <AiOutlineWallet fontSize="1.6rem" />
                               </div>
                           </div>
                           <div className="header3">
                               <div className="add">
                                   <FaPlusCircle fontSize="1.6rem"/>
                               </div>
                               <div
  className="add"
  onClick={() => navigate("/messenger")}
  style={{ cursor: "pointer" }}
>
  <FaFacebookMessenger fontSize="1.6rem" />
</div>

                                <div className="add">
                                   <FaBell fontSize="1.6rem"/>
                               </div>
                               <div className="Add"
                               style={{ cursor: 'pointer' }}
                                   onClick={() => navigate("/profile")}>
                               <img src="1.jpg" alt="profiledp" style={{height:"40px"}}/>
                               </div>
                           </div>
                       </div>  

            <div className="Main">
                {/* Right Sidebar - Same as AreaMain */}
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

                {/* Middle Section - Profile Content */}
                <div className="Middle">
                    <div className="Post">
                        <div className="poster">
                            <img src="1.jpg" alt="profile" className="img1" />
                            <h2>Zeeshan</h2>
                        </div>
                        <div className="caption">Software Engineer | Tech Enthusiast | FCCU</div>
                        <div className="FacebookImg">
                            <img src="4.jpg" alt="cover" className="facebook-cover" />
                        </div>
                        <div className="Comment">
                            <div className="Like">Friends: 205</div>
                            <div className="Like">Followers: 500+</div>
                            <div className="Like">Joined: 2020</div>
                        </div>
                    </div>
                    <div className="Post">
                        <div className="caption">Recent Post: BYeeeee</div>
                        <div className="FacebookImg">
                            <img src="2.jpeg" alt="recent" className="facebook-cover" />
                        </div>
                    </div>
                </div>

                {/* Left Sidebar - Same as AreaMain */}
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
        </div>
    );
}

export default AreaProf;
