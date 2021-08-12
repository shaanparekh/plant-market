import Seedlings from './../../assets/seedlings.jpg'
import Plants from './../../assets/plants.jpg'
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
                        <a className="link">
                            Browse Seedlings
                        </a>
                </div>
                <div 
                    className="item"
                    style ={{
                        backgroundImage: `url(${Plants})`
                }}>    
                    <a className="link">
                        Browse Plants
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Directory;