// let count=0;
// const plushandler=()=>{
//   count++;
//   reRender();
   
// }
// const minushandler=()=>{
//     count--;
//      reRender();
//   }
//   const resethandler=()=>{
//     count=0;
//      reRender();
//   }


// const app=document.getElementById('app')
// const reRender=()=>{
//     const template=
//             <div>
        
//                 <h1>Count : {count}</h1>
//                 <button onClick={plushandler}>Plus</button>
//                 <button onClick={minushandler}>Minus</button>
//                 <button onClick={resethandler}>Reset</button>
                
//                 </div>

// ReactDOM.render(template,app);
// }
// reRender();




// let display=false;
// const show=()=>{
//   display=true;
//   reRender();
   
// }
// const hide=()=>{
//     display=false;
//      reRender();
//   }
  


// const app=document.getElementById('app')
// const reRender=()=>{
//     const template=
//             <div>
//                 <button onClick={show}>show</button>
//                 <button onClick={hide}>hide</button>   
//                 {display && <p>Show and hide the content</p>}
//                 </div>

// ReactDOM.render(template,app);
// }
// reRender();





// let display=false;
// const showhide=()=>{
//   display=!display;
//   reRender();
   
// }

  


// const app=document.getElementById('app')
// const reRender=()=>{
//     const template=
//             <div>
//                 <button onClick={showhide}>{display ? "hide" : "show"}</button>  
//                 {display && <p>Show and hide the content</p>}
//                 </div>

// ReactDOM.render(template,app);
// }
// reRender();



// let text=""; one input value comes
// let text=[];
// let pas=[];
// const formHandler=(e)=>{
//   e.preventDefault();
//    text.push(e.target.elements.username.value);
//    pas.push(e.target.elements.pass.value);
//    reRender();
// }

// const app=document.getElementById('app')
// const reRender=()=>{
//     const template=
//             <div>
//                <form onSubmit={formHandler}>
//                  <input type="text" name="username"/>
//                  <input type="password" name="pass"/>
//                  <button>submit</button>
//                  <ol>
//                    {text.map((te)=>{
//                      return<li>{te}</li>
//                    })}
                
//                    {pas.map((p)=>{
//                      return<li>{p}</li>
//                    })}
//               </ol>
//                </form>
//                 </div>

// ReactDOM.render(template,app);
// }
// reRender();






// let user={
//   name:'Abdur Rauf',
//   age: 23,
//   options:["c++","java","python"]
// }

// const opt=(e)=>{
//  e.preventDefault();
//  const userinput=e.target.elements.option.value;
//  const duplicates=user.options.filter((dup)=>dup===userinput)
//  userinput.length == 0 || userinput.length < 4 || duplicates.length !=0 ? "" : user.options.push(userinput); 
//  reRender();

// }
// const pickAtask=(e)=>{
//  const r=Math.floor(Math.random()*user.options.length);
//  console.log(r);
//   reRender();
// }
// const removeAll=()=>{
//   user.options=[];
//   reRender();
// }
// const app=document.getElementById('app')
// const reRender=()=>{
//     const template=
//             <div>
//                <form onSubmit={opt}>
//                  <input type="text" name="option"/>
//                  <button>Add Option</button>
//                </form>
//                <ol>{user.options.map((option)=>{
//                     return <li>{option}</li>
//                  })}</ol>
//                  <button id="task" onClick={pickAtask}>Pick A Task</button>
//                  <button onClick={removeAll}>Remove</button>
//                 </div>

// ReactDOM.render(template,app);
// }
// reRender();







/////////////////////////////////////////////////////////////////////////

//class components
// const data={
//   subjects:['react','python','javascript','Nodejs'],
//   age:23
// }

 
// class NotesApp extends React.Component{
//   render(){
//     const appTittle='Our NotesApp';
//     const appslogen='An Awesome App';
//       return(
//           <div>
//              <Header 
//                tittle={appTittle}
//                slogen={appslogen}  
//                />
//              <Tasks
//                subjects={data.subjects}
//                age={data.age}
           
//                />
//              <Remove/>
//              <Footer/>
//           </div>
//       )
//   }
// }



// class Header extends React.Component{
//   render(){
//     return(
//       <div>
//         <h1>{this.props.tittle}</h1>
//         <h3>{this.props.slogen}</h3>
//       </div>
//     )
//   }
// }


// class Tasks extends React.Component{
//   render(){
//     return(
//       <div>
//         <p>{data.subjects}</p>
//         <p>Age is :{data.age}</p>
//         <Task 
//         len={data.subjects.length}
//         />
//       </div>
//     )
//   }
// }
// class Task extends React.Component{
//   render(){
//     return(
//       <div>
//         <p>Individual Task Component</p>
//    <button disabled={this.props.len>0 ? false :true}>Pick Task</button>
//       </div>
//     )
//   }
// }

// class Remove extends React.Component{
//   render(){
//     return(
//       <button>removeAll</button>
//     )
//   }
// }

// class Footer extends React.Component{
//   render(){
//       return (
//           <div>
//               <p>@Copyright</p>
//           </div>
//       ) 
//   }
// }


// ReactDOM.render(<NotesApp/>,document.getElementById('app'));











// class App extends React.Component{
//   constructor(props){
//     super(props)
//    this.state = {
//      persons:[
//        {name:'Abdur Ruf'},
//        {name:'Absdf'},
//        {name:'Abgfgfds'}
//      ]
    
//    }
//   }
  
//  switchNameHandler(){
//    this.setState(({persons:[
//      {name:'adfa'},
//      {name:'ada'},
//      {name:'ad'}
//    ]}))

   
//  }
//    render(){
//       return(
//       <div>
//         <h1>An Awesome App</h1>
  
//         <Person name={this.state.persons[0].name}/>
//         <Person name={this.state.persons[1].name}/>
//         <Person name={this.state.persons[2].name}/>
//         <button type="button" onClick={this.switchNameHandler.bind(this)}>Click</button> 
//       </div>  
//         )}
        
//       };
    

//  const Person=((props)=>{
//   return(
//   <div>
//     <p>{props.name}</p>
//   </div>
//   )
//   });
// ReactDOM.render(<App/>,document.getElementById('app'));




class App extends React.Component{
  constructor(props){
  super(props)
  this.state={
    count: 0
  }
  this.plus=this.plus.bind(this);
  this.minus=this.minus.bind(this);
  this.reset=this.reset.bind(this);
};
plus(){
  this.setState((prev)=>{
    return {
      count: prev.count+1
    }
  })
}
minus(){
  this.setState((prev)=>{
    return {
      count: prev.count-1
    }
  })

}
reset(){
  this.setState((prev)=>{
    return {
      count: prev.count=0
    }
  })
}
render(){
  return(
    <div>
      <h1>Count{this.state.count}</h1>
      <button type="button" onClick={this.plus}>Plus</button>
      <button type="button" onClick={this.minus}>Minus</button>
      <button type="button" onClick={this.reset}>Reset</button>
    </div>
  )
}
}



ReactDOM.render(<App/>,document.getElementById('app'));