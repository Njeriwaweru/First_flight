import "./List.css"

const List = ({ items = [], children, title}) => {
    return(
        <>
            <h1>{title}</h1>
            <ul>
                {items.map((item, index) => (
                    <li key={item.id ?? index}>
                        {typeof children === "function" ? children(item, index) : item}
                    </li>
                ))}
            </ul>
        </>
           
    )
}

export default List;