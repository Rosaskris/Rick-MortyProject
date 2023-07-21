import './menu.modules.css'
import {Link, NavLink} from 'react-router-dom';

export default function Menu (props){
    return(
        <details className='details'>
<summary className='summary'></summary>
<nav class="menu" className='menu'>
  <Link to='/about'>
        <button>About</button>
        </Link>
        
        <Link to='/home'>
        <button>Home</button>
        </Link>

        <Link to='/favorites'>
        <button>Favorites</button>
        </Link>


        <button onClick={props.logOut}>LogOut</button>
  </nav>
</details>
    )

}

