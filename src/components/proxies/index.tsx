import { Select } from '@chakra-ui/select';
import React, {ReactElement} from 'react';
import { Stack } from '@chakra-ui/layout';

const proxies = (): ReactElement => {
    return (
        <Stack>
            <Select placeholder="proxy">
                <option value="proxy1">proxy1</option>
                <option value="proxy2">proxy2</option>
            </Select>
        </Stack>
    );
}

export default proxies;