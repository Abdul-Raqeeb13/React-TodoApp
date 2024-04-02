import { IoIosAddCircle } from "react-icons/io";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { useState } from "react";


function TodoApp() {
    let [item, setItem] = useState([])
    let [inputText, setinputText] = useState()

    const addTodo = () => {
        console.log(inputText);
        setItem([...item, inputText])
        setinputText("")
    }

    const deleteTodo=(index)=>{
        item.splice(index,1)
        // setItem(...item)
        setItem([...item])
    }

    return (
        <div className="box">
            <h1>Todo App</h1>
            <div className="container">
                <input type="text" placeholder="Enter Todo" value={inputText || ""} onChange={(e) => setinputText(e.target.value)} />
                <IoIosAddCircle style={{ cursor: 'pointer' }} color="green" size={26 + "px"} onClick={() => addTodo()} />
            </div>
            <div className="item">
                {
                    item.map((val, index) => {
                        return (
                            <div>

                                <li key={index}><b style={{}}>{val}</b> <MdModeEdit /> <RiDeleteBin7Fill onClick={()=>deleteTodo(index)}/></li>

                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}

export default TodoApp