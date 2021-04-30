import styled, {css} from 'styled-components'


const buttonStyles =css`
background-color:black;
color:white;
border:none;

&:hover{
    background-color:  white;
  color: black;
  border: 1px solid black;
}
`

const invertedButtonStyles = css`
background-color:  white;
color: black;
border: 1px solid black;

&:hover{
  background-color: black;
  color: white;
}
`


const getButtonStyles = props =>{
    if(props.isGoogleSignIn){
        return GoogleSignInStyles
    }

    return props.inverted ? invertedButtonStyles : buttonStyles
}

const GoogleSignInStyles = css`
background-color: #4285f4;
color:white;

&:hover{
  background-color: whitesmoke;
  color: #4285f4;
  border: none;
  box-shadow: 0 0 6px  #4285f4;
}

.icon-wrapper {
    
    position: relative;
    float: right;
    margin-top: 1px;
    margin-left: 1px;
    width: 40px;
    height: 40px;
    border-radius: 2px;
    background-color: transparent;
  }
  .icon {
    position: relative;
   
    margin-top: 15px;
    margin-left: 0px;
    
    width: 18px;
    height: 18px;
  }
`



export const CustomButtonContainer = styled.button`
min-width: 165px;
width: auto;
height: 50px;
letter-spacing: 0.5px;
line-height: 50px;
padding: 0 50px 0 50px;
font-size: 15px;
background-color: black;
color: white;
text-transform: uppercase;
font-family: 'Open Sans Condensed';
font-weight: bolder;
border-radius: 8px;
border: 1px solid;
cursor: pointer;
display:flex;
justify-content:center;

${getButtonStyles}
`