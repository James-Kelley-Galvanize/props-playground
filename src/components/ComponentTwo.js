const ComponentTwo = function (props) {

    // console.log("ComponentTwo's Props", props);

    return (<div className="Component ComponentTwo">
            <h2>Greetings! I'm ComponentTwo</h2>
            <h3>My props object *actually* looks a bit like: </h3>
            <h3>{JSON.stringify(props)}</h3>

        </div>
    )
}
export default ComponentTwo;