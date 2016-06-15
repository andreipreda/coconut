import 'babel-polyfill';
import test from 'ava';
import { put } from 'redux-saga/effects';
import { intervalAutoRun, CHANGE_START, CHANGE_END } from './../../app/interval';

test('SAGA: intervalAutoRun', t => {
  const gen = intervalAutoRun();

  t.deepEqual(
    gen.next().value,
    put({ type: CHANGE_START, start: Date.now() })
  );

  t.deepEqual(
    gen.next().value,
    put({ type: CHANGE_END, end: Date.now() })
  );

  t.is(
    gen.next().done,
    true
  );
});
