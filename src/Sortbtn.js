function Sortbtn(props) {
    
    const handleSort = (bar) => {
        bar === 'DESC' ? (
          this.sortDesc()    
        ) : ( 
          this.sortAsc()
        )
    }
    return (
        <button onClick={() => this.handleSort(this.state.sortFunc)}>Sort: {this.state.sortFunc}</button>
    )
}

export default Sortbtn;