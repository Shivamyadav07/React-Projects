import styled from "styled-components"

const Button = styled.button`

background:${(props) => props.mode==="light"?"yellow":"#5992e7"};
color:${(props) => props.mode==="light"?"black":"white"};
height: 35px;
font-size: larger;
width: 150px;
margin: 20px;
font-weight: 700px;
border-radius: 10px;




`
export { Button }