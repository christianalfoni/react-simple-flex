# react-simple-flex
An intuitive abstraction over flexbox

**Note** This project is currently in its testing phase!

### Why does this exist?
Flexbox is awesome, but very hard to grasp. Especially *justifyContent*, *alignItems* and *alignContent* are not really intuitive. And their behaviour changes based on the *flexDirection*. So this little library just creates an intuitive abstraction over flexbox, making layouts super simple.

### Some examples
```js
import Flex from 'react-simple-flex';

function MyComponent() {
  return (
    <Flex row alignChildren="center center">
      I am on center of page
    </Flex>
  );
}
```

```js
import Flex from 'react-simple-flex';

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

function MyComponent() {
  return (
    <Flex column alignChildren="center">
      <Flex>I am vertically centered</Flex>
      <Flex alignSelf="center">So am I, but also horizontally centered</Flex>
    </Flex>
  );
}
```

### The API

It is recommended that you give your app/site some base css:

```css
html, body, #app {
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

**alignChildren="center center"**. Set the alignment of children on the two axis. With *row* you would say *alignChildren="right bottom"*, and with *column* the same thing would happen using *alignChildren="bottom right"*. Both axis also supports *space-between* and *space-around*. You do not have to think about multi line properties, this is done automatically as React knows the number of children

**grow**, **grow="2"**. Makes the flex container stretch and take up as much space as possible

**order="1"**. Sets the order of the Flex container, meaning that you can choose by each Flex item in what order to display them

**alignSelf="left"**. Lets the child Flex container to set its own alignment. Supports *left, top, right* and *bottom*

### How it differs from normal flex
- By default a Flex container does not stretch, you have to use **grow** explicitly. This just creates a more predictable behaviour
- No more thinking justify, align, content... just **alignChildren**, much like a background image position. The library will use the correct properties under the hood
- It is just a lot less to align... or justify?... in your head
