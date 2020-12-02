const ComponentOne = (props)=> (
    <div className="Component ComponentOne">
        <h2>Hi! I'm ComponentOne</h2>
        <h3>My props object looks sort of like this under-the-hood: </h3>
        <h3>{
       // THIS WON'T WORK WITH ANY PROPS THAT ARE A FUNCTION - WHY NOT?
        JSON.stringify(props)
        }</h3>
        {/* {console.log("ComponentOne's Props:", props)} */}
    </div>
)
export default ComponentOne;