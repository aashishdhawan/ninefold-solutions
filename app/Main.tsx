import HeroSection from '@/components/home/HeroSection'
import ExpertiseSection from '@/components/home/ExpertiseSection'
import CtaSection from '@/components/home/CtaSection'

export default function Home({ posts }) {
  return (
    <>
      <HeroSection />
      <ExpertiseSection />
      <CtaSection />
    </>
  )
}
