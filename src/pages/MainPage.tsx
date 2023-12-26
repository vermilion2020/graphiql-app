import Main from '../components/main/Main';
import ErrorBoundary from '../components/error-boundary/ErrorBoundary';

function MainPage() {
  return (
    <ErrorBoundary>
      <div className="content">
        <Main />
      </div>
    </ErrorBoundary>
  );
}

export default MainPage;
