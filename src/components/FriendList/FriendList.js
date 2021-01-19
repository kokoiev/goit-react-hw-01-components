import FriendListItem from "../FriendListItem/FriendListItem";
import PropTypes from 'prop-types';

function FriendList({friends}) {
    return <ul className="friend-list">
        {friends.map(({ id, avatar, name, isOnline }) => <FriendListItem id={id} avatar={avatar} name={name} isOnline={isOnline} />)}
    </ul>
    
} 
FriendList.propType = {
    friends: PropTypes.object
}
export default FriendList