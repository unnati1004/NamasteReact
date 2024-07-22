import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
          userInfo:{
            name:"Dummy",
            location:"Dehradun",  
          }
    }
  }

  async componentDidMount() {
    //  console.log("ComponentDidMount");

    const data = await fetch("https://api.github.com/users/unnati1004");
    const json = await data.json();
    
    this.setState({
      userInfo: json,    
    })
    
    console.log("json", json);
  }

  render() {
    const { name, location,avatar_url } = this.state.userInfo;
    //     const { count } = this.state;
    return (
      <div className="user-card">
        {/* <h1>Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1
            });
          }}
        >
          Count Increase
        </button> */}
        <img src={avatar_url} alt={name}/>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @akshay</h4>
      </div>
    );
  }
}

export default UserClass;
