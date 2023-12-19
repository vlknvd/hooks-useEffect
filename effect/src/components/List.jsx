import { useEffect, useState } from "react"

function List({  onSelectUser, selectUser }) {
    const [user, setUser] = useState([])
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json")
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
    }, [])

    if (error) {
        return <div>Ошибка: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Загрузка...</div>;
      } else {
        return (
            <ul className="list">
            {user.map((item) => (
              <li
                className={ selectUser !== item.id ? "list-item" : "list-item active" }
                key={item.id}
                onClick={() => onSelectUser(item)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        );
      }
}

export default List