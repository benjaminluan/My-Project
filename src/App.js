import React from "react";
import Landing from "./pages/Landing";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";
import Showcase from "./components/Showcase";

function App() {
  return (
    <ScrollContainer>
      <ScrollPage>
        <Animator animation={batch(Fade())}>
          <Landing />
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={batch(Fade())}>
          <Showcase />
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
}

export default App;
