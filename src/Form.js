function Form(props) {
    return (
        <form onSubmit={props.onSubmit}>
        <label>
          Shopping Item:
          <input 
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            onKeyPress={props.onKeyPress}
            style={{margin: ".5rem"}}
          />
        </label>
        <button type="submit">Add to shopping list</button>
      </form>
    )
}

export default Form;