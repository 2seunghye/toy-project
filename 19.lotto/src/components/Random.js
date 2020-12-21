import React from 'react';
import '../components/Random.css';

class LottoNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: '?',
      num2: '?',
      num3: '?',
      num4: '?',
      num5: '?',
      num6: '?',
    };
  }

  randomize = () => {
    const randomNum = new Set();

    while (randomNum.size < 6) {
      const random = Math.floor(Math.random() * 45) + 1;
      randomNum.add(random);
    }

    const result = Array.from(randomNum);
    result.sort((a, b) => {
      return a - b;
    });
    console.log(result);

    this.setState({
      num1: result[0],
      num2: result[1],
      num3: result[2],
      num4: result[3],
      num5: result[4],
      num6: result[5],
    });

    console.log(this.state);
  };

  render() {
    return (
      <div className="lottoBox">
        <h1>로또번호 생성기</h1>
        <button onClick={this.randomize}>눌러주세요!</button>
        <div className="lottoBallBox">
          <div className="style1 lottoBall">{this.state.num1}</div>
          <div className="style2 lottoBall">{this.state.num2}</div>
          <div className="style3 lottoBall">{this.state.num3}</div>
          <div className="style4 lottoBall">{this.state.num4}</div>
          <div className="style5 lottoBall">{this.state.num5}</div>
          <div className="style6 lottoBall">{this.state.num6}</div>
        </div>
      </div>
    );
  }
}

export default LottoNumber;
