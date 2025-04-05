import {createContext, useState} from "react";

const DataContext = createContext(null)

const DataProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))

    const login = (username) => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data.json');
                let data = await response.json()

                for (let i = 0; i < data.length; i++) {
                    if (username === data.at(i).username) {
                        localStorage.setItem("user", JSON.stringify(data.at(i)))
                        setUser(data.at(i))
                        break
                    }
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData()
    }

    const register = (newPerson) => {
        let newData = {
            "username": newPerson,
            "balance": 25,
            "history": []
        }
        localStorage.setItem("user", JSON.stringify(newData))
        setUser(newData)
    };

    const logout = () => {
        localStorage.removeItem("user")
        setUser(null)
    }

    const updateBalance = (transactionName, value) => {
        let updatedUser = user
        updatedUser.history.push({"name": transactionName, "value": value})
        updatedUser.balance += Number(value)
        localStorage.setItem("user", JSON.stringify(updatedUser))
        setUser(updatedUser)
    }

    return (
        <DataContext.Provider value={{ user, login, logout, register, updateBalance }}>
            { children }
        </DataContext.Provider>
    )

}

export default DataProvider
export { DataContext }