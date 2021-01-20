import FriendListItem from "../FriendListItem/FriendListItem";
import PropTypes from 'prop-types';
import s from "./FriendList.module.css"

function FriendList({friends}) {
    return <ul className={s.container}>
        {friends.map(({ id, avatar, name, isOnline }) => <li key={id} className={s.item}><FriendListItem id={id} avatar={avatar} name={name} isOnline={isOnline} /></li>)}
    </ul>  
} 
FriendList.propType = {
    friends: PropTypes.arrayOf(PropTypes.shape)
}
export default FriendList