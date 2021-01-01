import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import banner from "../assets/banner.png";
import bg from '../assets/dt2bg.jpg';
import t1 from '../assets/teams/navi.png';
import t2 from '../assets/teams/liquid.png';
import t3 from '../assets/teams/alliance.png';
import t4 from '../assets/teams/secret.png';
import t5 from '../assets/teams/nigma.png';
import t6 from '../assets/new3.jpg';
import t7 from '../assets/new2.png';

const accessToken = "UgckNpMpIjzgZdmv2EOhWWkGHNHI_XNx1jzMWgxh63UYuats-ec";
const apiUrl = "https://api.pandascore.co/dota2/tournaments/running";

const authAxios = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

export default function Matches() {
  const [items, setMatches] = useState([]);
  // const [requestError,setRequestError] = useState([]);

  useEffect(() => {
    getMatches();
  }, []);

  const getMatches = async () => {
    const response = await authAxios.get(`${apiUrl}`);
    setMatches(response.data);
  };
  console.log(items);
  // const tests= items.filter(item => item.league.name === 'Epic League' )

  return (
    <div className="banner">
      <div style={{ height: "100px" }}></div>
      <div className="container">
        <div className="main-banner">
          <img src={banner} alt="home-banner" />
        </div>

        <div className="main-col">
          <div className="left-col">
            {items.map((test) => (
              <div
                className="event mb-3"
                key={test.id}
                style={{ background: `linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.45)),url(${test.league.image_url != null ? (test.league.image_url) : (bg)})`,
                backgroundSize: 'cover',backgroundPosition:'center' }}
              >
                <div className="main-heading">
                  {test.league.name} - {test.videogame.name} <br />
                  <small>
                    {moment(test.serie.begin_at).format("ll")} -{" "}
                    {moment(test.serie.end_at).format("ll")}
                  </small>
                </div>
                <div className="event-footer d-flex justify-content-between">
                  <div className="price-pool">
                    Price Pool : $ 500, 000
                  </div>
                  <div className="readmore">
                    Read More!
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="right-col">
            <div className="right-header">Upcoming Matches</div>
            
            <div className="match-list mt-3">
              <div className="match-header d-flex justify-content-between py-1 px-2">
                <span>Best Of 3</span>
                <span>Dec 3-20</span>
              </div>
              <div className="d-flex justify-content-around py-3">
                <div>
                  <img src={t1} width="75px" alt="Not Found"/><small><b>NaVi</b></small>
                </div>
                <div className="vs">VS</div>
                <div>
                  <small><b>Liquid</b></small>
                  <img src={t2} width="75px" alt="Not Found"/>
                </div>
              </div>
            </div>
            
            <div className="match-list">
              <div className="match-header d-flex justify-content-between py-1 px-2">
                <span>Best Of 3</span>
                <span>Dec 3-20</span>
              </div>
              <div className="d-flex justify-content-around py-3">
                <div>
                  <img src={t3} width="75px" alt="Not Found"/><small><b>Alliance</b></small>
                </div>
                <div className="vs">VS</div>
                <div>
                  <small><b>Secret</b></small>
                  <img src={t4} width="75px" alt="Not Found"/>
                </div>
              </div>
            </div>
          
            <div className="match-list">
              <div className="match-header d-flex justify-content-between py-1 px-2">
                <span>Best Of 3</span>
                <span>Dec 3-20</span>
              </div>
              <div className="d-flex justify-content-around py-3">
                <div>
                  <img src={t5} width="75px" alt="Not Found"/><small><b>Nigma</b></small>
                </div>
                <div className="vs">VS</div>
                <div>
                  <small><b>NaVi</b></small>
                  <img src={t1} width="75px" alt="Not Found"/>
                </div>
              </div>
            </div>
              <br/>
              <div className="news">
                <div className="right-header">Latest Post</div>
                <br/> 
                <div className="post">
                  <img src={t6} alt="post"/><br/>
                  <h4><b>The International Nine(Ti9)</b></h4>
                  <p className="pb-3">Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry... </p>
                </div>
              </div>
              <div className="news">
                <div className="right-header">Next Event</div>
                <div className="post">
                  <img src={t7} height="150px" alt="post"/><br/>
                  <h5 className="py-3"><b>ESL One Championship : Shan Hi</b></h5>
                </div>
              </div>
              
              <div className="social">
                <div className="right-header">Follow Us :</div>
                <br/> 
                <div className="social-icon-list d-flex justify-content-around">
                  <div className="social-icon facebook">
                    <i className="fab fa-facebook-f"></i>
                  </div>
                  <div className="social-icon google">
                    <i className="fab fa-google"></i>
                  </div>                  
                  <div className="social-icon steam">
                    <i className="fab fa-steam"></i>
                  </div>
                  <div className="social-icon wechat">
                    <i className="fab fa-weixin"></i>
                  </div>
                  <div className="social-icon twitch">
                    <i className="fab fa-twitch"></i>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
