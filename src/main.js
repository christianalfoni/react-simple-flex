import {render} from 'react-dom';
import React from 'react';

import Flex from 'react-simple-flex';

render((
  <Flex>
    <Flex>hey</Flex>
    <Flex>hopp</Flex>
  </Flex>
), document.querySelector('#app'));
