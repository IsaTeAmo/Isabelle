import { Link } from 'react-router-dom';
import '../App.css';

function Home(){
    return (
        <div>
        <header className="App-header">
            <h1>Isa te amo muito</h1>
            <Link to="/Isabelle/TeAmo" className='buttonLike'> TE AMO </Link>
        </header>

        </div>
    );
}

export default Home;