import PropTypes from 'prop-types';

function FriendListItem({ id, avatar, name, isOnline }) {
    return <li key={id} className="item">
        <span className="status">{isOnline}</span>
        <img className="avatar" src={avatar} alt="avatar" width="48" />
        <p className="name">{name}</p>
</li>
    
}

FriendListItem.propType = {
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
}
export default FriendListItem