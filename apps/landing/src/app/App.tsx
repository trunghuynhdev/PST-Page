import { BrowserRouter } from 'react-router-dom';
import { LandingPage } from '@/pages/landing';

export function App() {
  return (
    <BrowserRouter>
      <LandingPage/>
    </BrowserRouter>
  );
}
