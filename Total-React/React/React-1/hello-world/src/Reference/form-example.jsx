import { useRef } from "react";
import { FormElement } from "./form-element";

const FormExample = () => {

    const formRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    return (
        <>
            <div>
                <FormElement ref={formRef}></FormElement>
            </div>
        </>
    )
}
export default FormExample;



/**
 *  console.log(formRef.current.value)
 *  console.log(formRef[0].current.value)
 *  ref attribute gives you the reference of that particular tag like document get element by id or class in DOM
 *  in React we use ref to use ref we need to import useRef
 *  */ 