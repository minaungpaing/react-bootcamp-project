import React from "react";
import logo from "../assets/logo.png";
import {Link} from 'react-router-dom'

function TeamList({ teams,teamIds }) {
  return (
    <div className="container">
      <h4>
        <b>TEAM LIST</b>
      </h4>
      <div className="row">
        {teams.map((list) => (
          <div className="col-sm-4" key={list.id}>
            <Link to={`${process.env.PUBLIC_URL}/schedule/team/${list.id}`}>
              <div className="card">
                <center>
                  {list.image_url != null ? (
                    <img src={list.image_url} width="150px" alt="Not found" />
                  ) : (
                    <img src={logo} width="225px" alt="Not found" />
                  )}
                </center>
                <div className="card-footer">{list.name}</div>
              </div>
            </Link>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamList;
