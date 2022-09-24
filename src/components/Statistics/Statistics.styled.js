import styled from "styled-components";



export const StatisticsWrap = styled.section`
display: flex;
  flex-direction: column;
  align-items: center;
margin: 0 auto;
  background-color: rgb(189, 189, 189);
  border-radius: 0px 0px 10px 10px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
`

export const Title = styled.h2`
   margin: 0;
padding: 20px 0;`

export const StatsList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  background-color: burlywood;
  padding-left: 0;
  margin: 0;
  border-radius: 0px 0px 10px 10px;
`

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  outline: 1px solid black;
  border-radius:4px; 
`