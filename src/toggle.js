class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state={
            display:false
        }
        this.toggleButton=this.toggleButton.bind(this)
    }
    toggleButton(){
        this.setState((prevState)=>{
            return{
                display: !prevState.display
            }
        })
    }

    render(){
        return(
            <div>
                <button type="button"  onClick={this.toggleButton}>{this.state.display ? 'hide' : 'show'}</button>
                {this.state.display &&<p>This is paragraph</p>}
            </div>
        )
    }
}
ReactDOM.render(<Toggle/>,document.getElementById('app'));