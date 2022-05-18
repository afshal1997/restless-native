import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import ResetLessNativeModal from './Components/ResetLessNativeModal/ResetLessNativeModal';
import BeforYouSetSail from './Pages/BeforYouSetSail';
import ScrollToTop from './Pages/ScrollToTop';
import Home from './Pages/Home'
import TheVessel from './Pages/TheVessel'
const App = () => {

  const [showModal, setModal] = useState(false)
  useEffect(() => {
    AOS.init()
    setTimeout(() => {
      setModal(true)
    }, 10000);
  }, [window.location.pathname])
  return (
    <div className="App">
      {window.location.pathname === "/" && <ResetLessNativeModal show={showModal} handleClose={() => setModal(false)} />}
      {
        <BrowserRouter>
          <ScrollToTop>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/the-vessels" component={TheVessel} />
              <Route path="/before-you-set-sail" component={BeforYouSetSail} />
            </Switch>
          </ScrollToTop>
        </BrowserRouter>
      }
    </div>
  );
}

export default App;
