import React,{useState,useEffect} from 'react';
import axios from 'axios';

import TeamList from './TeamList'


const accessToken = "UgckNpMpIjzgZdmv2EOhWWkGHNHI_XNx1jzMWgxh63UYuats-ec";
  const apiUrl = 'https://api.pandascore.co/dota2/tournaments/running';

  const authAxios = axios.create({
  baseURL:apiUrl,
  headers:{
    Authorization:`Bearer ${accessToken}`,
  },
});

function Teams() {

    const [teams,setTeam] = useState([]);
    // const [requestError,setRequestError] = useState([]);

    useEffect(() => {
        getTeam()
    },[]);

    const getTeam = async() => {
        const response = await authAxios.get(`${apiUrl}`);
        setTeam(response.data);
        // console.log(response.data);
    }
    const tests = teams.filter(team => team.league.name === 'Epic League')
    
    // const results = tests.map( item => item.teams);

    return (
        <div>

            <div style={{height:"100px"}}></div>
            {tests.map( item => 
            <TeamList key={item.id} teams={item.teams} teamIds={item.id}/>    
                )}
        </div>
    )
}

export default Teams
