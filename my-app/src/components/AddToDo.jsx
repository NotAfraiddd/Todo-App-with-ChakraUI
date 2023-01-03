import { Button, HStack, Input, useToast } from "@chakra-ui/react";
import classNames from "classnames/bind";
import { nanoid } from "nanoid";
import { useEffect, useRef, useState } from "react";
import { btnAdd } from "./index";
import styles from "./index.module.scss";
import { gsap } from "gsap";

const cx = classNames.bind(styles);

function AddToDo({ addJob }) {

    const [content, setContent] = useState('')

    const toast = useToast()
    const inputRef = useRef()
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!content) {
            toast({
                title: 'No content',
                status: 'error',
                duration: 2000,
                isClosable: true,
            })
            return
        }
        const newListJobs = {
            id: nanoid(),
            body: content,
        }
        addJob(newListJobs)
        setContent('')
        inputRef.current.focus()
    }

    // Animate
    let app = useRef(null)


    useEffect(() => {
        gsap.fromTo(app,
            {
                backgroundColor: " #00DBDE",
                backgroundImage: "linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)",
            },
            {
                backgroundImage: "linear-gradient(90deg, #FAD961 0%, #F76B1C 100%)",
                repeat: -1,
                yoyo: true,
                duration: 3,
                backgroundColor: "#21D4FD",
            })
    })
    return (
        <form onSubmit={handleSubmit}>
            <HStack mt={"8"}>
                <Input ref={inputRef} value={content} onChange={(e) => setContent(e.target.value)} variant={"filled"} placeholder={"Some things ..."} />
                <Button ref={el => app = el} width={"100%"} type="submit" className={cx('btn-add')}>
                    <p className={cx('text-add')}>Add Somethings ...</p>
                </Button>
            </HStack>
        </form>
    );
}

export default AddToDo;

