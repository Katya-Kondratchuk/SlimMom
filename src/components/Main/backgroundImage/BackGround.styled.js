import styled from 'styled-components';
import desktopMainBg from '../../../assets/images/backroundImage/desktopMainBg-min.png';
import tabletMainBg from '../../../assets/images/backroundImage/tabletMainBg-min.png';

export const BgImg = styled.div`
  @media screen and (min-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    z-index: -1;

    width: 100vw;
    height: 100vh;

    background-image: url(${tabletMainBg});
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: contain;
    /* @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(../images/header/main-768@2x.png);
    } */
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${desktopMainBg});
  }
`;
