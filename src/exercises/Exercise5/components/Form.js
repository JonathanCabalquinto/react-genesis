
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const Form = () => {
    const schema = yup.object().shape({
        full_name: yup.string().required("Full Name a is Required Field"),
        email: yup.string().required("Email is a Required Field").email("Email must be a valid email"),
        age: yup.number("Invalid Input").required().positive("Invalid Input").integer().min(18).max(50),
        password: yup.string().min(4).max(20).required(),
        confirm_password: yup.string().required().oneOf([yup.ref("password"), null], "Password is Incorrect").required(),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })


    const onSubmit = (data) => {
        console.log(data)
        console.log("Hello World")
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Full Name" {...register("full_name")} />
            <p className="error">{errors.full_name?.message}</p>
            <input type="email" placeholder="Email..." {...register("email")} />
            <p className="error">{errors.email?.message}</p>
            <input type="number" placeholder="Age..." {...register("age")} />
            <p className="error">{errors.age?.message}</p>
            <input type="password" placeholder="Password..." {...register("password")} />
            <p className="error">{errors.password?.message}</p>
            <input type="password" placeholder="Confirm Password" {...register("confirm_password")} />
            <p className="error">{errors.confirm_password?.message}</p>
            <input type="submit" />
        </form>
    )
}

export default Form