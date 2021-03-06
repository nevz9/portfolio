import * as React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './GlobalStyles';
import { useModal } from './hooks/useModal';
import Header from './components/Header';
import Showcase from './components/Showcase';
import AboutModal from './components/AboutModal';

const Projects = React.lazy(() => import('./components/Projects'));

const Wrapper = styled.div`
  width: 100%;
  max-width: 850px;
  margin: 1rem auto;
`;

function App() {
  const projectsRef = React.useRef<HTMLDivElement | null>(null);
  const aboutRef = React.useRef<HTMLDivElement | null>(null);
  const backdropRef = React.useRef<HTMLDivElement | null>(null);
  const { isOpen, open, close } = useModal();

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <GlobalStyle />
      <div ref={backdropRef}></div>
      <div ref={aboutRef}></div>
      <Header scrollToProjects={scrollToProjects} open={open} />
      {isOpen && (
        <AboutModal backdropRef={backdropRef.current} aboutRef={aboutRef.current} close={close} />
      )}
      <Wrapper>
        <Showcase scrollToProjects={scrollToProjects} />
        <Projects ref={projectsRef} />
      </Wrapper>
    </>
  );
}

export default App;
