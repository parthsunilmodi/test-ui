/* eslint-disable */

import React from 'react'

export function changeEvent<T extends HTMLInputElement | HTMLTextAreaElement>(
  dispatch: React.Dispatch<React.SetStateAction<string>>,
  validators?: any[],
) {
  return (e: React.ChangeEvent<T>) => {
    // do validations
    dispatch(e.target.value)
  }
}
