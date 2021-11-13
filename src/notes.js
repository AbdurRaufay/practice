class Notes extends React.Component{
    constructor(props){
        super(props);
        this.state={
            options:['c++','java','javascript','python','React','Node js'],
            display: false

        }
    this.pickTask=this.pickTask.bind(this)
    this.removeAll=this.removeAll.bind(this);
    this.addOptionToState=this.addOptionToState.bind(this);
    this.removeOneOption=this.removeOneOption.bind(this);

    }
      render(){
          return(
              <div>
              <Header />
              <PickAtask picktask={this.pickTask}/>
              <AddOption option={this.state.options} add={this.addOptionToState} />
              <Options options={this.state.options}  removeOneOption={this.removeOneOption}/>
              <RemoveAll remove={this.removeAll}  optlength={this.state.options.length}/>
              </div>
          )
      }
      
    pickTask(){
        const r=Math.floor(Math.random()*this.state.options.length);
        window.alert(this.state.options[r]);
      }
      removeOneOption(optiontext){
        this.setState((prevState)=>{
            return {
                options :prevState.options.filter((option)=>option !=optiontext)
            }
        })
    
    }
      removeAll(){
       this.setState(()=>{
           return {
               options:[]
           }
       })
    }
   
    addOptionToState(optionText){
        if(optionText == 0){
            return "Empty option is not allowed";  
              }
              else if(optionText.trim().length< 3){
                  return "To small text";
              }
              else if(this.state.options.indexOf(optionText)>-1){
                return 'Already Exists';
              }
                
              else{
        this.setState((prevState)=>{
            return{
                options: prevState.options.concat(optionText)
            
            }
        })
    }
}


}

class Header extends React.Component{
    render(){
        return(
            <div>
                <h1>My App</h1>
            </div>
        )
        }
}

class Options extends React.Component{
   render(){
       return(
           <div>
               {this.props.options.length==0 &&<h2>No options Remaining</h2>}
               <ol> 
                   {this .props.options.map((option)=>{
                    return <Option optiontext={option} removeOneOption={this.props.removeOneOption}/>
                   })}

               </ol>
           
           </div>
       )
   }
}   

class Option extends React.Component{
    constructor(props){
        super(props);
        this.removeOption=this.removeOption.bind(this);
    }
    removeOption(e){
       this.props.removeOneOption(this.props.optiontext)
    }
   render(){
       return(
           <div>
             <li>{this.props.optiontext}
             <button id="cross" onClick={this.removeOption}>X</button>
             </li>
           </div>
       )
   }
}
class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.state={
            error : undefined
        }
        this.addOption=this.addOption.bind(this);
    }
    addOption(e){
        e.preventDefault();
       const option = e.target.elements.option.value;
        const errorMessage=this.props.add(option);
        this.setState(()=>{
            return {
                error: errorMessage
            }
        })
    }
    
    render(){
        return (
            <div>
                {this.state.error &&<h3>{this.state.error}</h3>}
            <form onSubmit={this.addOption}>
            <input type="text" name="option"/>
            <button>Add Option</button>
        </form>
        </div>
        )
        }
    }

class RemoveAll extends React.Component{
    
   render(){
       return(
           <div>
               <button onClick={this.props.remove}>RemoveAll</button>
               <h1>Length of Options:{this.props.optlength}</h1>
           </div>
       )
   }
}
class PickAtask extends React.Component{
      render(){
        return(
            <button onClick={this.props.picktask}>PickAtask</button>
        )
        }
}

ReactDOM.render(<Notes/>,document.getElementById('app'))

