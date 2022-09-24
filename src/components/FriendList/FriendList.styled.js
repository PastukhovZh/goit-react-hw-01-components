import styled from "styled-components";

export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding-left: 0;
  /* margin-left: 40px; */
  margin-top: 0;
  margin-bottom: 0;
`
export const Friend = styled.li`
  display: flex;
  align-items: center;
  border-radius: 10px 10px 10px 10px;
  background-color: rgb(231, 231, 231);
  box-shadow: 1px 1px 3px rgb(0 0 0 / 12%), 1px 1px 1px rgb(0 0 0 / 14%),
    1px 2px 1px rgb(0 0 0 / 20%);
  margin-bottom: 10px;
  padding-left: 10px;
`
export const IsOnline = styled.span`
  
  padding: 15px;
  margin-right: 20px;
  border-radius: 25px;
  background-color: ${p => {
    return p.IsOnlineSelect ? 'green':'red'
  }};
`
export const Avatar = styled.img`
width:30px`