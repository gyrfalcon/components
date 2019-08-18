// @flow strict
import * as React from 'react'

import { map } from 'ramda'

export type DataProps<T> = {
  disabled: bool,
  searchId: string,
  searchText: string,
  results: Array<T>,
  render: (T) => React.Node,
}

export type ActionProps = {
  onSearch: (searchText: string) => void,
}

export default (inputClassName: string, resultListStyle: string) => {
  const SearchArea = <T>({
    disabled,
    onSearch,
    searchId,
    searchText,
    render,
    results,
  }: DataProps<T> & ActionProps) => {
    return (
      <div>
        <input
          className={inputClassName}
          data-id={`search-${searchId}-input`}
          disabled={disabled}
          type='text'
          onChange={(event: SyntheticInputEvent<*>) => onSearch(event.target.value)}
          value={searchText}
        />
        <ul
          className={resultListStyle}
          data-id={`search-${searchId}-results`}
        >
          {map(render, results)}
        </ul>
      </div>
    )
  }

  return SearchArea
}
