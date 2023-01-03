import { Badge, HStack, IconButton, Spacer, StackDivider, Text, VStack } from "@chakra-ui/react";
import { FaTrash } from 'react-icons/fa';

function ToDoList({ todos, deleteJob }) {

    if (!todos.length) {
        return (
            <Badge colorScheme={"red"} variant={"outline"} p={"4"} borderRadius={"5"}>
                Nothing Todo
            </Badge>
        )
    }

    return (
        <VStack divider={<StackDivider />}
            borderColor='gray.200'
            borderWidth='2px'
            borderRadius={'2xl'}
            width="100%"
            // stretch là mặc định tối đa 
            alignItems="stretch"
            // responsive
            maxWidth={{ "base": '90vw', "sm": '80vw', "lg": "50vw", "xl": '40vw' }}
            p="4">
            {
                todos.map((todo) => (
                    <HStack key={todo.id} >
                        <Text>{todo.body}</Text>
                        <Spacer />
                        <IconButton icon={<FaTrash />} isRound="true"
                            onClick={() => deleteJob(todo.id)} />
                    </HStack>
                ))
            }
        </VStack>);
}

export default ToDoList;