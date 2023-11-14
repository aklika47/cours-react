import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import "./assets/css/main.css";
/* celui ce react*/
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

/**ici la création d’un composant en fonction */

// const Application = () => {
//   return <div>
//   <h1>voici un composant</h1>
//   <p>lorem10</p>
//   </div>
// }

/**ici la création d’un composant un classe */

// class Application extends React.Component {
//   render() {
//     return (
//     <div>
//       <h1>voici un composant en classe</h1>
//       <p>lorem10</p>  
//     </div>
//     );
//   }
// }

/*créer par moi-même */
// ReactDOM.createRoot(document.getElementById("root")).render(<App/>)