import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { AppContainer } from "react-hot-loader";
import { createStore } from "redux";
import { Provider } from "react-redux";
import ticTacReducer from "./reducers/ticTacReducer";

const store = createStore(ticTacReducer);

let unsubscribe = store.subscribe(() => console.log(store.getState()));

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,

    document.getElementById("react-app-root")
  );
};

render(App);

/*eslint-disable */
if (module.hot) {
  module.hot.accept("./components/App", () => {
    render(App);
  });
}
/*eslint-enable */
