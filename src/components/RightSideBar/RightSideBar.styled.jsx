import bgi from '../../assets/images/backroundImage/desktoprightSideBar.png';
import styled from 'styled-components';

export const SideBarRight = styled.div`
  @media screen and (min-width: 768px) {
    width: 768px;
    height: 326px;
    background-image: url(${bgi});
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: contain;
    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgi});
    }
  }
  @media screen and (min-width: 1280px) {
    background-image: url(${bgi});
    width: 517px;
    height: 850px;
    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgi});
    }
  }
`;
