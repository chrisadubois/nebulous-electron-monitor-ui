import { Checkbox, CheckboxGroup } from '@chakra-ui/checkbox';
import { Stack} from '@chakra-ui/layout';
import React, {ReactElement} from 'react';

const action = (): ReactElement => {
    return (
    <CheckboxGroup colorScheme="green" defaultValue={["naruto", "kakashi"]}>
        <Stack>
            <Checkbox value="Purchase">Purchase</Checkbox>
            <Checkbox value="Notify">Notify</Checkbox>
        </Stack>
    </CheckboxGroup>
    );
}

export default action;