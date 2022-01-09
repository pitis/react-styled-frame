import React, { ReactElement } from 'react'
import Frame, { FrameContextConsumer } from 'react-frame-component'
import {
  StyleSheetManager,
  withTheme,
  ThemeProvider,
  ThemeProviderProps,
} from 'styled-components'

interface Props {
  theme: ThemeProviderProps<{}>
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
        {(frameContext: { document: { head: HTMLElement | undefined } }) => (
          <StyleSheetManager target={frameContext.document.head}>
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
