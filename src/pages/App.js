import React, {useState}from 'react'
import { Switch, Route } from 'react-router-dom'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer'
// pages
import Home from './Home'
import About from './About'
import Contact from './Contact'
// css
import '../App.css'

const App = () => {
  const [linuxDisros] = useState({

    OS:
    [{
        
          Distibution:Fedora,
          Release:33,
          codename:Werewolf,
          mascot:false,
          status:Active,
        },

         { Distibution:OpenSuse,
          Release:15.3,
          Codename:Malachite,
          Mascot:true,
          Status:Active
          },
         
          {
          distibution:ClearLinux,
          release:350000,
          codename:false,
          mascot:Penguin,

          },

          {distibution:Arch_Linux,
          release:2021.09,
          codename:false,
          mascot:false,
          },
        ]
  })

const distroList = linuxDisros.OS.map(()=>console.log('HELLO'));
  return (
    <div id="app">
    <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    <Footer />
  </div>
  );
};

export default App;