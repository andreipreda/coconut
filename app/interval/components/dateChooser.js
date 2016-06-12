import React from 'react';
import { Panel, Input } from 'rebass';

export const DateChooser = () =>
  <Panel>
    <Input type="date" name="start" label="Start Date" />
    <Input type="date" name="end" label="End date" />
  </Panel>;
