import {useEffect, useRef, useState} from "react";
import ProfileCard from "./ProfileCard";
import {getUsers} from "../../helpers/GetUsers";
import '../../styles/index.scss';
import axios from "axios";

const CardSection = ({newUser, page, handleClick}) => {
    const [users, setUsers] = useState([]);
    const [maxPage, setMaxPage] = useState(null);


    useEffect(() => {
        getUsers(page).then(({data}) => {
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

        getUsers(page).then(({data}) => {
            const users = data.users;
            const sortedUsers = users.sort((a, b) => a - b);

            setUsers((prevState) => [...prevState, ...sortedUsers]);
        })
    }, [page])

    useEffect(() => {
        if(newUser){
            getUsers(page).then(({data}) => {
                const users = data.users;
                const sortedUsers = users.sort((a, b) => a - b);

                setUsers(sortedUsers);
                setMaxPage(data.total_pages);
            });
        }
    }, [newUser])

    return (
        <section className="card-section">
            <div className="container">
                <h2 className="card-section__title">Working with GET request</h2>
                <div className="card-container" id="users">
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