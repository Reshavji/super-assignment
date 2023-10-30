import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './AlbumDetails.css';

const AlbumDetails = ({ onClose }) => {
  const { id } = useParams(); // Get the album ID from the route parameters
  const [albumData, setAlbumData] = useState(null);
console.log(id);
  useEffect(() => {
    // Fetch album details using the album ID from the route parameters
    fetch(`https://academics.newtonschool.co/api/v1/music/album/${id}`, {
      headers: {
        'projectId': 'bmc60xnvc646' 
      }
    })
      .then(response => response.json())
      .then(data => {
        setAlbumData(data.data); // Store the fetched album data in the state
      })
      .catch(error => {
        console.error('Error fetching album data:', error);
      });
  }, [id]); // Fetch whenever the album ID changes

  if (!albumData) {
    return null; // If album data is not fetched yet, don't render anything
  }
  
  return (
    <div className="album-details-popup">
      <div className='album-box'>
        <div className="album-img" >
      <img className='song-img' src={albumData.image} alt={albumData.title} /></div>
      <div className='album-details'>
      <span className='song-title'>{albumData.title}</span>
      <p className='song-description'>{albumData.description}</p>
      </div>
      </div>
      <div className='main-box'>
      {albumData.artists.map(artist => (
        <div key={artist._id}>
          <h3>{artist.name}</h3>
          {artist.songs.map(songId => {
            const song = albumData.songs.find(song => song._id === songId);
            if (song) {
              return (
                <div key={song._id}>
                  <p className='audio-title'>{song.title}</p>
                  <audio controls>
                    <source src={song.audio_url} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      ))}
      </div>
    </div>
   
  );
};

export default AlbumDetails;
