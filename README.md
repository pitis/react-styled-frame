# react-styled-frame

> React **iframe** that works well with **styled-components**.

This is a continuation of https://www.npmjs.com/package/react-styled-frame since their version doesn't work with newer React projects.

- Uses [react-frame-component](https://github.com/ryanseddon/react-frame-component) under the hood
- Makes it really simple to use styled-somponents in your iframes
- Useful for testing responsive layouts and ensuring isolation from the parent document

## Install

```bash
npm install @pitis/react-styled-frame
```

## Usage

Normally, when you try to use [react-frame-component](https://github.com/ryanseddon/react-frame-component) or [@compositor/kit's Frame](https://github.com/c8r/kit/blob/master/docs/Frame.md), CSS styles from [styled-components](https://github.com/styled-components/styled-components) and theming information won't propagate to the iframe.

The following example shows how easy it is to include styled content inside of an iframe using `react-styled-frame`.

```jsx
import StyledFrame from '@pitis/react-styled-frame'
import styled, { ThemeProvider } from 'styled-components'

function App() {
  return (
    <ThemeProvider theme={{ mode: 'dark' }}>
      <StyledFrame
        style={{
          width: 320,
          margin: '0 auto',
        }}
      >
        <InnerBox>
          <Text>Hello iframe!</Text>
        </InnerBox>
      </StyledFrame>
    </ThemeProvider>
  )
}

const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: red;
`

const Text = styled.h4`
  color: #fff;
`

export default App
```

This seems simple, but it's actually fairly involved. It requires using [StyleSheetManager](https://github.com/styled-components/styled-components/pull/1491) and [FrameContextConsumer](https://github.com/ryanseddon/react-frame-component#accessing-the-iframes-window-and-document) in order to properly propagate all styles from styled-components.

## Props

| Property   | Type   | Default                                               | Description                                                                    |
| :--------- | :----- | :---------------------------------------------------- | :----------------------------------------------------------------------------- |
| `children` | node   | **Required**                                          | Iframe body content.                                                           |
| `style`    | object | `{ display: 'block', overflow: 'scroll', border: 0 }` | Override iframe styles. Useful for setting width and height of iframe content. |
| `...rest`  | object |                                                       | Any other props will be passed onto `react-frame-component`.                   |

## Related

- [react-frame-component](https://github.com/ryanseddon/react-frame-component) - This component builds on top of `react-frame-component`.
- [@compositor/kit Frame](https://github.com/c8r/kit/blob/master/docs/Frame.md) - Renders children in an `<iframe>`.
- [styled-components](https://github.com/styled-components/styled-components) - Visual primitives for the component age.

## License

MIT © [Pitis Radu](https://github.com/pitis)
