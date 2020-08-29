class Hello extends React.Component {
    render(){
        return (
            <div>
                <h1>Hello World!</h1>
                <h2>Hello World!</h2>
                <h3>Hello World!</h3>
            </div>
            )
    }
}

ReactDOM.render(<Hello/>, document.getElementById("root"))