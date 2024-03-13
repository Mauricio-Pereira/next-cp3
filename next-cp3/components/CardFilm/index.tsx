
import React from 'react';
import CardFilmProps from './interface';'./interface';
import './style.css';


const CardFilm: React.FC<CardFilmProps> = ({ title, description, imageUrl, videoUrl }) => {
  return (
    <div className="card">
      
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <img className="card-image" src={imageUrl} alt={title} />
        <p className="card-description">{description}</p>
        <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="card-link">Assistir</a>
      </div>
    </div>
  );
};

export default CardFilm;
