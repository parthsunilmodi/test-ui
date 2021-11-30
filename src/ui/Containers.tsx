import styled, { css } from 'styled-components'
import * as system from 'styled-system'
import { theme } from '../theme'

/**
 * Box that applies box-shadow, padding and margin
 */
interface BoxProps {
  minusMargin?: boolean,
}

/**
 * Flexbox Column that accepts `FlexboxProps` and `SpaceProps` and applies gap between children.
 */
export const Column = styled.div<system.SpaceProps & system.FlexboxProps>`
  ${system.space}
  display: flex;
  flex-direction: column;
  ${system.flexbox}

  & > * {
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 6px;
  }
`

/**
 * Flexbox Row that accepts `FlexboxProps` and `SpaceProps` and applies gap between children.
 */
export const Row = styled.div<system.SpaceProps & system.FlexboxProps & system.WidthProps>`
  ${system.space}
  ${system.width}

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  ${system.flexbox}

  & > * {
    box-sizing: border-box;
    margin-left: 6px;
    margin-right: 6px;
  }
  
  &.w-100 {
    width: 100%;
  }
`

/**
 * Responsive page container that centers it contents horizontally.
 * @info To support more responsive widths just duplicate `@media` block and replace `min/max-width` value.
 */
export const Page = styled.main<system.HeightProps>`
  position: relative;
  width: 100%;
  margin: 0 auto;
  .no-record {
    margin-top: 30px;
    color: ${theme.colors.primaryColor};
    justify-content: center;
  }
  @media (max-width: 768px) {
    max-width: 500px;
  }
  ${system.height}
  .mobile-view {
    display: none;
    @media screen and (max-width: 768px) {
      display: flex;
      
      height: 100%;
      width: 100%;
      align-items: center;
      text-align: center;
      .no-view {
        margin-top: 200px;
        font-size: 32px;
        font-weight: bold;
        color: ${theme.colors.primaryColor}
      }
    }
  }
  .tablet-view {
    display: flex;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  .quote-screen {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  .mobile-drawer {
    display: none;
  }
`
