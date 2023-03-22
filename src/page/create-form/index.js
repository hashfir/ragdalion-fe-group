import React, { useState } from 'react';
import { AddForm, ModalAddEditForm } from './component';
import { useNavigate } from "react-router-dom";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Text,
    Flex,
    Button,
    Spacer,
    Box,
    ButtonGroup,
    IconButton,
    Tooltip
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon, CopyIcon, ViewIcon } from "@chakra-ui/icons";

const CreateFormPage = () => {
    const navigate = useNavigate();
    const [isViewTable, setIsViewTable] = useState(true)
    const [modalCreate, setModalCreate] = useState(false)
    const [selecteForm, setSelecteForm] = useState(1)
    const [dataOnEdit, setDataOnEdit] = useState({})
    const [dataTable, setDataTable] = useState([{
        id: 1,
        formName: "form tamu",
        description: "form registrasi tamu",
        totalData: 10,
        dataForm: [
            {
                id: 11,
                dataType: "text",
                label: "test input nummber",
                properties: "20"
            },
            {
                id: 111,
                dataType: "date",
                label: "test input date",
                properties: ""
            },
            {
                id: 1111,
                dataType: "number",
                label: "test input number",
                properties: "positive"
            }
        ]
    },
    {
        id: 2,
        formName: "form ",
        description: "form 2",
        totalData: 10,
        dataForm: [
            {
                id: 11,
                dataType: "text",
                label: "test input nummber",
                properties: "20"
            }
        ]
    }]);
    const columnTable = [
        {
            name: "Nama Form", field: "formName"
        },
        {
            name: "Deskripsi", field: "description"
        },
        {
            name: "Total Data", field: "totalData"
        },
        {
            name: "Action", field: "id"
        },
    ];

    function getRandomInt() {
        return Math.floor(Math.random() * 99999);
    }

    const copyData = (id) => {
        const currentHost = window.location.host;
        navigator.clipboard.writeText(`${currentHost}/add-forms/${id}`)
        .then(() => {
          console.log('Text copied to clipboard');
        })
        .catch((err) => {
          console.error('Failed to copy text: ', err);
        });
    };

    const viewData = (id) => {
        setIsViewTable(false)
        setSelecteForm(id)
    };

    const deleteData = (id) => {
        const newDataTable = dataTable.filter((item) => item.id !== id);
        setDataTable(newDataTable);
    };

    const addDataFormUnik = () => {
        let newData = {
            id: getRandomInt(),
            dataType: "text",
            label: "",
            properties: ""
        };
        const updatedDataTable = dataTable.map((item) => {
            if (item.id === selecteForm) {
                return {
                    ...item,
                    dataForm: [...item.dataForm, newData],
                };
            }
            return item;
        });

        setDataTable(updatedDataTable)
    }
    const deleteDataFormUnik = (id) => {
        const updatedDataTable = dataTable.map((item) => {
            if (item.id === selecteForm) {
                return {
                    ...item,
                    dataForm: item.dataForm.filter((data) => data.id !== id),
                };
            }
            return item;
        });
        setDataTable(updatedDataTable);
    };
    const handlePreview = (id) => {
        const idx = dataTable.findIndex(el => el.id === id)
        navigate("/add-forms/" + id, { state: dataTable[idx] });
    };
    const handleSave = (id) => {
       setIsViewTable(true)
    };

    //modal
    const openModal = () => {
        setModalCreate(true)
    }
    const openModalEdit = (id) => {
        const idx = dataTable.findIndex(el => el.id === id)
        setModalCreate(true)
        setDataOnEdit(dataTable[idx])
    }
    const closeModal = () => {
        setModalCreate(false)
        setDataOnEdit({})
    }
    const submitModal = (payload) => {
        setDataTable([...dataTable, payload])
    }



    return (
        <Box m={10}>
            {isViewTable ?
                <div>
                    <Flex>
                        <Text as='b' fontSize='3xl'>Halaman Form Unik</Text>
                        <Spacer />
                        <Button colorScheme='blue' onClick={() => openModal()}>Tambah</Button>
                    </Flex>
                    <TableContainer>
                        <Table variant='simple'>
                            {/* <TableCaption>Halaman Form Unik</TableCaption> */}
                            <Thead>
                                <Tr>
                                    {columnTable.map(el => (
                                        <Th key={el.field}>{el.name}</Th>
                                    ))}
                                </Tr>
                            </Thead>
                            <Tbody>
                                {
                                    dataTable.map((el, i) => (
                                        <Tr key={i}>
                                            {columnTable.map((element, index) => (
                                                <Td key={index}> {
                                                    element.name === "Action" ?
                                                        <ButtonGroup>
                                                            <Tooltip label="Edit">
                                                                <IconButton aria-label="Edit" onClick={() => openModalEdit(el[element.field])} icon={<EditIcon />} />
                                                            </Tooltip>
                                                            <Tooltip label="Delete">
                                                                <IconButton aria-label="Delete" onClick={() => deleteData(el[element.field])} icon={<DeleteIcon />} />
                                                            </Tooltip>
                                                            <Tooltip label="Copy">
                                                                <IconButton onClick={() => copyData(el[element.field], getRandomInt)} aria-label="Copy Url" icon={<CopyIcon />} />
                                                            </Tooltip>
                                                            <Tooltip label="Preview">
                                                                <IconButton aria-label="Preview" onClick={() => viewData(el[element.field])} icon={<ViewIcon />} />
                                                            </Tooltip>
                                                        </ButtonGroup>
                                                        : el[element.field]

                                                }</Td>
                                            ))}
                                        </Tr>
                                    )
                                    )}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </div>
                :
                <AddForm
                    id={selecteForm}
                    data={dataTable.find(el => el.id === selecteForm)?.dataForm || []}
                    addData={addDataFormUnik}
                    deleteData={deleteDataFormUnik}
                    handlePreview={handlePreview}
                    save={handleSave}
                />
            }
            {/* *************modal************* */}

            {/* <Outlet /> */}

            <ModalAddEditForm
                isOpen={modalCreate}
                onClose={closeModal}
                onSubmit={submitModal}
                dataOnEdit={dataOnEdit}
            />

        </Box>
    )
}

export default CreateFormPage