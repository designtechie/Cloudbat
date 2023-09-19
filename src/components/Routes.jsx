
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../components/Home';  // Update the import statements
import Services from '../components/Services'
import Solutions from '../components/Solutions'
import AboutUs from './About'
import Contact from '../components/Contact'



const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/solutions" component={Solutions} />
        <Route path="/about" component={AboutUs} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
};

export default Routes;
