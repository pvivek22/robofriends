import React,{ Component} from 'react';
import CardArray from './CardArray';    
import SearchBox from './SearchBox';
import Scroll from './Scroll';

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots : [],
            searchfield:""
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots:users}));
    }

    onSearchChange = (event) =>{
        console.log(event.target.value);
        this.setState({searchfield:event.target.value});
    }

    render(){
        const filteredRobots = this.state.robots.filter((robot) => {
            return robot.name.toLowerCase().includes(this.state.searchfield);
        })
        if(this.state.robots.length === 0){
            return <h1>LOADING</h1>
        }
        else{
            return (
                <div className="tc" >
                    <h1>RoboFriends </h1>
                    <SearchBox searchchange = {this.onSearchChange} />
                    <Scroll>
                    <CardArray robots= {filteredRobots} />
                    </Scroll>
                </div>
        )
        }
      
}
}

export default App;