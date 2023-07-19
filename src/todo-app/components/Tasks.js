const Task = (props) => {
    return (
        <ul>{
            props.todos.length > 0
                ?
                props.todos.map((todo, index) =>
                    <li key={index}>
                        <span>{todo.name}</span>
                        <button onClick={() => props.action(todo.id)}>{props.actionName}</button>
                    </li>)
                :
                <span>No Data Available</span>
        }</ul>

    )
}

export default Task