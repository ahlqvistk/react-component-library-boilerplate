import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';

import Example from '../components/example';

storiesOf('Example', module)
  .add('Default example', withInfo()(() => (
    <Example />
  )))
  .add('This is an example', withInfo()(() => (
    <Example text='This is an example' />
  )));
