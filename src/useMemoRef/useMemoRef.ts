import { useMemo, useRef } from 'react';

import type { DependencyList } from 'react';

/**
 * Like useMemo but with stable refference to avoid closure problem.
 *
 * @param factory useMemo factory function
 * @param deps useMemo dependency list
 * @returns useMemo result
 */
export const useMemoRef = <MemoValue>(factory: () => MemoValue, dependencyList: DependencyList) => {
  /* eslint-disable react-hooks/exhaustive-deps -- missing factory */
  const memo = useMemo(factory, dependencyList);
  const ref = useRef<MemoValue>(memo);

  ref.current = memo;

  return useMemo(
    () =>
      Object.freeze({
        get current() {
          return ref.current;
        },
      }),
    []
  );
};
