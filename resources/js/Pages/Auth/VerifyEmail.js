import React from 'react';
import Button from '@/Components/Button';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import Guest from '@/Layouts/Guest';
import Logo from '@/Components/Logo';
import { routes } from '@/constances';

export default function VerifyEmail(props) {
  const { status } = props;
  const { post, processing } = useForm();

  const submit = (e) => {
    e.preventDefault();
    post(route(routes.VERIFICATION_SEND));
  };

  return (
    <Guest>
      <Head title="이메일 확인" />
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
            이메일 확인
          </h2>
        </div>
        <div className="mt-8">
          <div className="mb-4 text-sm text-gray-600">
            가입해주셔서 감사합니다! 시작하기 전에 이메일로 전달된 링크를
            클릭하여 인증을 완료해주세요. 혹시 이메일을 받지 못했다면 재전송
            버튼을 눌러주세요.
          </div>

          {status === 'verification-link-sent' && (
            <div className="mb-4 text-sm font-medium text-green-600">
              등록된 주소로 새 이메일 확인 링크가 전송되었습니다.
            </div>
          )}
          <form onSubmit={submit}>
            <div className="flex flex-col items-center justify-between mt-4 space-y-3">
              <Button processing={processing}>이메일 확인 재전송</Button>
              <Link
                href={route(routes.LOGOUT)}
                method="post"
                as="button"
                className="text-sm text-gray-600 underline hover:text-gray-900"
              >
                로그아웃
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Guest>
  );
}
