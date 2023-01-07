import './App.css';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Listings from './pages/Listings';
import ListingDetail from './pages/ListingDetail';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Page404 from './components/Page404/Page404';

import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
  <Provider store={store}>  
    <BrowserRouter className="App">
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/listings' element={<Listings/>} />
          <Route path='/listings/:id' element={<ListingDetail/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/login' element={<Login/>} />
          
          <Route path='*' element={<Page404/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </Provider>);
}

export default App;
