import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import { BsFillPencilFill } from 'react-icons/bs';
import NavbarStyle from './Navbar.module.css';
import User from './User';
import Button from './ui/Button';
import { useAuthContext } from './context/AuthContext';
import CartStatus from './CartStatus';

export default function Navbar() {
  const {user, login, logout} = useAuthContext();
  return (
    <header className={NavbarStyle.header} >
      <Link to='/' className={NavbarStyle.link}>
        <FiShoppingBag className={NavbarStyle.icon} />
        <h1 className={NavbarStyle.h1} >Gon's</h1>
      </Link>
      <nav className={NavbarStyle.nav}>
        <Link to='/products' >Products</Link>
        {user && <Link to='/carts' ><CartStatus/></Link>}
        { user && user.isAdmin && (
        <Link to='/products/new' className={NavbarStyle.menu}>
          <BsFillPencilFill />
        </Link>)}
        {user && <User user={user}/>}
        {!user && <Button text={'Login'} onClick={login}/>}
        {user && <Button text={'Logout'}onClick={logout}/>}
      </nav>
    </header>
  );
}
