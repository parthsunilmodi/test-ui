import styled from 'styled-components'
import * as system from 'styled-system'

export const Title = styled.h1<system.TypographyProps>`
  margin: 16px 0;

  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 41px;

  text-transform: 'capitalize';

  color: ${(props) => props.theme.colors.primaryColor};
  ${system.typography}
`


