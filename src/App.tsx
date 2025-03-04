import './App.scss';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from './layout/Layout';
import Home from './pages/home/Home';
import Movies from './pages/movies/Movies';
import MyList from './pages/mylist/MyList';
import NewAndPopular from './pages/newAndPopular/NewAndPopular';
import Series from './pages/series/Series';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/series" element={<Series />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/newandpopular" element={<NewAndPopular />} />
          <Route path="/mylist" element={<MyList />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
