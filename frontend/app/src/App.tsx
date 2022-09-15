import React, { FC, Suspense } from 'react';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@popr/ui';
import Loading from 'components/Loading';
import AppRoutes from 'routes/AppRoutes';
import ReactQueryProvider from 'providers/ReactQueryProvider';
import 'theme';

const App: FC = () => (
  <Suspense fallback={<Loading />}>
    <ThemeProvider theme={theme}>
      <ReactQueryProvider>
        <HashRouter>
          <AppRoutes />
        </HashRouter>
      </ReactQueryProvider>
    </ThemeProvider>
  </Suspense>
);

export default App;
