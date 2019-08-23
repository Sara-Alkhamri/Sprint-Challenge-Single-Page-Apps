import React from 'react';
import { Route } from 'react-router-dom';
import CharacterList from './CharacterList';
import EpisodeList from './EpisodeList';
import LocationList from './LocationsList';
import WelcomePage from './WelcomePage';

export default function AppRouter() {
    return (
       <dive>
        <Route exact path='/' component={WelcomePage} />
        <Route path='character' component={CharacterList} />
        <Route path='episode' component={EpisodeList} />
        <Route path='location' component={LocationList} />
       </dive>  
    )
}