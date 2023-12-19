import { useState, useEffect } from "react";
import React from "react";
import Image from "./Image";

// картинка не отрисовывается по новой

const Details = ({ id }) => {
    const [user, setUser] = useState({})
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null)
  
    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`)
        .then((response) => response.json())
        .then(
            (result) => {
              setIsLoaded(true);
              setUser(result);
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
    }, [id]);

    if(error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
        return (  
        <ul className="list-group">
            <li className="list-group-item">
                <Image user={user}/>
            </li>
            <li className="list-group-item">{user.name}</li>
            <li className="list-group-item">City: {user.details.city}</li>
            <li className="list-group-item">Company: {user.details.company}</li>
            <li className="list-group-item">Position: {user.details.position}</li>
        </ul>
        )
    }
  }

export default Details