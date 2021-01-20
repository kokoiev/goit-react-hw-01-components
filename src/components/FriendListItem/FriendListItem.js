import PropTypes from 'prop-types';
import s from "./FriendListItem.module.css"

function FriendListItem({ id, avatar, name, isOnline }) {
    return <>
        <span style={isOnline ? { backgroundColor: 'green' } : { backgroundColor: 'red' }} className={s.status}>{isOnline}</span>
        <img className={s.avatar} src={avatar} alt="avatar" width="48" />
        <p className={s.name}>{name}</p>
    </>
    
}

FriendListItem.propType = {
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
}
export default FriendListItem