import { useState } from 'react';
import Footer from './Footer';
import Header from './Header';

const Nav = (props) => {
  const lis = [];
  for (let i = 0; i < props.menus.length; i++) {
    lis.push(
      <a
        href="#"
        id={props.menus[i].id}
        onClick={function (event) {
          event.preventDefault();
          props.onChangeMode(Number(props.menus[i].id));
        }}
      >
        <li>{props.menus[i].title}</li>
      </a>
    );
  }
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
};

const Layout = (props) => {
  const menus = [
    { id: 1, title: 'html', body: 'html is html' },
    { id: 2, title: 'css', body: 'css is css' },
    { id: 3, title: 'javascript', body: 'javascript is javascript' },
  ];
  let content = null;
  let [mode, setMode] = useState('WELCOME');
  let [id, setId] = useState(null);
  console.log(id);
  if (mode === 'WELCOME') {
    content = <Footer title="WELCOME" />;
  } else {
    let title,
      body = null;
    for (let i = 0; i < menus.length; i++) {
      console.log(menus[i].id, id);
      if (menus[i].id === id) {
        title = menus[i].title;
        body = menus[i].body;
      }
    }
    content = <Footer title={title} body={body} />;
  }
  return (
    <div>
      <Header
        onChangeMode={() => {
          setMode('READ');
        }}
      />
      <Nav
        menus={menus}
        onChangeMode={(_id) => {
          setMode('Read');
          setId(_id);
        }}
      />
      <main>{props.children}</main>
      {content}
    </div>
  );
};

export default Layout;
