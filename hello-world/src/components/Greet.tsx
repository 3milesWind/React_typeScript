type GreetProps = {
    name: String,
    messageCount?: number,  // add `?` becomes Optional
    isLoggedIn: boolean 
}
// typescript do not happy about unknown type 
export const Greet = (props: GreetProps) => {
    const {messageCount = 0} = props  // if no input, set default messageCount as 0
    return(
        <div>
            {props.isLoggedIn ? <h2>Welcome {props.name}! you have {props.messageCount} unread messages</h2> : <h2>Welcome</h2>} 
        </div>
    )
}
