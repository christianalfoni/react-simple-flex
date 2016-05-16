import {render} from 'react-dom';
import React from 'react';

import Flex from 'react-simple-flex';

render((
  <Flex row>
    <Flex grow>hey</Flex>
    <Flex grow>hopp</Flex>
  </Flex>
), document.querySelector('#app'));
