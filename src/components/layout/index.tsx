import React, { ReactElement } from 'react';
import { Button, SimpleGrid
} from "@chakra-ui/react"
import Site from '../site';
import Name from '../name';
import Interval from '../interval';
import Action from '../action';
import Details from '../details';
import Proxies from '../proxies';
import Tags from '../tags';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const Layout = (): ReactElement => {
    return (
        <SimpleGrid columns={1} spacing={10}>
            <Name></Name>
            <Site></Site>
            <Tags></Tags>
            <Proxies></Proxies>
            <Interval></Interval>
            <Action></Action>
            <Details></Details>
            <Button size="lg" colorScheme="teal" rightIcon={<ArrowForwardIcon />} variant="outline">Add Monitor</Button>
        </SimpleGrid>
    );
};

export default Layout;