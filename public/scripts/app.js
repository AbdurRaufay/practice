'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// class Notes extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             options:['c++','java','javascript','python','React','Node js'],
//             display: false

//         }
//     this.pickTask=this.pickTask.bind(this)
//     this.removeAll=this.removeAll.bind(this);
//     this.addOptionToState=this.addOptionToState.bind(this);
//     this.removeOneOption=this.removeOneOption.bind(this);

//     }
//       render(){
//           return(
//               <div>
//               <Header />
//               <PickAtask picktask={this.pickTask}/>
//               <AddOption option={this.state.options} add={this.addOptionToState} />
//               <Options options={this.state.options}  removeOneOption={this.removeOneOption}/>
//               <RemoveAll remove={this.removeAll}  optlength={this.state.options.length}/>
//               </div>
//           )
//       }

//     pickTask(){
//         const r=Math.floor(Math.random()*this.state.options.length);
//         window.alert(this.state.options[r]);
//       }
//       removeOneOption(optiontext){
//         this.setState((prevState)=>{
//             return {
//                 options :prevState.options.filter((option)=>option !=optiontext)
//             }
//         })

//     }
//       removeAll(){
//        this.setState(()=>{
//            return {
//                options:[]
//            }
//        })
//     }

//     addOptionToState(optionText){
//         if(optionText == 0){
//             return "Empty option is not allowed";  
//               }
//               else if(optionText.trim().length< 3){
//                   return "To small text";
//               }
//               else if(this.state.options.indexOf(optionText)>-1){
//                 return 'Already Exists';
//               }

//               else{
//         this.setState((prevState)=>{
//             return{
//                 options: prevState.options.concat(optionText)

//             }
//         })
//     }
// }


// }

// class Header extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>My App</h1>
//             </div>
//         )
//         }
// }

// class Options extends React.Component{
//    render(){
//        return(
//            <div>
//                {this.props.options.length==0 &&<h2>No options Remaining</h2>}
//                <ol> 
//                    {this .props.options.map((option)=>{
//                     return <Option optiontext={option} removeOneOption={this.props.removeOneOption}/>
//                    })}

//                </ol>

//            </div>
//        )
//    }
// }   

// class Option extends React.Component{
//     constructor(props){
//         super(props);
//         this.removeOption=this.removeOption.bind(this);
//     }
//     removeOption(e){
//        this.props.removeOneOption(this.props.optiontext)
//     }
//    render(){
//        return(
//            <div>
//              <li>{this.props.optiontext}
//              <button id="cross" onClick={this.removeOption}>X</button>
//              </li>
//            </div>
//        )
//    }
// }
// class AddOption extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             error : undefined
//         }
//         this.addOption=this.addOption.bind(this);
//     }
//     addOption(e){
//         e.preventDefault();
//        const option = e.target.elements.option.value;
//         const errorMessage=this.props.add(option);
//         this.setState(()=>{
//             return {
//                 error: errorMessage
//             }
//         })
//     }

//     render(){
//         return (
//             <div>
//                 {this.state.error &&<h3>{this.state.error}</h3>}
//             <form onSubmit={this.addOption}>
//             <input type="text" name="option"/>
//             <button>Add Option</button>
//         </form>
//         </div>
//         )
//         }
//     }

// class RemoveAll extends React.Component{

//    render(){
//        return(
//            <div>
//                <button onClick={this.props.remove}>RemoveAll</button>
//                <h1>Length of Options:{this.props.optlength}</h1>
//            </div>
//        )
//    }
// }
// class PickAtask extends React.Component{
//       render(){
//         return(
//             <button onClick={this.props.picktask}>PickAtask</button>
//         )
//         }
// }

// ReactDOM.render(<Notes/>,document.getElementById('app'));


//Reused the above code

