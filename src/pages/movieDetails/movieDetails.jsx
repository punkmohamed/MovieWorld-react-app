import { useContext, useEffect, useState } from "react"
import axios from "axios";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import './style.css'
import MovieDetailCard from "./movieCard";
import languageContext from "../../context/langContext";
const MovieDetails = () => {
    const [movie, setMovie] = useState({})
    // const [loading, setLoading] = useState(true)
    const param = useParams()
    console.log(param.id);
    const { lang } = useContext(languageContext)
    const fetchData = async () => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=b932594aaa08e98c262cc502b4484e3d&language=${lang}`)
            const data = response.data
            setMovie(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            <MovieDetailCard movie={movie} />
        </>
    )
}
export default MovieDetails