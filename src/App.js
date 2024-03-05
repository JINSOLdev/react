/*eslint-disable*/

import { useState } from 'react';
import './App.css';

function App() {
    let [title, setTitle] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
    let post = '강남 우동 맛집';
    let [like, setLike] = useState([0, 0, 0]);
    let [modal, setModal] = useState(false);

    return (
        <div className="App">
            <div className="black-nav">
                <h4>blog</h4>
            </div>

            <button
                className="button"
                onClick={() => {
                    let copy = [...title]; // spread operator : 괄호 벗기기용 연산자, array나 object 자료형을 복사할 때 많이 사용함
                    copy = ['여자코트 추천', '강남 우동맛집', '파이썬독학'];
                    // console.log(copy);
                    setTitle(copy);
                }}
            >
                변해라얍
            </button>
            <button
                className="button_sort"
                onClick={() => {
                    let copy = [...title];
                    copy.sort();
                    setTitle(copy);
                    // console.log(copy);
                }}
            >
                정렬버튼
            </button>

            {title.map(function (a, i) {
                return (
                    <div className="list" key={i}>
                        <h4>
                            <span
                                style={{ cursor: 'pointer' }}
                                onClick={() => {
                                    setModal(!modal);
                                }}
                            >
                                {title[i]}
                            </span>
                            <span
                                style={{ cursor: 'pointer' }}
                                onClick={() => {
                                    let copy = [...like];
                                    // console.log(copy);
                                    copy[i] = copy[i] + 1;
                                    // console.log(copy[i]);
                                    setLike(copy);
                                }}
                            >
                                👍
                            </span>{' '}
                            {like[i]}{' '}
                        </h4>

                        <p>3월 6일 발행</p>
                    </div>
                );
            })}

            {modal === true ? <Modal /> : null}
        </div>
    );
}

function Modal() {
    return (
        <div className="modal">
            <h4>제목</h4>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    );
}

export default App;
