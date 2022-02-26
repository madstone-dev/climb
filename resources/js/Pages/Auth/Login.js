import React, { useEffect } from "react";
import Button from "@/Components/Button";
import Checkbox from "@/Components/Checkbox";
import Input from "@/Components/Input";
import ValidationErrors from "@/Components/ValidationErrors";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import Guest from "@/Layouts/Guest";
import Logo from "@/Components/Logo";
import Label from "@/Components/Label";

export default function Login(props) {
    const { status, canResetPassword } = props;
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
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
        post(route("login"));
    };

    return (
        <Guest>
            <Head title="로그인" />
            <div className="mx-auto w-full max-w-sm lg:w-96">
                <div>
                    <div className="flex space-x-3 items-center">
                        <Logo className="w-12 h-12" />
                        <span className="text-4xl font-extrabold">
                            MadStone
                        </span>
                    </div>
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                        로그인 하세요
                    </h2>
                </div>

                <div className="mt-8">
                    <div className="mt-6">
                        {status && (
                            <div className="mb-4 font-medium text-sm text-green-600">
                                {status}
                            </div>
                        )}
                        <ValidationErrors errors={errors} />
                        <form onSubmit={submit} className="space-y-6">
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

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <label className="flex items-center">
                                        <Checkbox
                                            name="remember"
                                            value={data.remember}
                                            handleChange={onHandleChange}
                                        />

                                        <span className="ml-2 text-sm text-gray-600">
                                            로그인 유지
                                        </span>
                                    </label>
                                </div>

                                <div className="text-sm">
                                    {canResetPassword && (
                                        <Link
                                            href={route("password.request")}
                                            className="underline text-sm text-gray-600 hover:text-gray-900"
                                        >
                                            비밀번호를 잊으셨나요?
                                        </Link>
                                    )}
                                </div>
                            </div>

                            <div>
                                <Button processing={processing}>로그인</Button>
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
                                    아직 계정이 없으신가요?
                                </span>
                            </div>
                        </div>
                        <div className="flex justify-center my-6">
                            <Link
                                href={route("register")}
                                className="underline text-sm text-gray-600 hover:text-gray-900"
                            >
                                회원가입
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Guest>
    );
}
