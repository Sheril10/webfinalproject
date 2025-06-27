import React from "react";
import { useParams, useLocation } from "react-router-dom";
import '../Areamain/Areamain.css'; 

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

const messages = [
  { name: "Sheril Bobby", text: "Hey", img: "2.jpeg" },
  { name: "Ali Mujtaba", text: "Just sent the notes!", img: "3.jpeg" },
  { name: "Rizwan", text: "Wanna catch up after class?", img: "1.jpg" },
  { name: "Nashit Rehan", text: "Assignment done, check?", img: "4.jpg" },
  { name: "Ayesha Tariq", text: "Haha that meme ", img: "2.jpeg" }
];

function ChatWindow() {
    const navigate = useNavigate();
      const { name } = useParams();
  const location = useLocation();
  const { state } = location;

  const message = state || {
    name,
    img: "1.jpg", // fallback image
    text: "Hey there!"
  };

    return (
            <div className="Homepage">
                       <div className="header">
                           <div className="header1">
                               <div className="homelogo">
                                   <img src="/logo.png" alt="facebooklogo" style={{height:"40px" ,padding:"1rem" }}/>
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
                                <div className="add">
                                   <FaFacebookMessenger fontSize="1.6rem"/>
                               </div>
                                <div className="add">
                                   <FaBell fontSize="1.6rem"/>
                               </div>
                               <div className="Add"
                               style={{ cursor: 'pointer' }}
                                   onClick={() => navigate("/profile")}>
                               <img src="/1.jpg" alt="profiledp" style={{height:"40px"}}/>
                               </div>
                           </div>
                       </div>  

            <div className="Main">
                {/* Right Sidebar - Same as AreaMain */}
                <div className="Right">
                    <div className="Pfp">
                        <img src="/1.jpg" alt="Profile" />
                        Zeeshan
                    </div>
                    <div className="Side"><FaUserFriends color="blue" fontSize="1.6rem" /><div>Friends</div></div>
                    <div className="Side"><FaFontAwesomeFlag color="green" fontSize="1.6rem" /><div>Pages</div></div>
                    <div className="Side"><FaMedrt color="green" fontSize="1.6rem" /><div>Covid 19 Info Center</div></div>
                    <div className="Side"><FaFacebookMessenger color="green" fontSize="1.6rem" /><div>Messenger Kids</div></div>
                    <div className="Side"><FaAngleDown color="green" fontSize="1.6rem" /><div>See More</div></div>

                    <br />
                    <div className="Shortcuts"><img src="/3.jpeg" alt="Shortcut" />Potraits of FCCU </div>
                    <div className="Shortcuts"><img src="/4.jpg" alt="Shortcut" />Sheril's Shorcuts</div>
                    <div className="Shortcuts"><img src="/1.jpg" alt="Shortcut" />Best Quotations</div>
                    <div className="Sidess"><FaAngleDown color="blue" fontSize="2rem" /><div>See More</div></div>
                </div>
<div className="Middle">
      <div style={{
        display: "flex",
        alignItems: "center",
        padding: "1rem",
        borderBottom: "1px solid lightgray",
        backgroundColor: "#f0f2f5"
      }}>
        <img
  src={`/${message.img}`}  
  alt={message.name}
  style={{
    height: "50px",
    width: "50px",
    borderRadius: "50%",
    objectFit: "cover",
    marginRight: "1rem"
  }}
/>

        <div>
          <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>{message.name}</div>
          <div style={{ color: "gray", fontSize: "0.9rem" }}>Active now</div>
        </div>
      </div>

      <div style={{ padding: "1rem" }}>
        <div style={{
          backgroundColor: "#e4e6eb",
          borderRadius: "1rem",
          padding: "1rem",
          marginBottom: "1rem",
          display: "inline-block"
        }}>
          {message.text}
        </div>
      </div>

      <div style={{
        position: "absolute",
        bottom: "1rem",
        left: "22%",
        width: "50%",
        display: "flex",
        justifyContent: "center"
      }}>
        <input
          type="text"
          placeholder={`Reply to ${message.name}`}
          style={{
            width: "100%",
            padding: "1rem",
            borderRadius: "1.5rem",
            border: "1px solid lightgray",
            fontSize: "1rem"
          }}
        />
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
                        <div className="Pfp2"><img src="/1.jpg" alt="pfp" />Ali Ibrahim</div>
                        <div className="Pfp2"><img src="/4.jpg" alt="pfp" />Zeeshan</div>
                        <div className="Pfp2"><img src="/1.jpg" alt="pfp" />Ali Sahotra</div>
                        <div className="Pfp2"><img src="/4.jpg" alt="pfp" />Zeeshan Malik</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatWindow;
