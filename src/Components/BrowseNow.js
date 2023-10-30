import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import './BrowseNow.css';
import AlbumDetails from './AlbumDetails'; // Adjust the path as needed

const BrowseNow = () => {
  const [albumData, setAlbumData] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  useEffect(() => {
    // Make the API call when the component mounts
    fetch('https://academics.newtonschool.co/api/v1/music/album', {
      headers: {
        'projectId': 'bmc60xnvc646'
      }
    })
      .then(response => response.json())
      .then(data => {
        setAlbumData(data.data); // Store the fetched data in the state array
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  return (
    <div className="browse-container">
    <div className='top-heading'><h1>Browse</h1></div>
    <Grid container spacing={2}>
      {albumData.map(album => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={album._id}>
          <Link to={`/album/${album._id}`} className="album-link">
            <div className="album-cards">
              <img className="album-imgs" src={album.image} alt={album.title} />
              <span className='album-title'>{album.title}</span>
            </div>
          </Link>
        </Grid>
      ))}
    </Grid>
  </div>
);
}

export default BrowseNow;
