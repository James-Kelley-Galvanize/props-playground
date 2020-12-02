const ComponentOne = (props)=> (
    <div className="Component ComponentOne">
        <h2>Hi! I'm ComponentOne</h2>
        <h3>My props object looks like this under-the-hood: </h3>
        <h3>{JSON.stringify(props)}</h3>

    </div>
)
export default ComponentOne;