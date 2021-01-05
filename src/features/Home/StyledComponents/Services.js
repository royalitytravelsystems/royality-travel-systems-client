import styled from 'styled-components';
import Services from '../Components/Services';


export const ServicesComponent = styled(Services)`
margin-bottom:2em;
.two-grids {
    padding:0 0;
}
.wthree_head_section {
    margin-bottom: 0;
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
    font-size: 3em;
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
.w3_two_grid_right{
    padding:4em 4em 0;
}
.w3_two_grid_right h3{
    font-size:2em;
    color:#fff;
    text-transform:capitalize;
}
.w3_two_grid_right_grid {
    padding: 0;
}
.w3_two_grid_right_gridr h4 {
    color: #140b05;
    font-size: 1.2em;
    font-weight: 600;
    text-transform: uppercase;
}
.w3_two_grid_right_gridr p{
    color:#999999;
    line-height:2em;
}
.w3_two_grid_right_grid1 {
    width: 65px;
    height: 65px;
    text-align: center;
    border: 1px solid #ed1c24;
}
.w3_two_grid_right1:nth-child(2){
    padding:2em 0;
}
.w3_two_grid_right_grid1 {
    width: 65px;
    height: 65px;
    text-align: center;
    border: 1px solid #ed1c24;
}
.w3_two_grid_right1:hover .w3_two_grid_right_grid1{
    background:#ed1c24;
}
.w3_two_grid_right1:hover .w3_two_grid_right_grid1 i{
    color:#fff;
}
.w3_two_grid_right_grid1 i {
    font-size: 1.8em;
    color: #ed1c24;
    line-height: 2.2em;
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
        font-size: 1.5em;
    }
    .w3_two_grid_right_gridr h4 {
        font-size: 1em;
    }
    .w3_two_grid_right_gridr p{
        line-height:1.8em;
        font-size:13px;
    }
  }
`;
