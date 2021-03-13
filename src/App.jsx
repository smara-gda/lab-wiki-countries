
import { Route, Switch } from 'react-router';
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route path='/' component={CountriesList} exact/>      
        <Route path='/country/:id' component={CountryDetails} exact/>      
      </Switch>
    </div>
  );
}

export default App;
