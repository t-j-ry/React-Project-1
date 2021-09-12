function Listitem(props) {
    return (
      props.value.trim().length > 0 &&  (
        <li>{props.value} <button onClick={props.onClick}>Delete</button> {props.timeStamp}</li>
      )
    )
}

export default Listitem;