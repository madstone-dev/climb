export const routes = {
  REGISTER: 'register',
  LOGIN: 'login',
  LOGOUT: 'logout',
  PASSWORD_CONFIRM: 'password.confirm',
  PASSWORD_EMAIL: 'password.email',
  PASSWORD_REQUEST: 'password.request',
  PASSWORD_UPDATE: 'password.update',
  VERIFICATION_SEND: 'verification.send',
  HOME: 'home',
  BOARD: 'board',
  LOCAL_GATHERING: 'local-gathering',
  TRADE: 'trade',
};

export const headerNavs = [
  { name: '홈', href: route(routes.HOME) },
  { name: '자유게시판', href: route(routes.BOARD) },
  { name: '지역모임', href: route(routes.LOCAL_GATHERING) },
  { name: '중고거래', href: '#' },
];

export const headerUserNavs = [
  { name: '내 정보', href: `/profile`, method: 'get' },
  { name: '로그아웃', href: route(routes.LOGOUT), method: 'post' },
];
