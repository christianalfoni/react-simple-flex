# react-simple-flex
An intuitive abstraction over flexbox

### Why does this exist?
Flexbox is awesome, but very hard to grasp. Especially *justifyContent*, *alignItems* and *alignContent* are not really intuitive. And their behaviour changes based on the *flexDirection*. So this little library just creates an intuitive abstraction over flexbox, making layouts super simple.

### What about the support for flexbox?
Of course Internet Explorer is lagging behind a bit, but yeah, you can use Flexbox: http://caniuse.com/#feat=flexbox. This project no IE11 fixes currently, but please help out with that if you like the lib and need it :)

### How it differs from normal flex
- By default a Flex container does not stretch, you have to use **grow** explicitly. This just creates a more predictable behaviour
- No more thinking justify, align, content... just **align**, much like a background image position. The library will use the correct properties under the hood
- It is just a lot less to align... or justify?... in your head

### Some examples
```js
import Flex from 'react-simple-flex';

// Using align, alignVertical or alignHorizontal will
// automatically set the Flex container as "row"
function MyComponent() {
  return (
    <Flex align="center center">
      I am on center of page
    </Flex>
  );
}
```

```js
import Flex from 'react-simple-flex';

// With no alignment you specifically have to set "row" or
// "column" to tell it to flex its children
function MyComponent() {
  return (
    <Flex row>
      <Flex>I only use the space I need</Flex>
      <Flex grow>I use as much space as possible</Flex>
    </Flex>
  );
}
```

```js
import Flex from 'react-simple-flex';

function MyComponent() {
  return (
    <Flex row>
      <Flex grow="1">I use half the space of the other one</Flex>
      <Flex grow="2">I use twice the space as the other one</Flex>
    </Flex>
  );
}
```

```js
import Flex from 'react-simple-flex';

// "alignVertical" and "alignHorizontal" aligns intuitively
// with the "row" and "column" property. In the example
// below we show the children in a column where they are
// vertically centered
function MyComponent() {
  return (
    <Flex column alignVertical="center">
      <Flex>I am vertically centered</Flex>
      <Flex alignSelf="center">So am I, but also horizontally centered</Flex>
    </Flex>
  );
}
```

```js
import Flex from 'react-simple-flex';

function MyComponent() {
  return (
    <Flex alignHorizontal="center">
      <Flex>I am horizontally centered</Flex>
      <Flex alignSelf="bottom">So am I, but also vertically at the bottom</Flex>
    </Flex>
  );
}
```

```js
import Flex from 'react-simple-flex';

function MyComponent() {
  return (
    <Flex align="center center">
      <Flex>I am horizontally and vertically centered</Flex>
      <Flex alignSelf="bottom">So am I, though at the bottom vertically</Flex>
    </Flex>
  );
}
```

```js
import Flex from 'react-simple-flex';

function MyComponent() {
  return (
    <Flex column align="center center">
      <Flex>I am horizontally and vertically centered</Flex>
      <Flex alignSelf="right">So am I, though to the right horizontally</Flex>
    </Flex>
  );
}
```

### The API

It is recommended that you give your app/site some base css:

```css
html, body, #app, #app > * {
  margin: 0;
  height: 100%;
}
```

**Flex**. By default the Flex container will be a normal container that justifies to any parent Flex containers. It does not grow or affect its children in any way

**row**. Makes the children line up horizontally

**reverseRow**. Reverses the children

**column**. Makes the children line up vertically

**reverseColumn**. Reverses the children

**wrap**. Allows the children to wrap

**reverseWrap**. Reversed wrap

**alignVertical="bottom"**. *Top, center, bottom, space-between and space-around* in *column* mode. The same with the addition of *stretch* in *row* mode

**alignHorizontal="right"**. *Left, center, right, space-between and space-around* in *row* mode. The same with the addition of *stretch* in *column* mode

**align="center center"**. This is just combining *vertical horizontal* values in *column* mode and *horizontal vertical* in *row* mode

**grow**, **grow="2"**. Makes the flex container stretch and take up as much space as possible

**order="1"**. Sets the order of the Flex container, meaning that you can choose by each Flex item in what order to display them

**alignSelf="left"**. Lets the child Flex container to set its own alignment. Supports *left, top, right* and *bottom
