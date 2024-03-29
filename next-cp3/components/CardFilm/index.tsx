
import Image from 'next/image';
import React from 'react';
import CardFilmProps from './interface';'./interface';
import './style.css';
import Link from 'next/link';


const CardFilm: React.FC<CardFilmProps> = ({ title, image, link }) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <div className="card-content">
      <Image className="card-image"
        src= {image}
        width={200}
        height={200}
        alt={"Poster do filme "+title}
        />
        
      </div>
      <Link href={link} target="_blank" rel="noopener noreferrer" className="card-link">Assistir</Link>
    </div>
  );
};

export default CardFilm;
