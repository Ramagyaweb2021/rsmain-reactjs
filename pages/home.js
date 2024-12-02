import ReactFullpage from '@fullpage/react-fullpage';

const FullpageExample = () => (
  <ReactFullpage
    anchors={['firstPage', 'secondPage', 'thirdPage']}
    navigation
    scrollingSpeed={700}
    render={() => (
      <ReactFullpage.Wrapper>
        <div className="section">
          <h1>First Page</h1>
        </div>
        <div className="section">
          <h1>Second Page</h1>
        </div>
        <div className="section">
          <h1>Third Page</h1>
        </div>
      </ReactFullpage.Wrapper>
    )}
  />
);

export default FullpageExample;
