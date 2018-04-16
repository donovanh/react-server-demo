import React from 'react'
import { App } from './App'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

it('renders without crashing', () => {
  const wrapper = shallow(<App message={'Hello'} />)
  expect(toJson(wrapper)).toMatchSnapshot()
})
