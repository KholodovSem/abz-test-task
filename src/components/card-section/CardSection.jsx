import {useEffect, useState} from "react";
import ProfileCard from "./ProfileCard";
import {fetchUsers} from "../../helpers/FetchUsers";
import '../../styles/index.scss';
import axios from "axios";

const CardSection = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState(null);


    useEffect(() => {
        fetchUsers(page).then(({data}) => {
            const users = data.users;
            const sortedUsers = users.sort((a, b) => a - b);

            setUsers(sortedUsers);
            setMaxPage(data.total_pages);
        });
    }, []);

    useEffect(() => {
        if (page === 1) {
            return;
        }

        fetchUsers(page).then(({data}) => {
            const users = data.users;
            const sortedUsers = users.sort((a, b) => a - b);

            setUsers((prevState) => [...prevState, ...sortedUsers]);
        })
    }, [page])


    const handleClick = () => {
        setPage((prevState) => prevState + 1)
    }

    return (
        <section className="card-section">
            <div className="container">
                <h2 className="card-section__title">Working with GET request</h2>
                <div className="card-container">
                    {users.map((user) => (
                        <ProfileCard {...user} key={user.id}/>
                    ))}
                </div>
                {page <= maxPage ?
                    <button
                        onClick={handleClick}
                        className="card-section__button"
                    >Show more</button> : null}
            </div>
        </section>
    );
};

export default CardSection;