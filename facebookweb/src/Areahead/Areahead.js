import React from "react";
import './Areahead.css';
import {AiFillHome, AiOutlineSearch, AiOutlineWallet} from 'react-icons/ai';
import {MdOndemandVideo} from 'react-icons/md';
import {FaRegFlag,FaPlusCircle,FaUsers, FaFacebookMessenger, FaBell} from 'react-icons/fa';
import AreaMain from "../Areamain/Areamain"
import { useNavigate } from "react-router-dom";
function Areahead() {
    const navigate = useNavigate();
    return(
        <div className="Homepage">
            <div className="header">
                <div className="header1">
                    <div className="homelogo">
                        <img src="logo.png" alt="facebooklogo" style={{height:"40px" ,padding:"1rem" }}/>
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
                    <img src="1.jpg" alt="profiledp" style={{height:"40px"}}/>
                    </div>
                </div>
            </div>  
            <AreaMain/> 
        </div>
    )

}
export default Areahead
