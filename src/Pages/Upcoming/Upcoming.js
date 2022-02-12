import React from "react";
import axios from "axios";
import {useState,useEffect} from "react";
import "../../components/SingleContent/SingleContent";
import SingleContent from "../../components/SingleContent/SingleContent";
import "./Upcoming.css";

const Upcoming = () => {

    const [page, setPage] = useState(1);
    const[content, setContent] = useState([]);

    const fetchUpcoming = async () => {
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}`
            );
            // console.log(data);
            setContent(data.results);
        };

        useEffect(() =>{
            window.scroll(0, 0);
            fetchUpcoming();
        },[[page]]);


        return (
            <div>
                <span className="pageTitle">Upcoming</span>
                <div className="upcoming">
                    {content && content.map((c) => <SingleContent key={c.id} id={c.id} poster={c.poster_path} title={c.title || c.name} date={c.first_air_date || c.release_date} media_type={c.media_type} vote_average={c.vote_average}/>)}
                </div>
                
            </div>
        );
}
export default Upcoming