var Notes = function (_React$Component) {
    _inherits(Notes, _React$Component);

    function Notes(props) {
        _classCallCheck(this, Notes);

        var _this = _possibleConstructorReturn(this, (Notes.__proto__ || Object.getPrototypeOf(Notes)).call(this, props));

        _this.state = {
            options: ['c++', 'java', 'python', 'javascript', 'React js'],
            tittle: 'My App'
        };
        _this.pickTask = _this.pickTask.bind(_this);
        _this.removeAll = _this.removeAll.bind(_this);
        _this.addOptionToState = _this.addOptionToState.bind(_this);
        _this.removeOneOption = _this.removeOneOption.bind(_this);
        return _this;
    }

    _createClass(Notes, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { tittle: this.state.tittle }),
                React.createElement(Options, { options: this.state.options, removeOneOption: this.removeOneOption }),
                React.createElement(AddOption, { option: this.state.options, addopt: this.addOptionToState }),
                React.createElement(RemoveAll, { remove: this.removeAll, length: this.state.options.length }),
                React.createElement(PickAtask, { pickTask: this.pickTask, length: this.state.options.length })
            );
        }
    }, {
        key: 'pickTask',
        value: function pickTask() {
            var r = Math.floor(Math.random() * this.state.options.length);
            console.log(this.state.options[r]);
        }
    }, {
        key: 'removeAll',
        value: function removeAll() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: 'removeOneOption',
        value: function removeOneOption(optionText) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return option != optionText;
                    })
                };
            });
        }
    }, {
        key: 'addOptionToState',
        value: function addOptionToState(textOption) {
            if (textOption == 0) {
                return "Empty  string is not allowed";
            } else if (textOption.trim().length < 3) {
                return "Text length must be greater than 3 character";
            } else if (this.state.options.indexOf(textOption) > -1) {
                return 'Already Exists';
            } else {
                this.setState(function (prevState) {
                    return {
                        options: prevState.options.concat(textOption)
                    };
                });
            }
        }
    }]);

    return Notes;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    this.props.tittle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Options = function (_React$Component3) {
    _inherits(Options, _React$Component3);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: 'render',
        value: function render() {
            var _this4 = this;

            return React.createElement(
                'div',
                null,
                this.props.options.length == 0 && React.createElement(
                    'h3',
                    null,
                    'No Options'
                ),
                React.createElement(
                    'ol',
                    null,
                    this.props.options.map(function (option) {
                        return React.createElement(Option, { optiontext: option, removeOneOption: _this4.props.removeOneOption });
                    })
                )
            );
        }
    }]);

    return Options;
}(React.Component);

var Option = function (_React$Component4) {
    _inherits(Option, _React$Component4);

    function Option(props) {
        _classCallCheck(this, Option);

        var _this5 = _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).call(this, props));

        _this5.removeOne = _this5.removeOne.bind(_this5);
        return _this5;
    }

    _createClass(Option, [{
        key: 'removeOne',
        value: function removeOne() {
            this.props.removeOneOption(this.props.optiontext);
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'li',
                    null,
                    this.props.optiontext,
                    React.createElement(
                        'button',
                        { onClick: this.removeOne },
                        'X'
                    )
                )
            );
        }
    }]);

    return Option;
}(React.Component);

var AddOption = function (_React$Component5) {
    _inherits(AddOption, _React$Component5);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this6 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this6.state = {
            error: undefined
        };
        _this6.addoption = _this6.addoption.bind(_this6);
        return _this6;
    }

    _createClass(AddOption, [{
        key: 'addoption',
        value: function addoption(e) {
            e.preventDefault();
            var option = e.target.elements.option.value;
            var errorM = this.props.addopt(option);
            this.setState(function () {
                return {
                    error: errorM
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'h3',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.addoption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

var PickAtask = function (_React$Component6) {
    _inherits(PickAtask, _React$Component6);

    function PickAtask() {
        _classCallCheck(this, PickAtask);

        return _possibleConstructorReturn(this, (PickAtask.__proto__ || Object.getPrototypeOf(PickAtask)).apply(this, arguments));
    }

    _createClass(PickAtask, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.props.pickTask, disabled: this.props.length == 0 },
                    'Pick Task'
                )
            );
        }
    }]);

    return PickAtask;
}(React.Component);

var RemoveAll = function (_React$Component7) {
    _inherits(RemoveAll, _React$Component7);

    function RemoveAll() {
        _classCallCheck(this, RemoveAll);

        return _possibleConstructorReturn(this, (RemoveAll.__proto__ || Object.getPrototypeOf(RemoveAll)).apply(this, arguments));
    }

    _createClass(RemoveAll, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.props.remove, disabled: this.props.length == 0 },
                    'RemoveAll'
                ),
                React.createElement(
                    'h3',
                    null,
                    'Length  :',
                    this.props.length
                )
            );
        }
    }]);

    return RemoveAll;
}(React.Component);

ReactDOM.render(React.createElement(Notes, null), document.getElementById('app'));
