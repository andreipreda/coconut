import 'babel-polyfill';
import test from 'ava';
import { put } from 'redux-saga/effects';
import { intervalAutoRun, CHANGE_START, CHANGE_END } from './../../app/interval';

test('SAGA: intervalAutoRun', t => {
  const gen = intervalAutoRun();

  t.deepEqual(
    gen.next().value,
    put({ type: CHANGE_START })
  );

  t.deepEqual(
    gen.next().value,
    put({ type: CHANGE_END })
  );

  t.is(
    gen.next().done,
    true
  );
});
