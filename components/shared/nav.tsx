import { authOptions } from '@/app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import { Header } from './header'

export async function Nav() {
  const session = await getServerSession(authOptions);

  return (
    <Header session={session} />
  );
}
