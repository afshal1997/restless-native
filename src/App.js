import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import ResetLessNativeModal from './Components/ResetLessNativeModal/ResetLessNativeModal';
import Loader from './Components/Common/Loader/Loader';
import BeforYouSetSail from './Pages/BeforYouSetSail';
import ScrollToTop from './Pages/ScrollToTop';
const Home = Loadable({
  loader: () => import('./Pages/Home'),
  loading: () => <Loader />,
});
const TheVessel = Loadable({
  loader: () => import('./Pages/TheVessel'),
  loading: () => <Loader />,
});
const App = () => {

  const [showModal, setModal] = useState(false)
  const [loading, setLoader] = useState(true)
  useEffect(() => {
    AOS.init()
    setTimeout(() => {
      setLoader(false)
      setModal(true)
    }, 10000);
  }, [window.location.pathname])
  return (
    <div className="App">
      {window.location.pathname === "/" && <ResetLessNativeModal show={showModal} handleClose={() => setModal(false)} />}
      {
        // loading ? <Loader setLoader={setLoader} loading={loading} setModal={setModal} /> :
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
