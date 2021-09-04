import React from 'react'
import Sidebar from './dashbord/sidebar/sidebar'
import Topbar from './dashbord/topbar/tobbar'
import '../CSS/dashbord.css'
import Blocks from './dashbord/features/blocks'
import TinyBlock from './dashbord/features/tinyblocks'

export default function topbar() {

    return (

        <div>
            <Topbar/>
            <div className="container">
                <Sidebar/>
                <div className="bottomBar">
                       <Blocks/>
                 </div>
                 <div className="bbBar">
                       <TinyBlock/>
                 </div>

            </div>     

        </div>


    )
}

