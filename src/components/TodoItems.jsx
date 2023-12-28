import './css/TodoItems.css'
import tick from './assets/check.png'
import notTick from './assets/circle.png'
import cross from './assets/cross.png'

const TodoItems = ({no,display,text,setTodos}) => {

    const toggle = (no) => {
        let data = JSON.parse(localStorage.getItem("todos"))
        for(let i = 0; i < data.length;i++) 
        {
            if(data[i].no===no) {
                if(data[i].display === "") {
                    data[i].display = "true"
                } else { data[i].display = ""}
                break
            } 
        }
        setTodos(data)
    }

    const deleteTodo = (no) => {
        let data = JSON.parse(localStorage.getItem("todos"))
        data = data.filter((todo) => todo.no!==no)
        setTodos(data)
    }

  return (
    <div className='todo-items'>
        <div className={`todo-item-container ${display}`} onClick={()=>{toggle(no)}}>
            {display===""?<img className='todo-img' src={notTick} alt=''/>:<img className='todo-img' src={tick} alt=''/>}
            <div className='todo-item-text'>
                {text}
            </div>
        </div>
        <img onClick={() => {deleteTodo(no)}} className='todo-item-cross-icon' src={cross} alt=''></img>
    </div>
  )
}

export default TodoItems