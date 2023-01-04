import { renderHook } from '@testing-library/react-hooks/server';
import { useMemoRef } from '../..';

describe('useMemoRef', () => {
  it('should be defined', () => {
    expect(useMemoRef).toBeDefined();
  });

  it('should render', () => {
    const { result } = renderHook(() => useMemoRef(() => 0, []));
    expect(result.error).toBeUndefined();
  });
});
