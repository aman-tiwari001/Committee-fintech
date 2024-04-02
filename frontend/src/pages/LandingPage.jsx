import Features from '../components/Feature';
import LandingHeader from '../components/LandingHeader';

function LandingPage() {
  return (
    <div>
      <LandingHeader />

      <div className='w-[100vw] h-[400px] bg-blue-600 mt-8 mb-5'></div>

      <Features />
    </div>
  );
}

export default LandingPage;
