import { State, Action, StateContext, Selector } from '@ngxs/store';
import { TestAction } from './test.actions';

export class TestStateModel {
  public items: string[];
}

@State<TestStateModel>({
  name: 'test',
  defaults: {
    items: ['joaq', 'ngxs', 'hmr']
  }
})
export class TestState {

  @Selector()
  static items(state: string[]) {
    return state;
  }


  @Action(TestAction)
  add(ctx: StateContext<TestStateModel>, action: TestAction) {
    const state = ctx.getState();
    ctx.setState({ items: [...state.items, action.payload] });
  }
}
