import { useState } from 'react';
import Footer from './Footer';
import Header from './Header';

const Nav = (props) => {
  let content = null;
  let [mode, setMode] = useState('WELCOME');
  let [id, setId] = useState(null);
  let title,
    body = null;
  if (mode === 'WELCOME') {
    content = <Footer title="WELCOME" />;
  } else {
    for (let i = 0; i < props.menus.length; i++) {
      if (props.menus[i].id === id) {
        title = props.menus[i].title;
        body = props.menus[i].body;
      }
    }
    content = <Footer title={title} body={body} />;
  }
  const lis = [];
  for (let i = 0; i < props.menus.length; i++) {
    lis.push(
      <a
        href="#"
        id={props.menus[i].id}
        onClick={function (event) {
          event.preventDefault();
          setMode('Read');
          setId(props.menus[i].id);
        }}
      >
        <li>{props.menus[i].title}</li>
      </a>
    );
  }
  return (
    <div>
      <nav>
        <ol>{lis}</ol>
      </nav>
      {content}
    </div>
  );
};

const Layout = (props) => {
  const menus = [
    { id: 1, title: 'html', body: 'html is html' },
    { id: 2, title: 'css', body: 'css is css' },
    { id: 3, title: 'javascript', body: 'javascript is javascript' },
  ];
  console.log(props.children);
  return (
    <div>
      <Header onChangeMode={() => {}} />
      <Nav menus={menus} onChangeMode={(_id) => {}} />
      <main>{props.children}</main>
      <Footer title="this is footer" />
    </div>
  );
};

export default Layout;
