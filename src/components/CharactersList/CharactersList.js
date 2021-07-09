import { useState } from 'react';
import { useEffect } from 'react';


export default function CharacterList() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
        .then(res => res.json())
        .then(
            (result) => {
                setItems(result.results);
                setIsLoaded(true);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    })

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                {items.map(item => (
                    <div>
                        <p>{item.name}</p>
                        <p>{item.status}</p>
                        <p>{item.species}</p>
                        <p>{item.location.name}</p>
                        <p>{item.origin.name}</p>
                        <img src={item.image} />
                        <button>Add to Favourite</button>
                    </div>
                ))}
            </div>
        );
    }
}
