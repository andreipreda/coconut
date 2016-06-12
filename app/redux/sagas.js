import { intervalAutoRun } from './../interval';

export function* sagasToRun() {
  yield intervalAutoRun();
}
