import React from "react"
import { Provider } from "react-redux"
import store from "../store"
import Main from "./Main"
import ItemForm from "./ItemForm"
import "../styles/base.css"

function App(props) {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>todos</h1>
        <ItemForm />
        <Main />
      </div>
    </Provider>
  )
}

export default App
