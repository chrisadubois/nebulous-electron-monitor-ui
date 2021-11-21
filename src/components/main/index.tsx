import React, { ReactElement } from 'react';
import Footer from '../footer';
import Header from '../header';
import Layout from '../layout';
import { ChakraProvider } from '@chakra-ui/react';

const Main = (): ReactElement => {
    return (
        <ChakraProvider>            
            <Header />
            <Layout />
            <Footer />
        </ChakraProvider>
    )
};

export default Main;