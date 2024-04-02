import Features from '../components/Feature';
import LandingHeader from '../components/LandingHeader';

function LandingPage() {
  return (
    <div>
      <LandingHeader />

      <div className='w-[100vw] h-[200px] bg-blue-600 mt-[50px] mb-10'></div>

      <Features />
    </div>
  );
}

export default LandingPage;
