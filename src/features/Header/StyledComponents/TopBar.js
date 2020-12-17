import styled from 'styled-components';
import TopBar from '../Components/TopBar';

export const TopBarComponent = styled(TopBar)`
background: #fff;
padding: 10px 0;

.top-bar {.
background: #fff;
padding: 10px 0;
}

.logo {
width: 60%;
float: left;
}
.logo a {
font-size: 40px;
font-weight: bolder;
color: #EEE;
}
.logo a:hover {
color: #FFF;
}

.info {
width: 40%;
float: left;
padding-top: 20px;
}
.info .email, .info .phone {
width: 50%;
float: left;
}
.info p {
color: #EEE;
font-size: 13px;
}
.info a {
color: #FFF;
}
.info a:hover {
color: #009688;
}
.info span.glyphicon {
  margin-right: 5px;
}
.navbar-brand {
  line-height: 0px !important;
  float: none;
  padding: 15px 15px !important;
  
}
.navbar-logo {
  width:50% !important;
}

nav.linkEffects.linkHoverEffect_12 ul {
  margin-top: 6px;
}
.dropdown-menu > li > a {
  padding: 0px;
  color:#fff;
}
.navbar {
  margin-bottom: 0;
  padding:0px;
}
.navbar-nav {
float: right;
}
.navbar-default {
background:none;
border-color: rgba(103, 80, 31, 0);
}
.navbar-default .navbar-brand {

font-size: 35px;
font-weight: 600;
text-decoration: none;
}
a.navbar-brand img {
    display: inline-block;
}
.navbar-default .navbar-collapse, .navbar-default .navbar-form {
padding: 0;
float: left;
margin-left: 4em;
}
.navbar-default .navbar-brand:hover {
color: #fff;
text-decoration: none;
}
a.navbar-brand span {
color: #146eb4;
}
.navbar {
position: relative;
min-height: inherit;
}
.navbar-header {
margin-top: 5px;
}
.navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus {
background: none;
}
.navbar-default .navbar-nav > li > a {
color:#000;
}
.navbar-collapse {
padding: 0;
border-top: none;
box-shadow: none;
}
.navbar-default .navbar-collapse, .navbar-default .navbar-form {
border: none;
}
.navbar-right {
float: none !important;
margin-right: 0;
margin-left: 0em;
}
.navbar-nav {
float: right !important;
margin: 6px 0 0;
}

.nav > li > a,.agile_short_dropdown li a {
}

.dropdown-menu {
background-color: rgba(0, 0, 0, 0.24) ! important;
}
ul.dropdown-menu {
background: rgba(0, 0, 0, 0.24);
box-shadow: 0 0 0;
border: none;
margin: 0;
top: 4em;
right: 27px ! important;
min-width: 90px;
}
.dropdown-menu>li>a:hover, .dropdown-menu>li>a:focus {
background-color: rgba(0, 0, 0, 0.24) ! important;
color: #fff ! important;
}
.w3_agile_login{
float:right;
}
.w3_agile_login a i{
padding: .5em .7em;
border: 1px solid #fff;
color: #fff;
font-size: 1em;
margin-top: 1em;
}
.navbar-nav > li > a {
padding: 0px;
}
.navbar-default .navbar-nav > .open > a, .navbar-default .navbar-nav > .open > a:hover, .navbar-default .navbar-nav > .open > a:focus {
color: #fff;
background-color: transparent;
}
.navbar-default .navbar-nav > .active.open > a{
color: #f62b2b;
}
.agile_short_dropdown li a {
padding: 8px 20px;
color: #fff;
text-align: center;
}
.nav-link .active {
  background-color: #651d31;
}
.nav-pills .nav-link.active, .nav-pills .show>.nav-link {
  color: #fff;
  background-color: #651d31;
}

@media screen and (max-width: 991px){
  .navbar-nav {
    margin-left: 2em;
  }
  .top .top-left {
    float:right;
  }
  .top-middle {
    float: left;
  }
  nav#cl-effect-15 ul li {
    padding: 12px 7px;
  }
  .navbar-default .navbar-collapse, .navbar-default .navbar-form {
    margin-left: 2em;
  }
  .about {
    padding: 3em 0;
  }
  .navbar-brand {
    width:80%;
  }
}
@media (max-width: 767px){
  
 
  .navbar-default .navbar-toggle:hover, .navbar-default .navbar-toggle:focus {
    background-color:transparent;
  }
  .navbar-toggle {
    margin: .5em 0 0;
  }
  .navbar-default .navbar-collapse, .navbar-default .navbar-form {
    border: none;
    width: 100%;
    background: rgba(0, 0, 0, 0.81);
    z-index: 999;
  }
  .navbar-nav > li > a {
    padding: 0 0 0;
    margin-bottom:0px;
  }
  .navbar-nav {
    margin: 7px;
    text-align: center;
  }
  .navbar-nav .open .dropdown-menu {
    width: 100%;
    margin: 0 auto;
    text-align:center;
    background-color: rgb(255, 255, 255);
    border-radius: 0;
  }
  .navbar-nav {
    float: none !important;
  }
  .navbar-default .navbar-nav>.open>a, .navbar-default .navbar-nav>.open>a:hover, .navbar-default .navbar-nav>.open>a:focus {
      background-color: rgba(73, 73, 73, 0.03) ! important;
  }
  .navbar-default .navbar-nav > li > a {
      color: #fff;
  }
  nav#cl-effect-15 ul li {
      display: block;
  }
  .navbar-default .navbar-collapse, .navbar-default .navbar-form {
      margin-left: 0em;
  }
  .navbar-brand {
    width:80%;
  }
}

@media (max-width: 736px){
  .navbar {
    padding:0;
  }
  .navbar-toggle {
      margin: 4px 14px 0 0;
  }
  .navbar-brand {
    width:80%;
  }
}
@media screen and (max-width: 667px){
  .navbar-toggle {
    top: -20%;
  }
  .navbar-brand {
    width:80%;
  }
}
@media screen and (max-width: 480px){
  .navbar-brand {
    width:80%;
  }
}
@media screen and (max-width: 414px){
  .navbar-default .navbar-brand {
    font-size: 26px;
    width:70%;
  }
  .navbar-logo {
    width:100% !important;
  }
}
@media screen and (max-width: 320px){
  .navbar-brand {
    width:80%;
  }
}

`;
