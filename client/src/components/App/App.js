import styles from './App.module.css';
import { Route, Router, Switch } from 'react-router-dom';
import history from '../../history';
import Home from '../Home/Home';

function App() {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
