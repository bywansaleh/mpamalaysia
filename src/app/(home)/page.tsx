import Achievements from './sections/achievements';
import Council from './sections/council';
import Pillars from './sections/pillars';
import Publishers from './sections/publishers';
import Welcome from './sections/welcome';

export const dynamic = 'force-static';
export const revalidate = 60;
// export const runtime = 'edge';

export default function Home() {
  return (
    <div>
      <Welcome />
      <Pillars />
      <Publishers />
      <Council />
      <Achievements />
      {/* <Instagram /> */}
    </div>
  );
}
