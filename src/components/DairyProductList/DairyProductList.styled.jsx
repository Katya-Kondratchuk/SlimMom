import { List } from '@mui/material';

import styled from 'styled-components';

export const ListStyled = styled(List)`
  &.MuiList-root {
    margin-top: 40px;
    width: 650px;
    position: relative;
    overflow: auto;
    max-height: 270px;
  }
`;
