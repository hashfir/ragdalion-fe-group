import React from 'react'
import { Box, Flex, FormControl, FormLabel, Input, IconButton, Text, Button, Spacer, Select } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

const AddForm = (props) => {
    const {
        id,
        data,
        addData,
        deleteData,
        handlePreview,
        save
    } = props;
    const dataType = [
        'text',
        'date',
        'number',
    ]
    const typeNumber = [
        'integer',
        'float',
        'positive',
        'negative',
    ]
    return (
        < div >
            <Flex>
                <Text as='b' fontSize='3xl'>Add/Edit Form Unik</Text>
                <Spacer />
                <Button colorScheme='blue'  onClick={()=>handlePreview(id)} >Preview</Button>
                <Button colorScheme='green' ml={4} onClick={()=>save()}>Save</Button>
            </Flex>
            {data.length > 0 ? data.map(el => (
                <Box w="full" bg="white" boxShadow="md" rounded="md" p={4} key={el.id} mt={5}>
                    <Flex justify="space-between" align="center" mb={4}>
                        <FormControl>
                            <FormLabel>tipe data</FormLabel>
                            <Select placeholder='Select option' value={el.dataType}>
                                {dataType.map(dt => (
                                    <option value={dt}>{dt}</option>
                                ))}

                            </Select>
                        </FormControl>
                        <FormControl mx={4}>
                            <FormLabel>label</FormLabel>
                            <Input placeholder="label" value={el.label} />
                        </FormControl>
                        {
                            el.dataType === 'number' ?
                                <FormControl>
                                    <FormLabel>tipe number</FormLabel>
                                    <Select placeholder='Select option' value={el.properties}>
                                        {typeNumber.map(dt => (
                                            <option value={dt}>{dt}</option>
                                        ))}
                                    </Select>
                                </FormControl> :
                                 el.dataType === 'text' ?
                                <FormControl>
                                    <FormLabel>max character</FormLabel>
                                    <Input placeholder="max-char|tipe number" value={el.properties} />
                                </FormControl> :
                                <></>
                        }

                        <Box height={'100%'} position="relative" bottom={0} mt={8} ml={4}>
                            <IconButton bgColor={'red'} color={"white"} aria-label="Delete" onClick={()=>deleteData(el.id)} icon={<DeleteIcon />} colorScheme='teal' />
                        </Box>
                    </Flex>
                </Box>
            ))

                : <></>
            }

            <Button colorScheme='green' mt={5} onClick={()=>addData()}>Add</Button>
        </div >
    )
}

export default AddForm