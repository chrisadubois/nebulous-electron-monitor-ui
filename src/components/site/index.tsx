import { FormControl, FormHelperText, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputLeftAddon, InputRightAddon } from "@chakra-ui/input";
import React, { ReactElement } from "react";

const site = (): ReactElement => {
    return (
        <FormControl id="Site">
        <FormLabel>Monitor Site</FormLabel>
        <InputGroup size="sm">
            <InputLeftAddon children="https://" />
            <Input placeholder="target,bestbuy,walmart ..." />
            <InputRightAddon children=".com" />
        </InputGroup>
        <FormHelperText>We'll perform selected actions when the monitor triggers</FormHelperText>
    </FormControl>
    )
}

export default site;
