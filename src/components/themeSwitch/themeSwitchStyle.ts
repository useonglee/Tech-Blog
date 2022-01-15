import styled from 'styled-components';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

export const DarkMode = styled(MdDarkMode)`
  font-size: 25px;

  &:hover {
    color: #feb546;
  }
`;

export const LightMode = styled(MdLightMode)`
  font-size: 25px;

  &:hover {
    color: #36d169;
  }
`;
