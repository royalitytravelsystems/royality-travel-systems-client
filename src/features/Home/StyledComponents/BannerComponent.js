import styled from 'styled-components';
import Banner from '../Components/Banner';
import CoverBanner from './../../../assets/images/Slide1.jpg';


export const BannerComponent = styled(Banner)`
max-width:100%!important;
.cover-column{
    padding:0 0 0 0;
}
.cover-caption {
    position: absolute;
    z-index: 10;
    top: 35%;
    bottom: 0;
    left: 10%;
    font-weight: 800;
    font-size: 56px;
    color: #fff;
    text-transform: capitalize;
    margin: 15px 0;
    width:35%;
}
.cover-text {
    position: absolute;
    z-index: 10;
    top: 65%;
    bottom: 0;
    left: 10%;
    font-size: 15px;
    color: #fff;
    text-transform: capitalize;
    margin: 15px 0;
    width:35%;
    font-weight: 300;
}
.cover{
    background: url(${CoverBanner}) no-repeat 0px 0px;
    background-size: cover;
    position: relative;
    
    height:100vh;
}

@media screen and (max-width: 1080px){
    .cover-caption {
        position: absolute;
        z-index: 10;
        top: 40%;
        bottom: 0;
        left: 10%;
        font-weight: 800;
        font-size: 25px;
        color: #fff;
        text-transform: capitalize;
        margin: 15px 0;
        width:35%;
    }
    .cover-text {
        position: absolute;
        z-index: 10;
        top: 65%;
        bottom: 0;
        left: 10%;
        font-size: 12px;
        color: #fff;
        text-transform: capitalize;
        margin: 15px 0;
        width:35%;
        font-weight: 300;
    }
  }
  @media screen and (max-width: 991px){
    .cover-caption {
        position: absolute;
        z-index: 10;
        top: 40%;
        bottom: 0;
        left: 10%;
        font-weight: 800;
        font-size: 20px;
        color: #fff;
        text-transform: capitalize;
        margin: 15px 0;
        width:35%;
    }
    .cover-text {
        position: absolute;
        z-index: 10;
        top: 65%;
        bottom: 0;
        left: 10%;
        font-size: 10px;
        color: #fff;
        text-transform: capitalize;
        margin: 15px 0;
        width:35%;
        font-weight: 300;
    }
   
  }
  @media (max-width: 767px){
    .cover-caption {
        position: absolute;
        z-index: 10;
        top: 30%;
        bottom: 0;
        left: 10%;
        font-weight: 800;
        font-size: 10px;
        color: #fff;
        text-transform: capitalize;
        margin: 15px 0;
        width:35%;
    }
    .cover-text {
        position: absolute;
        z-index: 10;
        top: 55%;
        bottom: 0;
        left: 10%;
        font-size: 6px;
        color: #fff;
        text-transform: capitalize;
        margin: 15px 0;
        width:35%;
        font-weight: 300;
    }
  }
  @media screen and (max-width: 736px){
    .cover-caption {
        position: absolute;
        z-index: 10;
        top: 30%;
        bottom: 0;
        left: 10%;
        font-weight: 800;
        font-size: 10px;
        color: #fff;
        text-transform: capitalize;
        margin: 15px 0;
        width:35%;
    }
    .cover-text {
        position: absolute;
        z-index: 10;
        top: 55%;
        bottom: 0;
        left: 10%;
        font-size: 6px;
        color: #fff;
        text-transform: capitalize;
        margin: 15px 0;
        width:35%;
        font-weight: 300;
    }
  }
@media screen and (max-width: 667px){
    .cover-caption {
        position: absolute;
        z-index: 10;
        top: 30%;
        bottom: 0;
        left: 10%;
        font-weight: 800;
        font-size: 10px;
        color: #fff;
        text-transform: capitalize;
        letter-spacing: 1px;
        margin: 15px 0;
        width:35%;
    }
    .cover-text {
        position: absolute;
        z-index: 10;
        top: 55%;
        bottom: 0;
        left: 10%;
        font-size: 6px;
        color: #fff;
        text-transform: capitalize;
        margin: 15px 0;
        width:35%;
        font-weight: 300;
    }
  }
  @media screen and (max-width: 640px){
    .cover-caption {
        position: absolute;
        z-index: 10;
        top: 30%;
        bottom: 0;
        left: 10%;
        font-weight: 800;
        font-size: 10px;
        color: #fff;
        text-transform: capitalize;
        margin: 15px 0;
        width:35%;
    }
    .cover-text {
        position: absolute;
        z-index: 10;
        top: 55%;
        bottom: 0;
        left: 10%;
        font-size: 6px;
        color: #fff;
        text-transform: capitalize;
        margin: 15px 0;
        width:35%;
        font-weight: 300;
    }
  }
  @media screen and (max-width: 600px){
    .cover-caption {
        position: absolute;
        z-index: 10;
        top: 30%;
        bottom: 0;
        left: 10%;
        font-weight: 800;
        font-size: 10px;
        color: #fff;
        text-transform: capitalize;
        margin: 15px 0;
        width:35%;
    }
    .cover-text {
        position: absolute;
        z-index: 10;
        top: 55%;
        bottom: 0;
        left: 10%;
        font-size: 6px;
        color: #fff;
        text-transform: capitalize;
        margin: 15px 0;
        width:35%;
        font-weight: 300;
    }
  }
  @media screen and (max-width: 568px){
    .cover-caption {
        position: absolute;
        z-index: 10;
        top: 30%;
        bottom: 0;
        left: 10%;
        font-weight: 800;
        font-size: 12px;
        color: #fff;
        text-transform: capitalize;
        margin: 15px 0;
        width:35%;
    }
    .cover-text {
        position: absolute;
        z-index: 10;
        top: 55%;
        bottom: 0;
        left: 10%;
        font-size: 6px;
        color: #fff;
        text-transform: capitalize;
        margin: 15px 0;
        width:35%;
        font-weight: 300;
    }
  }
  @media screen and (max-width: 480px){
    .cover-caption {
        position: absolute;
        z-index: 10;
        top: 30%;
        bottom: 0;
        left: 10%;
        font-weight: 800;
        font-size: 10px;
        color: #fff;
        text-transform: capitalize;
        margin: 15px 0;
        width:35%;
    }
    .cover-text {
        position: absolute;
        z-index: 10;
        top: 55%;
        bottom: 0;
        left: 10%;
        font-size: 6px;
        color: #fff;
        text-transform: capitalize;
        margin: 15px 0;
        width:35%;
        font-weight: 300;
    }
  }
@media screen and (max-width: 414px){
    .cover-caption {
        position: absolute;
        z-index: 10;
        top: 25%;
        bottom: 0;
        left: 10%;
        font-weight: 800;
        font-size: 8px;
        color: #fff;
        text-transform: capitalize;
        margin: 15px 0;
        width:35%;
    }
    .cover-text {
        position: absolute;
        z-index: 10;
        top: 50%;
        bottom: 0;
        left: 10%;
        font-size: 5px;
        color: #fff;
        text-transform: capitalize;
        margin: 15px 0;
        width:35%;
        font-weight: 300;
    }
}
@media screen and (max-width: 320px){
    .cover-caption {
        position: absolute;
        z-index: 10;
        top: 25%;
        bottom: 0;
        left: 10%;
        font-weight: 800;
        font-size: 6px;
        color: #fff;
        text-transform: capitalize;
        margin: 15px 0;
        width:35%;
    }
    .cover-text {
        position: absolute;
        z-index: 10;
        top: 50%;
        bottom: 0;
        left: 10%;
        font-size: 5px;
        color: #fff;
        text-transform: capitalize;
        margin: 15px 0;
        width:35%;
        font-weight: 300;
    }
  }
`;
