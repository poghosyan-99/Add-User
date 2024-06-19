import { useNavigate } from 'react-router-dom';
import { InfoContext } from '../../Context/infoContext';
import { useContext } from 'react';

import './style.css';

const UsersPage = () => {

    const { state } = useContext(InfoContext);
    const { usersData } = state;

    const navigate = useNavigate();

    const handleClickForm = () => {
        navigate('/Form');
    }

    return(
        <div className="UsersPage">
            <button onClick={handleClickForm}>
                <i className="fa-solid fa-user-plus"></i>
            </button>
            <div className="usersSection">
                {usersData.map((el, index) => {
                    return(
                        <div className="userCard" key={index}>
                            <img src={el.image} alt="img" />
                            <h2><span>First Name: </span>{el.firstName}</h2>
                            <h2><span>Last Name: </span>{el.lastName}</h2>
                            <h2><span>Gender: </span>{el.gender}</h2>
                            <h2><span>Age: </span>{el.age}</h2>
                            <h2><span>Address: </span>{el.address}</h2>
                            <h2><span>Email: </span>{el.email}</h2>
                            <h2><span>Phone: </span>{el.phone}</h2>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default UsersPage;
