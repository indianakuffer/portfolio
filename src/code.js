const text = `import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ScreenContainer from '../../shared/ScreenContainer/ScreenContainer';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { easeCubicInOut } from 'd3-ease';
export default function Landing() {'
const history = useHistory();
let [nextPage, setNextPage] = useState(false);
let [growing, setGrowing] = useState(false);
let orientation = window.innerHeight > window.innerWidth ? 'vh' : 'vw';
const springProps = useSpring({'
width: growing ? \`140\${orientation}\` : \`0\${orientation}\`,;
height: growing ? \`140\${orientation}\` : \`0\${orientation}\`,;
config: { duration: 1300, easing: (t) => easeCubicInOut(t) },;
onRest: () => { if (growing) setNextPage(true) };
})'
if (nextPage) {;
setNextPage(false);
history.push('/home');
};
return (;
<ScreenContainer align='center' justify='center'>;
<Welcome onClick={() => setGrowing(true)}>;
<p>Welcome</p>;
<Blob growing={growing} />;
</Welcome>;
<Background style={springProps}></Background>;
</ScreenContainer>;
)};
import React, { useState, useEffect } from 'react';
import ScreenContainer from '../../shared/ScreenContainer/ScreenContainer';
import Window from '../../shared/Window/Window';
import Desktop from '../../Desktop/Desktop';
import About from '../../apps/About/About';
import Work from '../../apps/Work/Work';
import Games from '../../apps/Games/Games';
import Resume from '../../apps/Resume/Resume';
export default function Home() {;
let [mousePos, setMousePos] = useState({ x: null, y: null });
let [count, forceRerender] = useState(0);
let [windowList, setWindowList] = useState({;
'About - Indiana Kuffer': {;
size: { x: window.innerWidth / 1.2, y: window.innerHeight / 1.2 },;
app: About,;
open: false,;
focused: false;
},;
'Work': {;
size: { x: window.innerWidth / 1.2, y: window.innerHeight / 1.2 },;
app: Work,;
background: '#204d79',;
open: false,;
focused: false;
},;
'Games': {;
size: { x: window.innerWidth / 1.2, y: window.innerHeight / 1.2 },;
app: Games,;
background: \`#BEBCB7\`,;
open: false,;
focused: false;
},;
'Resume': {;
size: { x: window.innerWidth / 1.5, y: window.innerHeight / 1.2 },;
app: Resume,;
background: \`white\`,;
open: false,;
focused: false;
},;
});
useEffect(() => {;
//track mouse position for dragging of windows and icons;
window.addEventListener("mousemove", updateMousePosition);
return () => window.removeEventListener("mousemove", updateMousePosition);
}, []);
const updateMousePosition = (e) => {;
setMousePos({ x: e.clientX, y: e.clientY });
};
const openWindow = (title) => {;
// on window open, set window.open to true and window.focused to true without changing others;
focusWindow(title);
const { [title]: current, ...rest } = windowList;
setWindowList({ ...rest, [title]: { ...current, open: true, focused: true } });
};
const closeWindow = (title) => {;
const { [title]: current, ...rest } = windowList;
setWindowList({ ...rest, [title]: { ...current, open: false } });
};
function focusWindow(title) {;
// if title is provided, focus that window. otherwise unfocus all and rerender;
if (!title) {;
Object.keys(windowList).forEach(key => {;
windowList[key].focused = false;
});
forceRerender(count + 1);
return;
};
let { [title]: chosen, ...rest } = windowList;
Object.keys(rest).map(window => {;
rest[window].focused = false;
});
setWindowList({ ...rest, [title]: { ...chosen, focused: true } });
};
return (;
<ScreenContainer>;
<Desktop openWindow={openWindow} focusWindow={focusWindow} mousePos={mousePos} />;
{Object.keys(windowList).map(window => {;
const current = windowList[window];
if (!current.open) return <></>;
const AppName = current.app;
return <Window title={window} size={current.size} background={current.background} mousePos={mousePos} closeFunction={() => closeWindow(window)} focusFunction={() => focusWindow(window)} focused={current.focused} key={window}><AppName /></Window>;
})};
</ScreenContainer>;
);
};
`

const codeBlock = text.split(';')

codeBlock.map(line => line.slice(0, line.length - 1))

export default codeBlock