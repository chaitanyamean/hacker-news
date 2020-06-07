import React from 'react'
import axios from 'axios';

import NavBar from './NavBar';
import StoryListItem from './StoryListItem';

class StoryDashboard extends React.Component {
    state={
		stories: []
    }
    
    componentDidMount() {
           this.callapi('topstories');
    }

    callapi = str => {
        console.log(str);

        let requests = [];
        axios.get('https://hacker-news.firebaseio.com/v0/' + str + '.json')
        .then(res=> {
            console.log(res.data);
            res.data.map((id, index)=> {
                if(index < 20) {
                    requests.push(
                        axios.get('https://hacker-news.firebaseio.com/v0/item/' + id +'.json')
                        )
                }
            });
            Promise.all(requests).then(data => {
                console.log(data);
                this.setState({stories: data});
            })
        });
    }

    render() {
        console.log("STATE", this.state);
            const {stories} = this.state;
        
        return (
            <div>
                <NavBar
                callapi={this.callapi} 
                />
                    <StoryListItem 
                    stories={stories}/>
            </div>
        )
    }
}


export default StoryDashboard;

