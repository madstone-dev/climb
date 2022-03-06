import React, { useEffect } from 'react';
import Button from '@/Components/Button';
import Input from '@/Components/Input';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import Guest from '@/Layouts/Guest';
import Logo from '@/Components/Logo';
import Label from '@/Components/Label';
import { routes } from '@/constances';
import { classNames } from '@/Utils/commons';
import { textColor } from '@/styles';

export default function Register(props) {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  useEffect(() => {
    return () => {
      reset('password', 'password_confirmation');
    };
  }, []);

  const onHandleChange = (event) => {
    setData(
      event.target.name,
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value,
    );
  };

  const submit = (e) => {
    e.preventDefault();
    post(route(routes.REGISTER));
  };

  return (
    <Guest>
      <Head title="회원가입" />
      <div className="w-full max-w-sm mx-auto lg:w-96">
        <div>
          <Link
            href={route(routes.HOME)}
            className="flex items-center space-x-3"
          >
            <Logo className="w-12 h-12" />
            <span className="text-4xl font-extrabold">MadStone</span>
          </Link>
          <h2
            className={classNames(
              'mt-6 text-3xl font-extrabold',
              textColor.secondary,
            )}
          >
            회원가입
          </h2>
        </div>

        <div className="mt-8">
          <div className="mt-6">
            <ValidationErrors errors={errors} />
            <form onSubmit={submit} className="space-y-6">
              <div>
                <Label
                  htmlFor="name"
                  value="이름"
                  className={textColor.secondary}
                >
                  이름
                </Label>
                <div className="mt-1">
                  <Input
                    type="text"
                    name="name"
                    value={data.name}
                    className="block w-full mt-1"
                    autoComplete="name"
                    isFocused={true}
                    handleChange={onHandleChange}
                    required
                  />
                </div>
              </div>

              <div>
                <Label
                  htmlFor="email"
                  value="이메일"
                  className={textColor.secondary}
                >
                  이메일
                </Label>
                <div className="mt-1">
                  <Input
                    type="text"
                    name="email"
                    value={data.email}
                    className="block w-full mt-1"
                    autoComplete="username"
                    isFocused={true}
                    handleChange={onHandleChange}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <Label
                  htmlFor="password"
                  value="비밀번호"
                  className={textColor.secondary}
                >
                  비밀번호
                </Label>
                <div className="mt-1">
                  <Input
                    type="password"
                    name="password"
                    value={data.password}
                    className="block w-full mt-1"
                    autoComplete="current-password"
                    handleChange={onHandleChange}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <Label
                  htmlFor="password_confirmation"
                  value="비밀번호 확인"
                  className={textColor.secondary}
                >
                  비밀번호 확인
                </Label>
                <div className="mt-1">
                  <Input
                    type="password"
                    name="password_confirmation"
                    value={data.password_confirmation}
                    className="block w-full mt-1"
                    handleChange={onHandleChange}
                    required
                  />
                </div>
              </div>

              <div>
                <Button processing={processing}>회원가입</Button>
              </div>
            </form>
            <div className="relative mt-6">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span
                  className={classNames(
                    'px-2 bg-white dark:bg-neutral-900',
                    textColor.secondary,
                  )}
                >
                  이미 계정이 있으신가요?
                </span>
              </div>
            </div>
            <div className="flex justify-center my-6">
              <Link
                href={route(routes.LOGIN)}
                className={classNames('text-sm underline', textColor.secondary)}
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
