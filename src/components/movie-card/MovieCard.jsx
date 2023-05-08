import React from 'react';

import './movie-card.scss';

import { Link } from 'react-router-dom';

import Button from '../button/Button';

import { category } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';

const MovieCard = props => {
    console.log(props)
    const item  = props.item;

    const link = '/' + category[props.category] + '/' + item.id;

    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);
    const value = item.vote_average;
    console.log(item)
    return (
        <Link to={link}>
            <div className="movie-card" style={{backgroundImage: `url(${bg})`}}>
                <Button>
                    <i className="bx bx-play"></i>
                </Button>
                <div className="bottom">
                    <div className="rating">
                     <Rating name="half-rating-read" defaultValue={value > 5 ? value - 4 : value} precision={0.5} readOnly />
                    </div>
                    <div className="count">
                        <FavoriteIcon style={{ color: 'red' }}></FavoriteIcon>
                        <span>{item.vote_count}</span>
                    </div>
                </div>

            </div>
            <h3>{item.title || item.name}</h3>
        </Link>
    );
    
}

export default MovieCard;
