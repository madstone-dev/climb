import { getAvatar } from '@/Utils/auth.utils';

export default function UserProfile({
  auth,
  className = 'object-cover rounded-full w-9 h-9',
}) {
  return (
    <img
      className={className}
      src={getAvatar(auth.user.name)}
      alt={`${auth.user.name}'s profile`}
    />
  );
}
