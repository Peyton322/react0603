import { useFormik } from "formik";
import * as Yup from "yup";

export default function FormikForm() {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: ""
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(15, "Must be 15 characters or less.")
                .required("Name must not be empty."),
            email: Yup.string()
                .email("Please enter a valid email.")
                .required("Email must not be empty.")
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            resetForm();
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name">Your name</label>
            <input
                type="text"
                id="name"
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}  // 確保在輸入框失焦時也進行驗證
                value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
                <div>{formik.errors.name}</div>
            ) : null}

            <label htmlFor="email">Your E-Mail</label>
            <input
                type="email"
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}  // 確保在輸入框失焦時也進行驗證
                value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
            ) : null}

            <button type="submit">Submit</button>
        </form>
    );
}
