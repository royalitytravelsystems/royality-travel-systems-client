import styled from 'styled-components';
import CarousalComponent from '../Components/Carousal';
import logo from './../../../assets/images/dott.png';

export const ControlledCarousal = styled(CarousalComponent)`
    .banner-1{
    background:url(${logo}) no-repeat 0px 0px;
    background-size:cover;
    position: relative;
    min-height:300px;
    }
    .banner{
    background-size:cover;
    position: relative;
    max-height:300px;
    }
    .w3-banner{
        padding: 13em 0 17em 0;
        text-align: center;
    }
    .banner-dott {
    background: url(${logo})repeat 0px 0px;
    background-size: 2px;
    -webkit-background-size: 2px;
    -moz-background-size: 2px;
    -o-background-size: 2px;
    -ms-background-size: 2px;
    }
    .banner-dott1 {
    background: url(../images/dott.png)repeat 0px 0px;
    background-size: 2px;
    -webkit-background-size: 2px;
    -moz-background-size: 2px;
    -o-background-size: 2px;
    -ms-background-size: 2px;
    padding:5em 0;
    }
    .top-banner-right {
    float:right;
    }
    .w3ls-phone {
    float:left;
    }
    .top-banner-right ul{
    padding:0;
    margin:0;
    }
    .top-banner-right ul li{
    display:inline-block;
    margin:0 1em;
    }
    .top-banner-right ul li:nth-child(4){
    margin-right:0;
    }
    .top-banner-right ul li a{
    color:#fff;
    font-size:1.2em;
    }
    .top-banner-right ul li a:hover{
    color: #CDDC39;
    }
    .w3ls-phone h2 {
    color: #FFFFFF;
    font-size: 1.2em;
    margin: 0;
    text-align: center;
    font-weight: 300;
    }
    i.fa.fa-phone {
    margin-left: 10px;
    color: #FFEB3B;
    }
    .banner-text {
    width: 50%;
    margin: 0 auto;
    }
    .banner-text h3 {
        font-size: 50px;
        text-transform: capitalize;
        font-weight: 600;
        letter-spacing: 1px;
        margin: 15px 0;
    }
   .carousel-caption {
       
       bottom:600px;
   }
   .photo-copyright{
        position: absolute;
        right: 15%;
        bottom: 20px;
        z-index: 999;
        color: #fff;
        text-align: center;
        font-size:10px;
   }
   @media screen and (max-width: 991px){
   }
   @media screen and (max-width: 414px){
    .banner-text {
        width: 100%;
        margin: 0 auto;
        }
    .banner-text h3 {
        font-size: 18px;
        text-transform: capitalize;
        font-weight: 600;
        letter-spacing: 1px;
        margin: 0 0;
    }
    .banner-text p {
        font-size:12px;
    }
   .carousel-caption {
       background-color:#651d31;
       bottom:20px;
   }
   .photo-copyright{
    font-size:5px;
}
  }
`;
