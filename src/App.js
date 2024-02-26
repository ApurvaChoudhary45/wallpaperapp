import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Picture from './components/Picture'
import { HashRouter, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';


function App() {
  const[progress, setprogress] = useState(0)
  return (
    <div>
      <HashRouter>
        <Navbar />
        <LoadingBar
          color='#93deff'
          height={3}
          progress={progress}

        />
        <Routes>
          <Route exact path="/" element={<Picture setprogress = {setprogress}  key="home" category="home" />} />
          <Route exact path="/home" element={<Picture setprogress = {setprogress} key="home" category="home" />} />
          <Route exact path="/nature" element={<Picture setprogress = {setprogress} key="nature" category="nature" />} />
          <Route exact path="/animals" element={<Picture setprogress = {setprogress} key="animals" category="animals" />} />
          <Route exact path="/cars" element={<Picture setprogress = {setprogress}  key="cars" category="cars" />} />
          <Route exact path="/health" element={<Picture setprogress = {setprogress} key="health" category="health" />} />
          <Route exact path="/mountains" element={<Picture setprogress = {setprogress}  key="mountains" category="mountains" />} />
          <Route exact path="/sports" element={<Picture setprogress = {setprogress} key="sports" category="sports" />} />
          <Route exact path="/technology" element={<Picture setprogress = {setprogress} key="technology" category="technology" />} />
          <Route exact path="/abstract" element={<Picture setprogress = {setprogress}  key="abstract" category="abstract" />} />
          <Route exact path="/wildlife" element={<Picture setprogress = {setprogress} key="wildlife" category="wildlife" />} />
        </Routes>
      </HashRouter>
      
    </div>
  )
}

export default App

