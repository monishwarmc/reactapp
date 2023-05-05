import { useEffect, useState } from 'react';
import './User.css';
import { useTheme } from '../Theme';

export const User = () => {
    const [Data, setData] = useState(null);
    const {theme} = useTheme();
    const fetchData = () => {
        return fetch("https://randomuser.me/api/?result=1")
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err));
    }

    useEffect(() => {
        fetchData();
    }, []);

    return Data != null ? (
        <div className="user"
        style={{ color : theme === "light" ? "blue" : "white" } }
        >
            <img className='user-image' alt='img' src={Data.results[0].picture.large}/>
            <div className="user-name">{Data.results[0].name.first} {Data.results[0].name.last}</div>
        </div>
    ) : (
        <h2>Loading...</h2>
    );
}
