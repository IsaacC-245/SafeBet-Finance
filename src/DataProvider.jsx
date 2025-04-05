import { createContext, useState, useEffect } from "react";

const DataContext = createContext(null)

const DataProvider = ({ children }) => {
    const [data, setData] = useState(JSON.parse(localStorage.getItem("data")))
    const [user, setUser] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result = await response.json();
                localStorage.setItem("data", JSON.stringify(result))
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData()
    }, []);

    const login = (username) => {
        for (let i = 0; i < data.length; i++) {
            if (username === data.at(i).username) {
                setUser(data.at(i))
                return true
            }
        }
        return false
    }

    const register = (newPerson) => {
        setData([...data, newPerson]);
        localStorage.setitem(data)
        setUser(newPerson)
    };

    const updateBalance = (transactionName, value, currUser) => {
        let newBalance = currUser.balance + value
        let updatedHistory = currUser.history.push({"name": transactionName, "value": value})
        const updatedData = data.map(person =>
            person.name === currUser.name ? { ...person, balance: newBalance, history: updatedHistory } : person
        );
        setData(updatedData)
        setUser(currUser)
    }

    return (
        <DataContext.Provider value={{ data, user, login, register, updateBalance }}>
            { children }
        </DataContext.Provider>
    )

}

export default DataProvider
export { DataContext }