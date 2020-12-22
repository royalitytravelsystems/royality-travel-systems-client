import styled from 'styled-components';
import WelcomeTitle from '../Components/WelcomeTitle';


export const WelcomeComponent = styled(WelcomeTitle)`
  .two-grids {
    padding:5em 0;
  }
  .w3l_header {
    font-size: 3em;
    color: #262c38;
    position: relative;
    font-weight: 700;
    text-align: center;
  }
  .w3l_header span {
    color: #545151;
    font-weight: 200;
  }
  .w3l_header:after {
    border-top: 2px solid #ed1c24;
    display: block;
    width: 81px;
    content: "";
    margin: 8px auto 0;
  }  
  .wthree_head_section {
    margin-bottom: 3em;
  }
  .wthree_head_section p {
    font-size: 15px;
    text-align: center;
    margin: 20px auto;
    width: 60%;
    color: #5e5e5e;
    line-height: 1.8em;
    width:100%
  }
  @media screen and (max-width: 736px){
    .w3l_header {
        font-size: 2.3em;
    }
  }
  @media screen and (max-width: 414px){
    .w3l_header {
        font-size: 2.2em;
    }
  }
  @media screen and (max-width: 384px){
    .w3l_header {
        font-size: 2em;
    }
  }
  @media screen and (max-width: 320px){
    .wthree_head_section {
        margin-bottom: 2em;
    }
  }
  
`;
