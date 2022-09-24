import styled from "styled-components";

export const ProfileWrap = styled.div`
/* width: 300px; */
    box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
        0px 2px 1px rgb(0 0 0 / 20%);
    border-radius: 0px 0px 10px 10px;
`
export const Description = styled.div`
display: flex;
align-items: center;
padding: 20px;
    flex-direction: column;
    text-align: center;
    background: #ffffff;
`

export const Stats = styled.ul`
 display: flex;
    flex-direction: row;
    justify-content: space-around;
    /* padding-left: 0; */
    background: #d5d5d5;
    list-style: none;
    padding: 10px;
    border-radius: 0px 0px 10px 10px;
    margin: 0;
    `

export const Info = styled.li`
    display: flex;
    flex-direction: column;
    gap: 15px;

`

export const Username = styled.p`
font-size: 20px;
font-weight: 900;
/* margin-top: ; */
`

export const UserInfo = styled.p`
margin: 3px;
color: #00000059;
`

export const Image = styled.img`
width: 300px;
border-radius: 50%`

export const StatsInfo = styled.span`
font-weight:900;
`


