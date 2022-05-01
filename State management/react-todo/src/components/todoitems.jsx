export function Todoitem({ item, handlestatus }) {
    return (
        <div>
            {`task:${item.title} status: ${item.status} id:${item.id}`}
            <button onClick={() => { handlestatus(item.id) }}>change status</button>
        </div>
    )
}