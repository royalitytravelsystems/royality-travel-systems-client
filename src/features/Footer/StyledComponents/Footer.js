import styled from 'styled-components';
import Footer from '../Components/Footer';


export const FooterComponent = styled(Footer)`
background: #000;
padding:4em 0;

.agile_footer_grid h3,.wthree_footer_grid_right h3{
 font-size: 1.6em;
    color: #fff;
    padding-bottom: .5em;
    position: relative;   
    margin-bottom: 1.5em;
}

.agile_footer_grid p{
    color:#999;
    line-height:2em;
    margin-bottom:2em;
}
.agileits_w3layouts_footer_grid_list li,.w3_address li{
    display:block;
    margin-bottom:1em;
}
.agileits_w3layouts_footer_grid_list li i{
    color:#ed1c24;
    padding-right:1em;
}
.agileits_w3layouts_footer_grid_list li a{
    color: #999;
    text-decoration: none;
    line-height: 1.5em;
}
.agileits_w3layouts_footer_grid_list li a:hover{
    color:#ed1c24;
}
.agileits_w3layouts_footer_grid_list li:last-child,.w3_address li:last-child{
    margin-bottom:0;
}
.w3_address li{
    color: #999;
}
.w3_address li i {
    padding: .5em 0em;
    margin-right: 1.5em;
}
.w3_address li span {
    display: block;
    margin-left: 2.5em;
}
.w3_address li a{
    color: #999;
    text-decoration: none;
}
.w3_address li a:hover{
    color: #fff;
    text-decoration: none;
}
.w3_agileits_footer_grids{
    margin:3em 0;
}
.wthree_footer_grid_right input[type="email"]{
    outline: none;
    padding: 12px;
    background: rgb(27, 27, 27);
    font-size: 1em;
    color: #fff;
    width: 70%;
    margin-right: 1em;
    border: none;
    letter-spacing:1px;
}
.wthree_footer_grid_right input[type="email"]::-webkit-input-placeholder{
    color:#ffff !important;
}
.wthree_footer_grid_right input[type="submit"]{
    outline: none;
    padding: 12px 0;
    background: #ed1c24;
    font-size: 1em;
    color: #fff;
    width: 20%;
    border: none;
}
.wthree_footer_grid_right input[type="submit"]:hover{
    background:#b06010; 
}
.agileinfo_copyright p{
    color:#999;
    line-height:2em;
    text-align:center;
}
.agileinfo_copyright p a{
    color:#ed1c24;
    text-decoration:underline;
}
.agileinfo_copyright p a:hover{
    color:#fff;
}
.agileinfo_copyright {
    background: #111;
    padding: 1em 0;
}
.agileinfo_social_icons {
    float: right;
    margin: 0.5em 0em 0 0;
}
.agileits_social_list li{
    display:inline-block;
    margin-right:5px;
    }
.agileits_social_list li a{
    width: 30px;
    height: 30px;
    color: #fff;
    text-align: center;
    display: inline-block;
    font-size: 12px;
    border-radius: 25px;
}
.agileits_social_list li a i{
    line-height:2.2em;
}
.agileits_social_list li a:hover{
    color:#b06010;
    border: 2px solid #b06010;
    background:none;
}
a.w3_agile_facebook{
    background:#3b5998;
    border:2px solid #3b5998;
}
a.w3_agile_instagram{
    background:#b0338b;
    border:2px solid #b0338b;
}
a.w3_agile_youtube{
    background:#f70000;
    border:2px solid #f70000;
}
a.w3_agile_vimeo{
    background:#f26522;
    border:2px solid #f26522;
}
@media screen and (max-width: 991px){
    .agile_footer_grid h3, .wthree_footer_grid_right h3 {
        padding-bottom: 1em;
        margin-bottom: 0;
    }
    .agile_footer_grid {
        margin-bottom: 1.5em;
    }
}
@media screen and (max-width: 414px){
    .agile_footer_grid h3, .wthree_footer_grid_right h3 {
        font-size: 1.4em;
    }
}
@media screen and (max-width: 384px){
    .agile_footer_grid h3, .wthree_footer_grid_right h3 {
        letter-spacing: 0px;
    }
}
`;
