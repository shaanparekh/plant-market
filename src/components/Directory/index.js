import Seedlings from './../../assets/seedlings.jpg'
import Plants from './../../assets/plants.jpg'
import { Link } from 'react-router-dom';
import './styles.scss'

const Directory = props => {
    return(
        <div className = "directory">
            <div className = "wrap">
                <div 
                    className="item"
                    style ={{
                        backgroundImage: `url(${Seedlings})`
                    }}>
                        <Link className="link" to="/search/seeds">
                            Browse Seeds
                        </Link>
                </div>
                <div 
                    className="item"
                    style ={{
                        backgroundImage: `url(${Plants})`
                }}>    
                    <Link className="link" to="/search/plants">
                        Browse Plants
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Directory;