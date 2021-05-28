import React from "react"
import { Router } from "@reach/router";
import './App.css';
// import BrightIdea from "./views/BrightIdea";
import CreateView from "./views/CreateView";
import DetailView from "./views/DetailView";
import EditView from "./views/EditView";
import IndexView from "./views/IndexView";
import Main from "./views/Main";
import Header from "./views/Header";
// import DeleteButton from "./components/DeleteButton";

// import CountLikes from "./views/CountLikes";
// import LogReg from './views/LogReg';


function App() {
  return (
  
    <div className="App">
      <Header path=""/>
      <Router>
        {/* <CountLikes /> */}
        <Main path="/main" />
        <IndexView path="/" />
        <CreateView path="/create" />
        {/* <BrightIdea path="/bright_idea" /> */}
        <DetailView path="/:id" />
        <EditView path="/:id/edit" />  
        
        {/* <LogReg path="/logreg" /> */}
      </Router>
    </div>
  );
}

export default App;





// import { Router } from "@reach/router";
// import './App.css';
// import CreateView from "./views/CreateView";
// import DetailView from "./views/DetailView";
// import EditView from "./views/EditView";
// import IndexView from "./views/IndexView";

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <IndexView path="/" />
//         <CreateView path="/create" />
//         <DetailView path="/:id" />
//         <EditView path="/:id/edit" />
//       </Router>
//     </div>
//   );
// }

// export default App;
