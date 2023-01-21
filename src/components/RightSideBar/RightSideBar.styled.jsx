import bgid1x from '../../assets/images/backroundImage/desktoprightSideBar-min.png';
import bgid2x from '../../assets/images/backroundImage/desktoprightSideBar.png';
import bgit1x from '../../assets/images/backroundImage/sidebarTablet1x-min.png';
import bgit2x from '../../assets/images/backroundImage/sidebarTablet2x-min.png';
import styled from 'styled-components';

export const SideBarRight = styled.div`
  @media screen and (min-width: 768px) {
    width: 768px;
    height: 326px;
    background-image: url(${bgit1x});
    background-repeat: no-repeat;
    background-size: contain;
    background-color: #F0F1F3;
    font-family: Verdana;
font-size: 14px;
font-weight: 400;
line-height: 17px;
letter-spacing: 0.04em;
color: #9B9FAA;

    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgit2x});
    }
  }
  @media screen and (min-width: 1280px) {
    background-image: url(${bgid1x});
    width: 517px;
    height: 100vh;
    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgid2x});
    }
  }
`;
