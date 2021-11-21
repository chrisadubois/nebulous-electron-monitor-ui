import { ChakraProvider } from '@chakra-ui/react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Main from './components/main';

function render() {
  ReactDOM.render(
    <ChakraProvider>  
        <Main />
    </ChakraProvider>,
    document.getElementById('root')
  );
}
render();
