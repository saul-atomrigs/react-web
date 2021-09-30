// 다른 모듈에서 컴포넌트들을 가져오기
import React, {useState} from 'react'
import Todo from './components/Todo.jsx'
import Form from './components/Form.js'
import FilterButton from './components/FilterButton'
import Figure from './components/Figure'


function addTask(name) {
  const newTask = {
    id: "id"
    ,name: name
    ,completed: false
  }
  setTasks([...tasks,newTask])
}

// 
function App(props) {
  const [tasks, setTasks] = useState(props.tasks)

  // props.tasks.map -> tasks.map
  const taskList = tasks.map(task => (
    <Todo id={task.id} name={task.name} completed={task.completed} key={task.id} />
  ))

  return (
    <div className="todoapp stack-large">
      <Form addTask={addTask} />

      <h1>TodoMatic</h1>
      <Form addTask={addTask}></Form>
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>all</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div>
      <h2 id="list-heading">
        3 tasks remaining
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      > 
        {taskList}
        {/* <Todo name = 'Eat' completed={true} id='todo-0' />
        <Todo name = 'Sleep' completed={false} id='todo-1' />
        <Todo name = 'Repeat' completed={false} id='todo-2' /> */}
      </ul>
    </div>
  );
}


// App 컴포넌트들을 다른 모듈에서 사용할 수 있도록 함
export default App;
