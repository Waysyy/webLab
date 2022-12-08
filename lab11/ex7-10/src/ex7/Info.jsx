
function Info(props)
{
    return(<div>
        <h1>My Contacts</h1>
    
        <h2>{props.name}</h2>
        <img
          src={props.link}
          alt="avatar_img"
        />
        <p>{props.phone}</p>
        <p>{props.mail}</p>
        </div>);
}

export default Info;