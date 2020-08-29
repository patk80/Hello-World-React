function SCWinnerFunction() {
    const teams = ["Canucks", "Golden Knights", "Flyers", "Islanders", "Avalanche", "Stars", "Lightning", "Bruins"];
    return teams[Math.floor(Math.random() * teams.length)];
}

class Team extends React.Component {
    render(){
        return (
            <div>
                <h1>{SCWinnerFunction()} will win the Stanley Cup in 2020!</h1>
            </div>
        );
    }
}

// function Hello() {
//     return (
//         <div>
//             <h1>Hello World!</h1>
//             <h2>Hello World!</h2>
//             <h3>Hello World!</h3>
//             <h4>Hello World!</h4>
//         </div>
//     );
// }

ReactDOM.render(<Team/>, document.getElementById("root"))
