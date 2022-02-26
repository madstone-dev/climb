import React, { useEffect } from "react";
import Button from "@/Components/Button";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import ValidationErrors from "@/Components/ValidationErrors";
import { Head, useForm } from "@inertiajs/inertia-react";
import Guest from "@/Layouts/Guest";
import Logo from "@/Components/Logo";

export default function ConfirmPassword(props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("password.confirm"));
    };

    return (
        <Guest>
            <Head title="비밀번호 확인" />
            <div className="w-full max-w-sm mx-auto lg:w-96">
                <div>
                    <div className="flex items-center space-x-3">
                        <Logo className="w-12 h-12" />
                        <span className="text-4xl font-extrabold">
                            MadStone
                        </span>
                    </div>
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                        비밀번호 재설정
                    </h2>
                </div>
                <div className="mt-8">
                    <div className="mb-4 text-sm text-gray-600">
                        보안을 위해 비밀번호를 입력해주세요.
                    </div>

                    <ValidationErrors errors={errors} />

                    <form onSubmit={submit}>
                        <div className="mt-4">
                            <Label forInput="password" value="Password" />

                            <Input
                                type="password"
                                name="password"
                                value={data.password}
                                className="block w-full mt-1"
                                isFocused={true}
                                handleChange={onHandleChange}
                            />
                        </div>

                        <div className="flex items-center justify-end mt-6">
                            <Button className="ml-4" processing={processing}>
                                확인
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </Guest>
    );
}
