import React from 'react';
import {listButtons} from '../constants/button'

//Recive function as a props to render the Filter section
export default function FilterTab (props){

    return <div className="list-section">
            <div className="list-filter">Filters</div>
            <div style={{textAlign:"center"}}> Launch year </div>
                 <div className="list-button">
                    {listButtons.map(item=>{
                        return <div  key={item.id}> <button id={item.id} onClick={props.handleClick}> 
                                    {item.name} </button>
                                </div>
                })}
                 </div>

        <div style={{textAlign:"center"}}>Successfull Launch </div>
        <div className="list-button" >
        <div><button id="true"  onClick={props.handleLaunch}>True</button> </div>
        <div><button id="false" onClick={props.handleLaunch}>False </button> </div>
        </div>
        
        <div style={{textAlign:"center"}}>Successfull Landing</div>
        <div className="list-button">
        <div> <button id="true"  onClick={props.handleLand}>True </button> </div>
        <div><button id="false" onClick={props.handleLand}>False </button> </div>
        </div>
        
        <div>
            <button id="filter" onClick={props.handleFilter} style={{marginLeft:"30%"}}> Clear Filters</button>
        </div>
       
        </div> 

}