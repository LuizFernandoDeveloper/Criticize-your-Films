import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './styles.css'

function NavBar() {

    return (
        <header>
            <nav className="container">
                <div className="desmovie-nav-content">

                    <h1>Criticize your Films</h1>
                    <a href="https://github.com/LuizFernandoDeveloper">

                        <div className="desmovie-contact-container">

                            <GithubIcon />
                            <p className="dsmov-contact-link">My github</p>

                        </div>

                    </a>

                </div>
            </nav>
        </header>
    );
}
export default NavBar;
