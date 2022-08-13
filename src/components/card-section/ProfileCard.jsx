import PropTypes from 'prop-types';
import '../../styles/index.scss';

const ProfileCard = ({photo, name, position, email, phone}) => {
    return (
        <div className="card">
            <img src={photo} alt={name} className="card__image"/>
            <ul className="card__item-list">
                <li className="card__item">{name}</li>
                <li className="card__item">{position}</li>
                <li className="card__item"><a href={`mailto:${email}`} className="card-item-contact">{email}</a></li>
                <li className="card__item"><a href={`tel:${phone}`} className="card-item-contact">{phone}</a></li>
            </ul>
        </div>
    );
};

ProfileCard.propTypes = {
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired
}

export default ProfileCard;

