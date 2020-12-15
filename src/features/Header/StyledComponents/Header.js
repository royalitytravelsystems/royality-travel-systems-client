import styled from 'styled-components';
import Header from '../Components/Header';


export const HeaderComponent = styled(Header)`
padding: 10px 0;
background: #333;
.top {
  padding: 10px 0;
  background: #333;
}
.fa {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.top-middle li {
  display: inline-block;
}
.top .top-middle, .top .top-right {
  padding: 0px;
}
.top .top-left {
  padding: 4px 0 0;
  text-align: right;
}
.top-left li {
  display: inline-block;
  color:#fff;
  margin-right: 2em;
  letter-spacing: 1px;
}
.top {
  padding: 10px 0;
  background: #333;
}
.top-middle {
  text-align: left;
}
.top-left p{
  color:#fff;
  font-size: 16px;
  margin-top: 3px;
}
.top-left i.fa {
  margin-right: 2px;
  color: #ffffff;
  font-size: 20px;
}

.top-middle li {
  margin-left: 15px;
}
.top-middle .fa-facebook {
  font-size: 16px;
  text-align: center;
  line-height: 29px;
  width: 30px;
  height: 30px;
}
.top-middle .fa-facebook:hover {
  background: #527dbd;
  color: #ececec;
  border: 1px solid #527dbd;
}
.top-middle .fa-instagram {
  font-size: 16px;
  text-align: center;
  line-height: 29px;
  width: 30px;
  height: 30px;
}
.top-middle .fa-instagram:hover {
  background: #527dbd;
  color: #ececec;
  border: 1px solid #527dbd;
}
.top-middle .fa-twitter {
  font-size: 16px;
  text-align: center;
  line-height: 29px;
  width: 30px;
  height: 30px;
}
.top-middle .fa-twitter:hover {
  background: #1da1f2;
  color: #ececec;
  border: 1px solid #1da1f2;
}
.top-middle .fa-youtube {
  font-size: 16px;
  text-align: center;
  line-height: 29px;
  width: 30px;
  height: 30px;
}
.top-middle .fa-youtube:hover {
  background: #dd4b39;
  color: #ececec;
  border: 1px solid #dd4b39;
}
.top-middle .fa-linkedin {
  font-size: 16px;
  text-align: center;
  line-height: 29px;
  width: 30px;
  height: 30px;
}
.top-middle .fa-linkedin:hover {
  background: #0077b5;
  color: #ececec;
  border: 1px solid #0077b5;
}
.top-middle i.fa {
  border: 1px solid #fff;
  color: #fff;
  transition: 0.5s all;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
  -ms-transition: 0.5s all;
}
.top-middle .fa-facebook {
  font-size: 16px;
  text-align: center;
  line-height: 29px;
  width: 30px;
  height: 30px;
}


@media screen and (max-width: 1080px){
  .top-left li {
    margin-right: 1em;
  }
}
@media screen and (max-width: 991px){
  .top-left {
    float:right;
  }
  .top-middle {
    float: left;
    text-align: center;
    margin-top: 10px;
  }
  .top-left {
    width: 100%;
    text-align: center;
}
 
}
@media (max-width: 767px){

}
@media screen and (max-width: 736px){
}

@media screen and (max-width: 667px){
  .top-middle li {
    margin-left: 0px;
  }
}
@media screen and (max-width: 640px){
  .top-left li {
    margin-right: 0.5em;
  }
}
@media screen and (max-width: 600px){
  
  .top-left {
    width: 62%;
  }
  .top-middle {
    width: 37%;
  }
}
@media screen and (max-width: 568px){
}
@media screen and (max-width: 480px){
  .top-left li {
    font-size: 14px;
  }
}
@media screen and (max-width: 414px){
  .top-middle {
    width: 100%;
    text-align: center;
    margin-top: 10px;
  }
  .top-left {
    width: 100%;
    text-align: center;
  }
}



@media screen and (max-width: 320px){
  .top-left li {
    margin-right: 0;
  }
  .top-left li {
    font-size: 15px;
  }
}
`;
