import { PersonProps } from "./Person.type"
// type of object
export const Person = (props: PersonProps) => {
    return (
        <h2>{props.name.first} {props.name.last}</h2>
    )
}