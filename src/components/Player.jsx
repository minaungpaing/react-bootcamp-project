import React from "react";
import logo from "../assets/d2.png";



function Player({ players }) {
  return (
    <div className="row">
      {players && players.map(player => (
        <div className="col-sm-3" key={player.id}>
          <div className="player-card">
            <center>
                
                {player.image_url != null ? (
                    <img className="img" src={player.image_url} width="100%" alt="Not Found" />
                  ) : (
                    <img className="img" src={logo} width="100%" alt="Not found" />
                  )}
            </center>
            <div className="card-footer d-flex justify-content-between">
                <img src={`https://www.countryflags.io/${player.nationality}/shiny/32.png`} alt={player.nationality}/> {player.name}
            </div>
          </div>
            <br/>
        </div>
      ))}
    </div>
  );
}

export default Player;
