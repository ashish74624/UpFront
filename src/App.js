import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const [progress, setProgress] = useState(0)
  // state = {
  //   progress: 0
  // }
  // setProgress = (progress) => {
  //   this.setState({ progress: progress });
  // }

  return (
    <>
    {/* // <Router> */}
      <Navbar />
      <LoadingBar
        color='#f11946'
        progress={progress}
      // onLoaderFinished={() => setProgress(0)}
      />
      {/* <Routes> */}
        <News setProgress={setProgress} country="in" pageSize={8} key="General" category="General" /> 
         {/* Prvidinan Unique Key will force the react to reMount your element after Each Click */}
        {/* <Route exact path="/Business" element={<News setProgress={setProgress} country="in" pageSize={8} key="Business" category="Business" />} />
        <Route exact path="/Entertainment" element={<News setProgress={setProgress} country="in" pageSize={8} key="Entertainment" category="Entertainment" />} />
        <Route exact path="/Health" element={<News setProgress={setProgress} country="in" pageSize={8} key="Health" category="Health" />} />
        <Route exact path="/Science" element={<News setProgress={setProgress} country="in" pageSize={8} key="Science" category="Science" />} />
        <Route exact path="/Sports" element={<News setProgress={setProgress} country="in" pageSize={8} key="Sports" category="Sports" />} />
        <Route exact path="/Technology" element={<News setProgress={setProgress} country="in" pageSize={8} key="Technology" category="Technology" />} /> */}
      {/* </Routes>
    </Router> */}
    </>
  );
}

export default App