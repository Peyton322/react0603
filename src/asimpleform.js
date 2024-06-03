
import { useFormik } from "formik";
export default function SimleForm(){

    return(
        <Form>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name"></input>
            <label htmlFor="email">Your E-Mail</label>
            <input type="text" id="email"></input>
            <button type="submit">Submit</button>
        </Form>
    )
}