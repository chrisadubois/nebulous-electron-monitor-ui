import { Select } from '@chakra-ui/select';
import React, {ReactElement} from 'react';
import { Stack } from '@chakra-ui/layout';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Switch } from '@chakra-ui/switch';

const action = (): ReactElement => {
    return (
        <Stack>
            <Select placeholder="Email Notification">
                <option value="test@example.com">test@example.com</option>
                <option value="test2@example.com">test2@example.com</option>
            </Select>
            <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="email-alerts" mb="0">
                Use Card on File?
            </FormLabel>
            <Switch id="payment-card" />
            </FormControl>
        </Stack>
    );
}

export default action;