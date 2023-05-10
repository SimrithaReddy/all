import { forwardRef } from "react";

const FormElement = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(ref)
    }

    return (
        <>
            <form ref={ref}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email"></input>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password"></input>
                <input type="button" onClick={handleSubmit}>Submit</input>
            </form>
        </>
    )
}

export default React.forwardRef(FormElement);