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
  const [liked, setLiked] = React.useState(true);
  let [count, setCount] = React.useState(0);
  let text = liked && `좋아요`;
  let text2 = liked && '좋아요 숫자내리기';
  number = count;

  // const lender = document.createElement('div', () => {
  //   onClick(console.log('hello'));
  // });

  // lender.innerText = '나는 승완이고';
  // lender.setAttribute('class', '너는 보윤이야');

  // console.log(lender);

  const plus = React.createElement(
    'button',
    {
      onClick: () => {
        setLiked(liked);
        setCount((count = count + 1));
      },
    },
    text,
    count
    // state
  );
  const minus = React.createElement(
    'button',
    {
      onClick: () => {
        setLiked(liked);
        setCount((count = count - 1));
      },
    },
    text2,
    count
    // state
  );

  return React.createElement('div', null, plus, minus);
};

const domContainer = document.querySelector('#react-root');
ReactDOM.render(React.createElement(LikeButton), domContainer);
