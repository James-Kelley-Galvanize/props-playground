const ComponentThree = (props)=>(
    <div className="Component ComponentThree">
        <h2>Salutations! I'm ComponentThree</h2>
        <h3>My props is an object that looks like this: </h3>
        <h3>{JSON.stringify(props)}</h3>

    </div>
)
export default ComponentThree;