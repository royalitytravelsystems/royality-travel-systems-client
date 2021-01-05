import styled from 'styled-components';
import Banner from '../Components/Banner';


export const BannerComponent = styled(Banner)`
max-width:100%!important;
padding-bottom:20px;
.cover-column{
    padding:0 0 0 0;
}

.two-grids {
    padding:0 0;
}
.wthree_head_section {
    position: absolute;
    z-index: 10;
    top: 20%;
    bottom: 0;
    left: 30%;
    margin: 15px 15px;
    width:55%;
}
.wthree_head_section p {
    font-size: 15px;
    text-align: center;
    margin: 20px auto;
    width: 60%;
    color: #5e5e5e;
    line-height: 1.8em;
}
.wthree_head_section p {
    width: 100%;
}
.w3l_header {
    font-size: 5em;
    color: #262c38;
    letter-spacing: 1px;
    position: relative;
    font-weight: 600;
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


@media screen and (max-width: 1600px){
    .wthree_head_section {
        top: 10%;
        left: 20%;
        width:60%;
    }
    .w3l_header {
        font-size: 4.5em;
        text-align: center;
    }
  }
  @media screen and (max-width: 1200px){
    .wthree_head_section {
        top: 10%;
        left: 20%;
        width:70%;
    }
    .w3l_header {
        font-size: 3.8em;
        text-align: center;
    }
  }

@media screen and (max-width: 1080px){
    .wthree_head_section {
        top: 10%;
        left: 20%;
        width:60%;
    }
    .w3l_header {
        font-size: 3em;
        text-align: center;
    }
  }
  @media screen and (max-width: 991px){
    .wthree_head_section {
        top: 10%;
        left: 20%;
        width:70%;
    }
    .w3l_header {
        font-size: 2.3em;
        text-align: center;
    }
  }
  @media (max-width: 767px){
    .wthree_head_section {
        top: 10%;
        left: 20%;
        width:60%;
    }
    .w3l_header {
        font-size: 2.3em;
        text-align: center;
    } 
  }
  @media screen and (max-width: 736px){
    .wthree_head_section {
        top: 10%;
        left: 20%;
        width:60%;
    }
    .w3l_header {
        font-size: 2.3em;
        text-align: center;
    }  
  }
@media screen and (max-width: 667px){
    .wthree_head_section {
        top: 10%;
        left: 20%;
        width:60%;
    }
    .w3l_header {
        font-size: 2.3em;
        text-align: center;
    } 
  }
  @media screen and (max-width: 640px){
    .wthree_head_section {
        top: 10%;
        left: 20%;
        width:60%;
    }
    .w3l_header {
        font-size: 2.3em;
        text-align: center;
    }  
  }
  @media screen and (max-width: 600px){
    .wthree_head_section {
        top: 10%;
        left: 20%;
        width:60%;
    }
    .w3l_header {
        font-size: 1.5em;
        text-align: center;
    } 
  }
  @media screen and (max-width: 568px){
    .wthree_head_section {
        top: 10%;
        left: 20%;
        width:60%;
    }
    .w3l_header {
        font-size: 1.5em;
        text-align: center;
    } 
  }
  @media screen and (max-width: 480px){
    .wthree_head_section {
        top: 10%;
        left: 20%;
        width:60%;
    }
    .w3l_header {
        font-size: 2.3em;
        text-align: center;
    }  
  }
@media screen and (max-width: 414px){
    .wthree_head_section {
        top: 0%;
        left: 10%;
        margin: 5px 5px;
        width:90%;
    }
    .w3l_header {
        font-size: 1.5em;
        text-align: center;
    } 
}
@media screen and (max-width: 320px){
    .wthree_head_section {
        top: 0%;
        left: 10%;
        margin: 5px 5px;
        width:90%;
    }
    .w3l_header {
        font-size: 1.2em;
        text-align: center;
    } 
  }
`;
