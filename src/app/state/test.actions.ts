export class TestAction {
  static readonly type = '[Test] Add item';
  constructor(public payload: string) { }
}
