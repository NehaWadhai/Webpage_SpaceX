import React from 'react';


export default function ImageTab(props) {
  return (<div className="list-image" >
    {props.images.map(item => {
      return <div className="list-grid" key={item.flight_number}>
        <div className="image-card">
          <img alt="img" className="image" src={item.links.mission_patch_small} />
        </div>
        <div className="image-content">
          <div className="title">{item.mission_name} # {item.flight_number}</div>
          <div className="missionId">Mission Ids : <span style={{ textAlign: "center", fontWeight: "normal", color: "blue" }}> {item.mission_id.length > 0 ? `${item.mission_id}` : 'NA'} </span>
            <div style={{ fontWeight: "bold" }}>Launch Year : <span style={{ color: "blue", fontWeight: "normal" }}>{item.launch_year}  </span> </div>
            <div style={{ fontWeight: "bold" }}>Successful Launch : <span style={{ color: "blue", fontWeight: "normal" }}>{item.launch_success ? 'Yes' : 'No'}</span> </div>
            <div style={{ fontWeight: "bold" }}>Successful Landing : <span style={{ color: "blue", fontWeight: "normal" }}>
              {(item.rocket.first_stage.cores.map(ele => {
                return (ele.land_success ? 'Yes' : 'No')
              }))} </span> </div>
          </div>
        </div>
      </div>
    })}
  </div>

  )
}