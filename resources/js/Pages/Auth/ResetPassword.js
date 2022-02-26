import React, { useEffect } from 'react';
import Button from '@/Components/Button';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, useForm } from '@inertiajs/inertia-react';
import Guest from '@/Layouts/Guest';
import Logo from '@/Components/Logo';
import { routes } from '@/constances';

export default function ResetPassword(props) {
  const { token, email } = props;
  const { data, setData, post, processing, errors, reset } = useForm({
    token: token,
    email: email,
    password: '',
    password_confirmation: '',
  });

  useEffect(() => {
    return () => {
      reset('password', 'password_confirmation');
    };
  }, []);

  const onHandleChange = (event) => {
    setData(event.target.name, event.target.value);
  };

  const submit = (e) => {
    e.preventDefault();

    post(route(routes.PASSWORD_UPDATE));
  };

  return (
    <Guest>
      <Head title="Reset Password" />
      <div className="w-full max-w-sm mx-auto lg:w-96">
        <div>
          <Link
            href={route(routes.HOME)}
            className="flex items-center space-x-3"
          >
            <Logo className="w-12 h-12" />
            <span className="text-4xl font-extrabold">MadStone</span>
          </Link>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            비밀번호 재설정
          </h2>
        </div>
        <div className="mt-8">
          <ValidationErrors errors={errors} />

          <form onSubmit={submit}>
            <div>
              <Label forInput="email" value="이메일" />

              <Input
                type="email"
                name="email"
                value={data.email}
                className="block w-full mt-1"
                autoComplete="username"
                handleChange={onHandleChange}
              />
            </div>

            <div className="mt-4">
              <Label forInput="password" value="비밀번호" />

              <Input
                type="password"
                name="password"
                value={data.password}
                className="block w-full mt-1"
                autoComplete="new-password"
                isFocused={true}
                handleChange={onHandleChange}
              />
            </div>

            <div className="mt-4">
              <Label forInput="password_confirmation" value="비밀번호 확인" />

              <Input
                type="password"
                name="password_confirmation"
                value={data.password_confirmation}
                className="block w-full mt-1"
                autoComplete="new-password"
                handleChange={onHandleChange}
              />
            </div>

            <div className="flex items-center justify-end mt-6">
              <Button processing={processing}>비밀번호 재설정</Button>
            </div>
          </form>
        </div>
      </div>
    </Guest>
  );
}
