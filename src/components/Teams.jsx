import React,{useState,useEffect} from 'react';
import axios from 'axios';

import TeamList from './TeamList'

import HashLoader from "react-spinners/HashLoader";


const accessToken = "UgckNpMpIjzgZdmv2EOhWWkGHNHI_XNx1jzMWgxh63UYuats-ec";
  const apiUrl = 'https://cors-anywhere.herokuapp.com/https://api.pandascore.co/dota2/tournaments/running';

  const authAxios = axios.create({
  baseURL:apiUrl,
  headers:{
    Authorization:`Bearer ${accessToken}`,
    'X-Requested-With':"",
  },
});

function Teams() {

    const [teams,setTeam] = useState([]);
    const [loading,setLoading] = useState(false);
    // const [requestError,setRequestError] = useState([]);

    useEffect(() => {
        getTeam()
    },[]);

    const getTeam = async() => {
        setLoading(true);
        const response = await authAxios.get(`${apiUrl}`);
        setTeam(response.data);
        setLoading(false);
        // console.log(response.data);
    }
    const tests = teams.filter(team => team.league.name === 'Epic League')
    
    // const results = tests.map( item => item.teams);

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
        <div>
            <div style={{height:"100px"}}></div>
            {tests.map( item => 
            <TeamList key={item.id} teams={item.teams} teamIds={item.id}/>    
                )}
        </div>
                )
        }
        </>
        
    )
}

export default Teams
