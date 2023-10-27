import { useState } from 'react'; 4.1k (gzipped: 1.8k)
import './CoinFlipperStyles.css';
import Coin from './Coin';

const options = ['yazi', 'tura'];

constgetRandomElFromArr = (arr)=>{
    const randomIndex = Math.floor(Math.random() * arr.length);
    const randomItem =arr(randomIndex);
    return randomItem;
};
const CoinFlipper = () => {
    const [rotate,setRotate] = useState(false);
    const [currentStatus, setCurrentStatus] = useState(options[0]);
    const [results,SetResults]= useState([]);
    
    const start = () => {
        setRotate(true);
        const randomElement = getRandomElFromArr(options);
        setTimeout(() => {
            setCurrentStatus(randomElement);
            setResults([...results, randomElement]);
            setRotate(false);
        }, 1000);
    };
    
    return (
        <div>
        <h1>Yazi ya da Tura</h1>
        <Coin currentStatus={currentStatus} rotate={rotate} />
        <br />

        {results.length > 0 && currentStatus}
        <br />

        <>toplam {results.length} atis yapildi</>
        <button onClick={start}>Atis Yap</button>
        </div>
    );
};

export default CoinFlipper;