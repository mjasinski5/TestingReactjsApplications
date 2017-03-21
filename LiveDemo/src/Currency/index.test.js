import React from 'react';
import ReactDOM from 'react-dom';
import { plnToUsd } from './index';

jest.mock('./Courses');
import * as courses from './Courses';

test('should return X when course is Y', () => {

  courses.getUSD.mockImplementation(() => 4);

  const result = plnToUsd(100);
  expect(result).toBe(25);
})


test('should return 0 when course is 0', () => {

  courses.getUSD.mockImplementation(() => 0);

  const result = plnToUsd(100);
  expect(result).toBe(0);
});

test('should return 0 when course is < 0', () => {

  courses.getUSD.mockImplementation(() => -1);

  const result = plnToUsd(100);
  expect(result).toBe(0);
});

test('should return 0 when amount is 0', () => {

  courses.getUSD.mockImplementation(() => 1);

  const result = plnToUsd(0);
  expect(result).toBe(0);
});

test('should throw error when amount is to high (>9007199254740991)', () => {

  courses.getUSD.mockImplementation(() => 1);
  const edgeNumberValue = Number.MAX_SAFE_INTEGER;

  expect(() => plnToUsd(edgeNumberValue + 1)).toThrow();
});

test('should throw error when amount is string type)', () => {

  courses.getUSD.mockImplementation(() => 1);
  const edgeNumberValue = Number.MAX_SAFE_INTEGER;

  expect(() => plnToUsd("stringValue")).toThrow();
});

test('should try to parse whe...', () => {

  courses.getUSD.mockImplementation(() => 1);
  const result = plnToUsd('100');

  expect(result).toBe(100);
});
