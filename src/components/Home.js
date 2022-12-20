
import Heart from '../assets/images/heart-icon.png'
import Hands from '../assets/images/hands.png'
import { useState } from 'react';

function Home() {
    const [heartLinks, setHeartLinks] = useState(false);
    return ( 
        <div className="planet-app">
            <div className="container">
                <div className="planet-polygon">
                    <div className="planet-circle">
                        <div className="middle-line" />
                        <div className="bottom-line bottom-line-1" />
                        <div className="bottom-line bottom-line-2" />

                        <img src={Heart} onClick={() => setHeartLinks(true)} alt="Heart" className='heart-icon' />
                        <img src={Hands} alt="Hands" className='hands-icon' />

                        {heartLinks && (
                            <div className='heart-links'>
                                <button onClick={() => alert("Take Clicked!")} style={{backgroundColor: '#047bfe'}}><span>Take</span></button>
                                <button onClick={() => alert("Give Clicked!")} style={{backgroundColor: '#fb0302'}}><span>Give</span></button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Home;