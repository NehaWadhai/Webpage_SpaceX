import React from 'react';
import {listButtons} from '../constants/button'

//Recive function as a props to render the Filter section
export default function FilterTab (props){

    return  <div className="list-section">
            <div className="list-filter">Filters</div>
            <div style={{textAlign:"center"}}> Launch year </div>
            <hr className="divider"/>
                 <div className="list-button">
                 {listButtons.map(item=>{
                        return <div key={item.id}> <button 
                        className={(props.paramsvalue && props.paramsvalue.year == item.id) ? "highlight" : ""} 
                        id={item.id} onClick={props.handleClick}> 
                                    {item.name} </button>
                                </div>})}
                 </div>

        <div style={{textAlign:"center"}}>Successful Launch </div>
        <hr className="divider"/>
        <div className="list-button" >
            {['true', 'false'].map(item=>{
                return <div><button 
                className={(props.paramsvalue && props.paramsvalue.launch == item) ? "highlight" : ""}  
                id={item}  onClick={props.handleLaunch}>{item}</button> </div>
            })}
        </div>
        
        <div style={{textAlign:"center"}}>Successful Landing</div>
        <hr className="divider"/>
        <div className="list-button">
        {['true', 'false'].map(item=>{
                return <div><button 
                className={(props.paramsvalue && props.paramsvalue.land == item) ? "highlight" : ""} 
                id={item}  onClick={props.handleLand}>{item}</button> </div>
            })}
        </div>
        
        <div>
            <button id="filter" onClick={props.handleFilter} style={{marginLeft:"30%"}}> Clear Filters</button>
        </div>
       
        </div> 

}