import styled from 'styled-components';

export const TagStyle = styled.span<{ margin: string }>`
  margin-bottom: ${({ margin }) => margin};

  & > a {
    margin-right: 20px;
    color: ${({ theme }) => theme.color.main};
  }
`;
