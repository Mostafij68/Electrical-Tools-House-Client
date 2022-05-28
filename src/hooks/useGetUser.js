import { useEffect, useState } from "react";

const useGetUser = user => {
    const [getUser, setGetUser] = useState([]);
    useEffect(() => {
        if (user) {
            const email = user?.email;
            const url = `http://localhost:5000/user?email=${email}`;
            fetch(url)
            .then(res => res.json())
            .then(data => setGetUser(data))
        }
    }, [user]);
    return [getUser, setGetUser]
};

export default useGetUser;