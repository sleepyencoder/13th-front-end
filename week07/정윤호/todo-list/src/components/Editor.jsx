import {useRef ,useState} from 'react';
import "./Editor.css";

const Editor = ({onCreate}) => {
    const [content, setContent] = useState("");
    const contentRef = useRef();

    const onChangeContent = (e) => {
        setContent(e.target.value);
    }

    const onKeyDown = (e) => {
        if(e.keyCode === 13){
            onSubmit(); // 엔터 시 제출 실행
        }
    }

    const onSubmit = () => {
        if(content ==="") {
            contentRef.current.focus(); // 비었으면 입력창에 포커스
            return;
        }
        onCreate(content); // 상위 컴포넌트에 전달
        setContent(""); // 입력창 초기화
    }

  return (
    <div className="Editor">
      <input 
      ref={contentRef}
      value={content} 
      onKeyDown={onKeyDown}
      onChange={onChangeContent} 
      placeholder="새로운 Todo..." />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;