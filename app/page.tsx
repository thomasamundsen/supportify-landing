import { Navigation } from '@/components/Navigation/Navigation';
import { Hero } from '@/components/Hero/Hero';
import { DeepIntegration } from '@/components/DeepIntegration/DeepIntegration';
import { WhySupportify } from '@/components/WhySupportify/WhySupportify';
import { Comparison } from '@/components/Comparison/Comparison';
import { Winner } from '@/components/Winner/Winner';
import { FeatureShowcase } from '@/components/FeatureShowcase/FeatureShowcase';
import { EasySetup } from '@/components/EasySetup/EasySetup';
import { CTA } from '@/components/CTA/CTA';
import { Footer } from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <DeepIntegration />
      <WhySupportify />
      <Comparison />
      <Winner />
      <FeatureShowcase />
      <EasySetup />
      <CTA />
      <Footer />
    </main>
  );
}
