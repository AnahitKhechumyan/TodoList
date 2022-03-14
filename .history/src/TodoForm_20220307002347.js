import {useState} from "react";


function TodoForm(){
    const [text, setText] = useState("");
    return (
        <form>
            <input type="text" />
            <button>Add</button>
        </form>
    )
}
export default TodoForm;
 