import React, { Component } from 'react';

class ScrollBox extends Component {
    scrollToButtom = () => {
        const { scrollHeight, clientHeight } = this.box;
        /*위 코드는 비구조화 할당 문법 사용
        다음 코드와 동일
        const scrollHeight = this.box.scrollHeight;
        const clientHeight = this.box.cliengHeight;
        */

        this.box.scrollTop = scrollHeight - clientHeight;

    }
    render() {
        const style = {
            border: '1px solid black',
            height: '300px',
            width: '300px',
            overflow: 'auto',
            position: 'relative'
        };

        const innerStyle = {
            width: '100%',
            height: '650px',
            background: 'linear-gradient(white,black)'
        }
        return (
            <div
                style={style}
                ref={(ref) => { this.box = ref }}>
                <div style={innerStyle} />
            </div>
        );
    }
}
export default ScrollBox;