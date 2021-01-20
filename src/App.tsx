import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle, { Signature } from './styles/global';
import Routes from './routes';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>

    <Signature>
      <a href="https://github.com/nathanopereira">@nathanopereira</a>
    </Signature>
    <GlobalStyle />
  </>
);

export default App;
