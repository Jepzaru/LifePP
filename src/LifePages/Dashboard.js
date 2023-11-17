import React, { useEffect, useState } from 'react';
import '../LifeCss/Dashboard.css';
import Sidenavbar from "../Life++/sidenavbar";
import HashLoader from 'react-spinners/HashLoader';
import Header from "../Life++/Header";
import { MdDashboard } from "react-icons/md";
import { FaClipboardCheck } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";


function Dash() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <div className="appind">
            {loading ?
            <div className='hash'>
                <HashLoader
                    size={100}
                    color={"#FF64B4"}
                    loading={loading}
                />
                </div>
                :
                <>
                    <Header />
                    <Sidenavbar />
                    <div className='dash'>
                        <h1> <MdDashboard style={{marginBottom:'-8px', color:'#FF64B4'}} /> Dashboard</h1>
                    </div>
                </>
            }
            <div className='phy-con'>
            <div className='phy'> <p>Physical Content</p></div>
           
            </div>
            <div className='ment-con'>
            <div className='men'><p>Mental Content</p></div>
            </div>
            <div className='recen-cha'>
                <h1>Recent Challenges</h1>
                <div className='recen-con'>
                    
                </div>
                <div className='calendar'>
                    <p><FaCalendarAlt style={{marginLeft:'30px', marginRight: '5px', marginBottom:'-2px'}}/> Calendar</p>
                </div>
                <div className='rec-com'>
                    <div className='recbg'>
                    <p><FaClipboardCheck style={{fontSize:'50px', marginLeft:'-30px', marginBottom:'-30px'}}/>
                    &nbsp;&nbsp;Compeleted &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Challenges</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dash;
