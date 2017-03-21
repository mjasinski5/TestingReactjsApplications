import React from 'react';

import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Menu from './index';

it('should display menu', () => {

  const menu = shallow(
    <Menu />
  );

  expect(menu.find('.menu').length).toEqual(1);
});

it('should display additional category', () => {
  const isLoggedIn = true;
  const userName = "Mariusz";
  const logoutMock = jest.fn();

  const menu = shallow(
    <Menu isLoggedIn={isLoggedIn} userName={userName} logout={logoutMock}/>
  )

  expect(menu.find('.additionalElement').length).toEqual(1);
  expect(menu.find('.additionalElement').text()).toContain(userName);

  menu.find('.logoutButton').simulate('click');

  expect(logoutMock).toHaveBeenCalled();

});


it('better life with snapshots -  1 :)', () => {
  const isLoggedIn = true;
  const userName = "Mariusz";
  const logoutMock = jest.fn();

  const menu = renderer.create(
    <Menu isLoggedIn={isLoggedIn} userName={userName} logout={logoutMock}/>
  ).toJSON();

  expect(menu).toMatchSnapshot();


});

it('better life with snapshots -  2 :)', () => {
  const isLoggedIn = false;
  
  const menu = renderer.create(
    <Menu isLoggedIn={isLoggedIn} />
  ).toJSON();

  expect(menu).toMatchSnapshot();
});
