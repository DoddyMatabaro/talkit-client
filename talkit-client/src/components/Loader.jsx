import React from 'react'
import { usePromiseTracker } from "react-promise-tracker";

const Loader = () => {
    const { promiseInProgress } = usePromiseTracker();
  return (
    promiseInProgress &&  <h1>somme async loading in progress</h1>
  )
}

export default Loader