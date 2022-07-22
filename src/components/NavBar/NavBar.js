import '../NavBar/NavBar.css';

function NavBar() {
  return (
    <div className="nav-bar">
      <a className="home" href="/home">Home</a>
      <a className="login" href="/login">Login</a>
    </div>
  )
}

export default NavBar;