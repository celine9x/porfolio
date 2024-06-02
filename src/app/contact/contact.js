import Scene from '../../components/contact/Scene';
import Text from '../../components/contact/Text';
import './contact.module.css';


export default function Home() {
  return (
    <main className="flex w-full h-screen items-center justify-center">
      <Text />
      <Scene />
    </main>
  );
}