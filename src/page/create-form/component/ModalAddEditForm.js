import React, { useState, useEffect } from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Input,
    Button,
    FormControl,
    FormLabel,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper
} from "@chakra-ui/react";

const ModalAddEditForm = (props) => {
    function getRandomInt() {
        return Math.floor(Math.random() * 99999);
    }
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [input3, setInput3] = useState("");
    useEffect(() => {
        setInput1(props.dataOnEdit.formName || "")
        setInput2(props.dataOnEdit.description || "")
        setInput3(props.dataOnEdit.totalData || "")
    }, [props.dataOnEdit])
    

    const handleSubmit = () => {
        const payload = {
            id: getRandomInt(),
            formName: input1,
            description: input2,
            totalData: input3,
            dataForm: [
            ]
        }
        props.onSubmit(payload)
        props.onClose();
    };
    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Add / Edit Data</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <FormControl >
                        <FormLabel>Form Name</FormLabel>
                        <Input placeholder="Name" value={input1} onChange={(e) => setInput1(e.target.value)} />
                    </FormControl>
                    <FormControl my={5} >
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
                    </FormControl>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={handleSubmit}>Submit</Button>
                    <Button onClick={props.onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default ModalAddEditForm