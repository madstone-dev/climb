import React, { useEffect } from "react";
import Button from "@/Components/Button";
import Input from "@/Components/Input";
import ValidationErrors from "@/Components/ValidationErrors";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import Guest from "@/Layouts/Guest";
import Logo from "@/Components/Logo";
import Label from "@/Components/Label";

export default function Register(props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("register"));
    };

    return (
        <Guest>
            <Head title="회원가입" />
            <div className="mx-auto w-full max-w-sm lg:w-96">
                <div>
                    <div className="flex space-x-3 items-center">
                        <Logo className="w-12 h-12" />
                        <span className="text-4xl font-extrabold">
                            MadStone
                        </span>
                    </div>
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                        회원가입
                    </h2>
                </div>

                <div className="mt-8">
                    <div className="mt-6">
                        <ValidationErrors errors={errors} />
                        <form onSubmit={submit} className="space-y-6">
                            <div>
                                <Label htmlFor="name" value="이름">
                                    이름
                                </Label>
                                <div className="mt-1">
                                    <Input
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        className="mt-1 block w-full"
                                        autoComplete="name"
                                        isFocused={true}
                                        handleChange={onHandleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <Label htmlFor="email" value="이메일">
                                    이메일
                                </Label>
                                <div className="mt-1">
                                    <Input
                                        type="text"
                                        name="email"
                                        value={data.email}
                                        className="mt-1 block w-full"
                                        autoComplete="username"
                                        isFocused={true}
                                        handleChange={onHandleChange}
                                    />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <Label htmlFor="password" value="비밀번호">
                                    비밀번호
                                </Label>
                                <div className="mt-1">
                                    <Input
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        className="mt-1 block w-full"
                                        autoComplete="current-password"
                                        handleChange={onHandleChange}
                                    />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <Label
                                    htmlFor="password_confirmation"
                                    value="비밀번호 확인"
                                >
                                    비밀번호 확인
                                </Label>
                                <div className="mt-1">
                                    <Input
                                        type="password"
                                        name="password_confirmation"
                                        value={data.password_confirmation}
                                        className="mt-1 block w-full"
                                        handleChange={onHandleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <Button processing={processing}>
                                    회원가입
                                </Button>
                            </div>
                        </form>
                        <div className="mt-6 relative">
                            <div
                                className="absolute inset-0 flex items-center"
                                aria-hidden="true"
                            >
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">
                                    이미 계정이 있으신가요?
                                </span>
                            </div>
                        </div>
                        <div className="flex justify-center my-6">
                            <Link
                                href={route("login")}
                                className="underline text-sm text-gray-600 hover:text-gray-900"
                            >
                                로그인
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Guest>
    );
}
