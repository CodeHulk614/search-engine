import React from "react";
function Cards(props){
    return(
        <div className="card rounded-0">
          <img src={props.schoolImg} className="card-img-top rounded-0" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title m-0 mb-1">{props.schoolName}</h5>
            <p className="card-text m-0 mb-1">{props.aboutSchool}</p>
            <a href="test" class="btn btn-primary">Go somewhere</a>
          </div>
      </div>
    )
}
export default Cards