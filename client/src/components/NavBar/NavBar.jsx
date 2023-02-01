import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="/intro/whatispython">What is Python</Link>
        </li>
        <li>
          <Link to="/intro/helloworld">Hello, World!</Link>
        </li>
        <li>
          <Link to="/intro/whatispython">What is Python</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
