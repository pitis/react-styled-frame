import React, { ReactElement } from 'react'
import Frame, {
  FrameContextConsumer,
  FrameContextProps,
} from 'react-frame-component'
import {
  StyleSheetManager,
  withTheme,
  ThemeProvider,
  DefaultTheme,
} from 'styled-components'

type ThemeFn = (outerTheme?: DefaultTheme | undefined) => DefaultTheme
type ThemeArgument = DefaultTheme | ThemeFn

type ThemeProviderProps = {
  children?: React.ReactNode
  theme: ThemeArgument
}
interface Props {
  theme: ThemeProviderProps
  children: ReactElement[]
  style: CSSStyleRule[]
}

export default withTheme((props: Props) => {
  const { theme, style = {}, children, ...rest } = props

  return (
    <Frame
      style={{
        display: 'block',
        overflow: 'scroll',
        border: 0,
        ...style,
      }}
      {...rest}
    >
      <FrameContextConsumer>
        {(frameContext: FrameContextProps) => (
          <StyleSheetManager target={(frameContext.document as Document).head}>
            {theme ? (
              <ThemeProvider theme={theme}>{children}</ThemeProvider>
            ) : (
              children
            )}
          </StyleSheetManager>
        )}
      </FrameContextConsumer>
    </Frame>
  )
})
