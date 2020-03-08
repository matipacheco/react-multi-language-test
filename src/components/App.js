import React from 'react';

import { LanguageProvider } from "../languages/language_provider";
import LanguageSelector from "../languages/language_selector";

import { SayHello } from "./SayHello";

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <nav className="navbar navbar-light bg-light justify-content-end">
          <span className="navbar-brand mb-0 h1">
            <LanguageSelector />
          </span>
        </nav>
      </div>

      <div className='text-center mt-5'>
        <SayHello/>
      </div>
    </LanguageProvider>
  );
}

export default App;
