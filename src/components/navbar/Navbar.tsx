import './Navbar.scss';

import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router';

import { ArrowDropDown, Notifications, Search } from '@mui/icons-material';

const Navbar: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img src="../../../public/cinemastreams.png" alt="" />
          <Link className="linkItem" to="/">
            Home
          </Link>
          <Link className="linkItem" to="/series">
            Series
          </Link>
          <Link className="linkItem" to="/movies">
            Movies
          </Link>
          <Link className="linkItem" to="/newandpopular">
            New and Popular
          </Link>
          <Link className="linkItem" to="/mylist">
            My List
          </Link>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
