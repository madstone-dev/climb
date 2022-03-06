import React from 'react';
import Button from '@/Components/Button';
import Input from '@/Components/Input';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import Guest from '@/Layouts/Guest';
import Logo from '@/Components/Logo';
import { routes } from '@/constances';
import { classNames } from '@/Utils/commons';
import { textColor } from '@/styles';

export default function ForgotPassword(props) {
  const { status } = props;
  const { data, setData, post, processing, errors } = useForm({
    email: '',
  });

  const onHandleChange = (event) => {
    setData(event.target.name, event.target.value);
  };

  const submit = (e) => {
    e.preventDefault();

    post(route(routes.PASSWORD_EMAIL));
  };

  return (
    <Guest>
      <Head title="비밀번호 재설정" />
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
            비밀번호 재설정
          </h2>
        </div>
        <div className="mt-8">
          <div
            className={classNames(
              'mb-4 text-sm leading-normal',
              textColor.secondary,
            )}
          >
            비밀번호를 잊어 버리셨나요?
            <br />
            이메일 주소를 알려주시면 비밀번호 재설정 링크를 이메일로
            보내드리겠습니다.
          </div>

          {status && (
            <div className="mb-4 text-sm font-medium text-green-600">
              {status}
            </div>
          )}

          <ValidationErrors errors={errors} />

          <form onSubmit={submit}>
            <Input
              type="text"
              name="email"
              value={data.email}
              className="block w-full mt-1"
              isFocused={true}
              handleChange={onHandleChange}
            />

            <div className="flex items-center justify-end mt-6">
              <Button processing={processing}>
                비밀번호 재설정 링크 보내기
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Guest>
  );
}
