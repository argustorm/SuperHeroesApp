import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

//Pages
import DCPage from '../pages/DCPage';
import HeroePage from '../pages/HeroePage';
import MarvelPage from '../pages/MarvelPage';
import SearchPage from '../pages/SearchPage';

// Components
import NavbarComponent from '../components/shared/NavbarComponent';

const DashboardRoutes = () => {
    return (
        <div>
            <NavbarComponent />
            <Switch>
                <Route exact path='/' component={DCPage} />
                <Route exact path='/dc' component={DCPage} />
                <Route exact path='/marvel' component={MarvelPage} />
                <Route exact path='/search' component={SearchPage} />
                <Route exact path='/heroe/:id' component={HeroePage} />
                <Redirect to='/' />
            </Switch>
        </div>
    );
}

export default DashboardRoutes;