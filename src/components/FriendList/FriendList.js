import { FriendsList, Friend, IsOnline, Avatar } from "./FriendList.styled"
import PropTypes from "prop-types"

const IsOnlineUser = {
    isOnline: 'isOnline'
    
}

export const FriendList = ({ friends }) => {
    return (
        
    <FriendsList>
    {friends.map(({ avatar, name, isOnline,id }) => (
        <Friend key = {id}>
            <IsOnline IsOnlineSelect={isOnline ? IsOnlineUser.isOnline : false }></IsOnline>
                <Avatar className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
</Friend>
            ))
            }   
</FriendsList>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number.isRequired,
    })
  ),
}