import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import AlbumDetails from './AlbumDetails';
import Listennow from './Listennow';
import Header from './Header';
import BrowseNow from './BrowseNow';
import Sidebar from './Sidebar';
import './Home.css';

const Home = () => {
  return (
    <Router>
      <div className='home'>
        <Grid container>
          <Grid item xs={2}>
            <Sidebar />
          </Grid>
          <Grid item xs={10}>
            <Header />
            <Switch>
              <Route path="/Listen" component={Listennow} />
              <Route path="/browse" component={BrowseNow} />
              <Route path="/album/:id" component={AlbumDetails} />
              <Redirect exact from="/" to="/Listen" />
            </Switch>
          </Grid>
        </Grid>
      </div>
    </Router>
  );
};

export default Home;
