import FooterContainer from './layout/FooterContainer';
import HeaderContainer from './layout/HeaderContainer';
import MainContainer from './layout/MainContainer';
import WorkingHourContainer from './layout/WorkingTimeContainer';

function App() {
  return (
    <div className="flex h-screen flex-col">
      <HeaderContainer />
      <MainContainer>
        <WorkingHourContainer />
      </MainContainer>
      <FooterContainer />
    </div>
  );
}

export default App;
