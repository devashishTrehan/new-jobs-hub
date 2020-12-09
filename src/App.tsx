import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './App.css';
import { Loader } from './Components/Loader.component/Loader.component';
import { AppContextProvider } from './Context/App.context';
import { FilterAttribsContextProvider } from './Context/FilterAttribs.context';
import { UserContextProvider } from './Context/User.context';
import { MainRoute } from './Routes/Main.route';
import { Theme } from './Services/App.service';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: Theme.primary
    },
    secondary: {
      main: Theme.secondary
    },
  },
  typography: {
    fontFamily: `'Poppins', 'sans-serif'`
  }
})


function App() {

  const [IsPageLoaded, setIsPageLoaded] = useState(true);

  if (process.env.NODE_ENV !== 'development') {
    console.log = () => { }
  }

  useEffect(() => { }, [])


  return (
    <div className="App">


      <ThemeProvider theme={theme}>

        <AppContextProvider>

          <UserContextProvider>

            <FilterAttribsContextProvider>

              <MainRoute />

            </FilterAttribsContextProvider>

          </UserContextProvider>

        </AppContextProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
