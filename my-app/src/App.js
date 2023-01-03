import { Heading, IconButton, useColorMode, VStack } from "@chakra-ui/react";
import AddToDo from "./components/AddToDo";
import ToDoList from "./components/ToDoList";
import { FaMoon, FaSun } from 'react-icons/fa';
import { useEffect, useState } from "react";
function App() {
  //b1: khai bao
  const initialTodos = [
    {
      id: 1,
      body: 'an com',
    },
    {
      id: 2,
      body: 'an ca',
    },
  ];
  //b2: sdung useState de luu lai
  // const [job, setJob] = useState(initialTodos)

  const deleteJob = (id) => {
    const newJobs = job.filter((e) => {
      return e.id !== id
    })
    setJob(newJobs);
  }

  //  JSON.parse=> chuyển thành 1 Obj
  // localStorage.getItem('job') là 1 chuỗi JSON 
  const [job, setJob] = useState(
    () => JSON.parse(localStorage.getItem('job')) || []
  )

  useEffect(() => {
    //JSON.stringify => biến 1 obj thành chuỗi JSON
    localStorage.setItem('job', JSON.stringify(job))
  }, [job])

  const addJob = (newJobs) => {
    setJob([...job, newJobs])
  }

  // Change Color background
  const { colorMode, toggleColorMode } = useColorMode();
  // bắt buộc phải sử dụng 'toggleColorMode' mới có thể thực thi được
  return (
    <VStack p={5}>
      <IconButton
        onClick={toggleColorMode}
        icon={colorMode === 'light' ? < FaSun /> : <FaMoon />}
        isRound='true'
        size={"lg"}
        alignSelf='flex-end' />
      <div style={{ marginBottom: '20px' }}>
        <Heading className="App"
          fontWeight={"extrabold"} size="2xl"
          bgGradient="linear(to right, gray.300, yellow.400, pink.200)"
          // bgClip dùng để chuyển đổi màu từ bgGradient sang màu chữ
          bgClip={'text'}
        >Todo Application
        </Heading>
      </div>

      {/* b3: goi lai ham ra */}

      <ToDoList todos={job} deleteJob={deleteJob} />
      <AddToDo addJob={addJob} />
    </VStack>
  );
}

export default App;
