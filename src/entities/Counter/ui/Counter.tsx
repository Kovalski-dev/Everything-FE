/* eslint-disable i18next/no-literal-string */
import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <Button
        onClick={increment}
        data-testid="increment-btn"
      >
        increment
      </Button>
      <Button
        data-testid="decrement-btn"
        onClick={decrement}
      >
        decrement
      </Button>
    </div>
  );
};
