// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }
//   render() {
//     const text = this.state.liked ? '좋아요 취소' : '좋아요';
//     return React.createElement(
//       'button',
//       { onClick: () => this.setState({ liked: true }) },
//       text
//     );
//   }
// }

const LikeButton = () => {
  const [liked, setLiked] = React.useState('false');
  const text = liked ? '좋아요 취소' : '좋아요';

  return React.createElement(
    'button',
    { onClick: () => setLiked(!liked) },
    text
  );
};

const Container = () => {
  const [count, setCount] = React.useState(0);

  return React.createElement(
    'div',
    null,
    React.createElement(LikeButton),
    React.createElement(
      'div',
      { style: { marginTop: 20 } },
      React.createElement('span', null, '현재 카운트: '),
      React.createElement('span', null, count),
      React.createElement(
        'button',
        { onClick: () => setCount(count + 1) },
        '증가'
      ),
      React.createElement(
        'button',
        { onClick: () => setCount(count - 1) },
        '감소'
      )
    )
  );
};

// class Container extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }
//   render() {
//     return React.createElement(
//       'div',
//       null,
//       React.createElement(LikeButton),
//       React.createElement(
//         'div',
//         { style: { marginTop: 20 } },
//         React.createElement('span', null, '현재 카운트: '),
//         React.createElement('span', null, this.state.count),
//         React.createElement(
//           'button',
//           { onClick: () => this.setState({ count: this.state.count + 1 }) },
//           '증가'
//         ),
//         React.createElement(
//           'button',
//           { onClick: () => this.setState({ count: this.state.count - 1 }) },
//           '감소'
//         )
//       )
//     );
//   }
// }

const domContainer = document.querySelector('#react-root');
ReactDOM.render(React.createElement(Container), domContainer);
