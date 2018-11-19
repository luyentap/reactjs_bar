import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { GraphBar } from './bar/component/bar';
import { root_store as store } from './bar/store';
import './style.css';
render(
  <Provider store={store}>
    <GraphBar ></GraphBar>
  </Provider>,
  document.getElementById("root")
);

 //#endregion
// class App extends Component {
//   // constructor() {
//   //   super();
//   // }

//   render() {
//     return (
//     //   <GraphBar>
//     //   </GraphBar>
//     // );
//     <Provider store={store}>
//         <div>
//             <GraphBar/>
//         </div>
//     </Provider>
// );
//   }
// }

// render(<App />, document.getElementById('root'));
