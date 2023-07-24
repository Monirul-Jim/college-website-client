import { Link } from "react-router-dom";
import image from '../../assets/Logo2-1-160x164.png'
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext, useState } from "react";
import users from '../../assets/user.webp'

const Navbar = () => {
  const { user, logOut} = useContext(AuthContext)
  const [showLogout, setShowLogout] = useState(false);
  const handleLogout = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error))
  }
  const handlePhotoClick = () => {
    setShowLogout(prevState => !prevState);
  };

  const handleLogoutButtonClick = () => {
    handleLogout();
    setShowLogout(false);
  };

  const navOptions = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/'>College</Link></li>
    <li><Link to='/admission'>Admission</Link></li>
    <li><Link to='/my-college'>My College</Link></li>
    <li><Link to='/photo-gallery'>Photo Gallery</Link></li>
    <li><Link to='/'>Authority</Link></li>
    <li><Link to='/'>Faculty</Link></li>
    <li><Link to='/'>Staff</Link></li>
    <li><Link to='/'>CEDP</Link></li>

    <div>

      {user && (
        <img
          title={user.displayName}
          className="h-12 w-12 rounded-full"
          src={user.photoURL}
          alt="Profile Picture"
          onClick={handlePhotoClick}
        />
      )}

      {showLogout && user && (
        <li className="list-none">
          <button onClick={handleLogoutButtonClick}>
            Logout
          </button>
        </li>
      )}

      {!user && (
        <li className="list-none">
          <Link to="/login"> <img className="h-5" src={users} alt="" />
            <button>Login
            </button>
          </Link>
        </li>
      )}
    </div>
  </>
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navOptions}
            </ul>
          </div>
          <Link to='/'><img className="h-14 " src={image} alt="" /></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navOptions}
          </ul>
        </div>
      </div>

    </div>

  );
};

export default Navbar;