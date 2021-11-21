import { AddIcon } from '@chakra-ui/icons';
import { HStack } from '@chakra-ui/layout';
import { Tag, TagLabel, TagRightIcon } from '@chakra-ui/tag';
import React, {ReactElement} from 'react';

const tags = (): ReactElement => {

    return (
    <HStack spacing={4}>
        <Tag variant="outline" colorScheme="blue">
            <TagLabel>Sku:231827387</TagLabel>
            <TagRightIcon as={AddIcon} />
        </Tag>
        <Tag variant="outline" colorScheme="blue">
            <TagLabel>Keyword:Available</TagLabel>
            <TagRightIcon as={AddIcon} />
        </Tag>
    </HStack>
    );
};

export default tags