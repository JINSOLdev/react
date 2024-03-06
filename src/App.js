/*eslint-disable*/

import { useState } from 'react';
import './App.css';

function App() {
    let [title, setTitle] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
    let [like, setLike] = useState([0, 0, 0]);
    let [modal, setModal] = useState(false);
    let [modalTitle, setModalTitle] = useState(0);

    return (
        <div className="App">
            <div className="black-nav">
                <h4>reactBlog</h4>
            </div>

            <button
                className="button"
                onClick={() => {
                    // spread operator : 괄호 벗기기용 연산자, array나 object 자료형을 복사할 때 많이 사용함
                    let copy = [...title]; 
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

            {title.map(function (a, i) {   // map 안에서의 i는 반복문이 돌 때마다 0,1,2... 이렇게 증가하는 정수다. 
                return (
                    <div className="list" key={i}>
                        <h4>
                            <span
                                style={{ cursor: 'pointer' }}
                                onClick={() => {
                                    setModal(!modal);
                                    setModalTitle(i);
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

            <button
                onClick={() => {
                    setModalTitle(0);
                }}
            >
                0번글
            </button>
            <button
                onClick={() => {
                    setModalTitle(1);
                }}
            >
                1번글
            </button>
            <button
                onClick={() => {
                    setModalTitle(2);
                }}
            >
                2번글
            </button>

            {modal === true ? <Modal modalTitle={modalTitle} title={title} setTitle={setTitle} /> : null}
        </div>
    );
}

function Modal(props) {
    return (
        <div className="modal">
            <h4>{props.title[props.modalTitle]}</h4>
            <p>날짜</p>
            <p>상세내용</p>
            <button
                onClick={() => {
                    let modalCopy = [...props.title];
                    // console.log(modalCopy);
                    modalCopy = ['여자코트 추천', '강남 우동맛집', '파이썬독학'];
                    // console.log(modalCopy);
                    props.setTitle(modalCopy);
                }}
            >
                글수정
            </button>
        </div>
    );
}

export default App;
