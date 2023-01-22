import bgid1x from '../../assets/images/backroundImage/desktoprightSideBar-min.png';
import bgid2x from '../../assets/images/backroundImage/desktoprightSideBar.png';
import bgit1x from '../../assets/images/backroundImage/sidebarTablet1x-min.png';
import bgit2x from '../../assets/images/backroundImage/sidebarTablet2x-min.png';
import styled from 'styled-components';

export const SideBarRight = styled.div`
    background-color: #F0F1F3;
color: #9B9FAA;
    padding-bottom: 40px;


  @media screen and (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 80px;
    width: 768px;
    height: 326px;
    background-repeat: no-repeat;
    background-size: contain;
    font-family: Verdana;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0.04em;
    background-image: url(${bgit1x});
background-position: 106% 100%;
background-size: 50%;
    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgit2x});
    }
  }
 @media screen and (min-width: 768px) and (max-width: 1279px){
  margin-left: auto;
  margin-right: auto;
 }

  @media screen and (min-width: 1280px) {
    background-image: url(${bgid1x});
    width: 517px;
    height: 850px;
    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgid2x});
    }
  }
`;
export const WrapperFilter = styled.div`

    @media screen and (max-width: 1280px) {
      max-width: 280px;
      max-height: 70px;
      padding-left: 35px;
    }
@media screen and (max-width: 767px){
padding-left:15px;
}
`