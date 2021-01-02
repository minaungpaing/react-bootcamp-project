import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "../assets/d2.png";
import Player from './Player'

import HashLoader from "react-spinners/HashLoader";


function SingleTeam({ match }) {
  const accessToken = "UgckNpMpIjzgZdmv2EOhWWkGHNHI_XNx1jzMWgxh63UYuats-ec";

  const apiUrl = `https://cors-anywhere.herokuapp.com/https://api.pandascore.co/teams/${match.params.id}`;

  const authAxios = axios.create({
    baseURL: apiUrl,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'X-Requested-With':"",
    },
  });

  const [teams, setTeam] = useState([]);
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    getTeam();
  }, []);

  const getTeam = async () => {
    setLoading(true);
    const response = await authAxios.get(`${apiUrl}`);
    setTeam(response.data);
    setLoading(false);
  };

  return (

    <>
       {
        loading ? (
            <div className="loading">
            <div className="loading-icon">
                <HashLoader size={50} color={'#dc143c'} loading={loading}/>
                <span className="ml-2">Loading...</span>
            </div>
            </div>
        ):(
      <div className="container">
      <div style={{ height: "100px" }}></div>
      <div className="team-header d-flex justify-content-between mb-3">
        <div className="team-name">
          <span>{teams.name}</span> <br />{" "}
          <div className="nation">
          <i className="fas fa-globe-americas"></i> Location : {teams.location != null ? <img src={`https://www.countryflags.io/${teams.location}/shiny/32.png`} alt={teams.location}/> : "Null"}
          </div>
        </div>
        <div className="team-logo">
          {teams.image_url != null ? (
            <img src={teams.image_url} width="100%" alt="Not Found" />
          ) : (
            <img src={logo} width="100%" alt="Not found" />
          )}
        </div>
      </div>
      <Player players={teams.players}/>
      <div className="my-5">
        <h5><b><font color="crimson">ABOUT</font></b></h5><br/>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
        <br/><br/>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
    </div>
    )}
    </>
    
  );
}

export default SingleTeam;
