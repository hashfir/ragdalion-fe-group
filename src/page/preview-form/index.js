import React from 'react'
import {
    Input,
    FormControl,
    FormLabel,
    Box,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Text,
    Center
} from "@chakra-ui/react";

import { useLocation } from 'react-router-dom';

const PreviewForm = (props) => {
    const { state } = useLocation();

    const forms = (param, properties, id) => {
        if (param === 'number') {
            if (properties === "integer") {
                return (
                    <NumberInput precision={0} step={1}>
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>)
            }
            if (properties === "float") {
                return (
                    <NumberInput precision={1} step={0.1}>
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>)
            }
            if (properties === "positive") {
                return (
                    <NumberInput precision={0} min={0}>
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>)

            }
            if (properties === "negative") {
                return (
                    <NumberInput precision={0} max={0}>
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>)
            }
        }
        if (param === 'text') {
            return <Input maxLength={properties} />
        }
        if (param === 'date') {
            return <Input type="date" />
        }
    }

    return (
        <Center height="100vh">
            <Box width="50%">
                <Text textTransform={'capitalize'} as='b' fontSize='3xl' >{state.formName}</Text>
                {
                    state?.dataForm.map(el => (
                        <FormControl >
                            <FormLabel>{el.label}</FormLabel>
                            {forms(el.dataType, el.properties, el.id)}
                            {/* <Input
                            placeholder="Name"
                        // value={input1} 
                        // onChange={(e) => setInput1(e.target.value)} 
                        /> */}
                        </FormControl>
                    ))
                }
                {/* <FormControl >
                <FormLabel>Form Name</FormLabel>
                <Input placeholder="Name" value={input1} onChange={(e) => setInput1(e.target.value)} />
            </FormControl>
            <FormControl my2={5} >
                <FormLabel>Description</FormLabel>
                <Input placeholder="Description" value={input2} onChange={(e) => setInput2(e.target.value)} />
            </FormControl>
            <FormControl >
                <FormLabel>totalData</FormLabel>
                <NumberInput value={input3} onChange={(e) => setInput3(parseInt(e))} >
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </FormControl> */}
            </Box>
        </Center>
    )
}

export default PreviewForm