import { FormLabel } from '@chakra-ui/form-control';
import { Box } from '@chakra-ui/layout';
import { Slider, SliderFilledTrack, SliderThumb, SliderTrack } from '@chakra-ui/slider';
import React, {ReactElement, useState} from 'react';

const interval = (): ReactElement => {
    const [value, setValue] = useState<number>(60);

    const handleChange = (value: number) => {
        setValue(value);
    }

    return (
        <>
        <FormLabel>{`Interval units - ${value}`}</FormLabel>
        <Slider onChange={handleChange} defaultValue={60} min={0} max={240} step={10}>
            <SliderTrack>
                <Box position="relative" right={10} />
                <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb boxSize={6} />
        </Slider>
        </>
    );
}

export default interval;