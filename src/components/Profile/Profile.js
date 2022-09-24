import { ProfileWrap, Description, Stats, Info, Image, Username, UserInfo, StatsInfo } from "./Profile.styled"
import PropTypes from "prop-types"

export const Profile = ({username, tag, location, avatar, followers, views, likes}) => {
  return (
    <ProfileWrap>
  <Description>
    <Image
      src={avatar}
      alt="User avatar"
    />
    <Username>{username}</Username>
        <UserInfo>@{tag}</UserInfo>
    <UserInfo>{location}</UserInfo>
  </Description>

  <Stats>
    <Info>
      <span className="label">Followers</span>
      <StatsInfo className="quantity">{followers}</StatsInfo>
    </Info>
    <Info>
      <span className="label">Views</span>
      <StatsInfo className="quantity">{views}</StatsInfo>
    </Info>
    <Info>
      <span className="label">Likes</span>
      <StatsInfo className="quantity">{likes}</StatsInfo>
    </Info>
  </Stats>
</ProfileWrap>
  )
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};