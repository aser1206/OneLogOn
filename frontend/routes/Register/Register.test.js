import React from 'react';
import { shallow } from 'enzyme';
import Register from './Register';

test('renders without crashing', () => {
  myFetch.mockResponseOnce(JSON.stringify({}));
  const register = shallow(<Register />);
});
