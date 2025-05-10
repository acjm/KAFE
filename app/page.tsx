import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Intent from '@/components/Intent';
import Scenes from '@/components/Scenes';
import Origins from '@/components/Origins';
import Offerings from '@/components/Offerings';
import Soundtrack from '@/components/Soundtrack';
import StayClose from '@/components/StayClose';
import Footer from '@/components/Footer';
import ScrollAnimation from '@/components/ScrollAnimation';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ScrollAnimation>
        <Intent />
      </ScrollAnimation>
      <ScrollAnimation>
        <Scenes />
      </ScrollAnimation>
      <ScrollAnimation>
        <Origins />
      </ScrollAnimation>
      <ScrollAnimation>
        <Offerings />
      </ScrollAnimation>
      <ScrollAnimation>
        <Soundtrack />
      </ScrollAnimation>
      <ScrollAnimation>
        <StayClose />
      </ScrollAnimation>
      <Footer />
    </main>
  );
}