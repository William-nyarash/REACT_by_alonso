function App(){
    const [isImportant, setisImportant] = React.useState("No");

    function handleCheck(){
        setisImportant("Yes");
    }
    
    return (
        <div className="state">
            <h1>Is state important to know</h1>
            <div className="stateValue" onClick={handleCheck}>
                <h1>{isImportant}</h1>
            </div>

        </div>
    )
}
ReactDOM.render(<App/>, document.getElementById("root"));
