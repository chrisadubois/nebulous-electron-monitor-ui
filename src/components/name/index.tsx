import React, {ReactElement} from 'react';
import { Input } from "@chakra-ui/react"

const name = (): ReactElement => {
    return (
        <Input placeholder="Monitor Name" />
    );
}

export default name;