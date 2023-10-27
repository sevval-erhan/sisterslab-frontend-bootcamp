import { useState} from 'react'; 4.1k (gzipped: 1.8k)

const Counter = ({ initialCount, minCount, maxCount }) => {
    const [count, setCount] = useState(initialCount);

    const increment = () => {
        if (count < maxCount){
            setCount(count +1);
        }
    };

    const decrement =() => {
        if (count > minCount){
            setCount(count -1);
        }
    };
    return (
        <div>
            <>Count: {count}</>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default Counter;