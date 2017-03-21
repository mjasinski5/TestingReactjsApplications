import { getUSD, getEUR } from './Courses';

export function plnToUsd(pln) {
  const USD_COURSE = getUSD();

  return _calculate(pln, USD_COURSE);
}

function _calculate(value, course) {
  if(course <= 0 || value <= 0 ) return 0;

  const edgeNumberValue = Number.MAX_SAFE_INTEGER;

  if(value > edgeNumberValue || !_isNumeric(value)) throw new Error();

  return Number((value/course).toFixed(0));
}

function _isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
