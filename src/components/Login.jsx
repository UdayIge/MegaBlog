import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import { Button, Input, Logo } from "./index"
import { useDispatch } from "react-redux"
import authServices from "../appwrite/auth"
import { useForm } from "react-hook-form"

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("")

    const login = async (data) => {
        setError("")
        try {
            const session = await authServices.login(data)
            if (session) {
                const userData = await authServices.getCurrentUser()
                if (userData) dispatch(authLogin({userData}));
                navigate("/")
            }
        } catch (error) {
            setError(error.message || "An error occurred while logging in.")
        }
    }

    return (
        <div
            className='text-slate-900 flex items-center justify-center w-full'
        >
            <div className={`mx-auto w-full max-w-lg bg-gray-50 rounded-xl px-6 py-10 sm:p-10 border border-black/10 transition-all duration-200 dark:bg-slate-900 dark:text-white dark:border-gray-600`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-semibold font-sans leading-tight">Sign in to your account</h2>
                <p className="mt-2 text-center text-base text-gray-500">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary hover:underline text-blue-600"
                    >
                        Sign Up
                    </Link>
                </p>
                {error && <p className="text-red-600 mb-2 text-center">{error}</p>}

                <form onSubmit={handleSubmit(login)} className='mt-8'>
                    <div className='space-y-5'>
                        <Input
                            label="Email: "
                            placeholder="Enter your email"
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                }
                            })}
                        />
                        <Input
                            label="Password: "
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: true,
                            })}
                        />
                        <Button
                            type="submit"
                            className="w-full px-5 py-2.5"
                        >Sign in</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login