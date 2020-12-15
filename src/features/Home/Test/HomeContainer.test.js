  
import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import HomeContainer from '../Container/HomeContainer';

describe('Components: Dashboard', () => {
  const wrapper = shallow(<HomeContainer />);
  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });
});