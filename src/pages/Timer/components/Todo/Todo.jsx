import { IcCheckGoal, IcPlusRed, IcUncheckGoal, IcXRed } from "@assets/svgs/index";
import { useState } from "react";
import * as S from "./Todo.styled";

const Todo = () => {
  const [isTodoOpen, setIsTodoOpen] = useState(false);
  //추후 api 요청으로 받아온걸로 세팅할 예정
  const [todos, setTodos] = useState({
    1: {text: '0721 목표작업', completed: false, isEditing: false },
    2: {text: '0721 목표작업', completed: false, isEditing: false },
    3: {text: '0721 목표작업', completed: false, isEditing: false },
    4: {text: '0721 목표작업', completed: false, isEditing: false },
    5: {text: '0721 목표작업', completed: false, isEditing: false },
  })

  const handelOpenToggleTodo = () => {
    setIsTodoOpen((prev)=>!prev);
  }

  const handleToggleCompleted = (id) => {
    setTodos((prevTodos)=>({ // set함수는 반드시 무언가를 리턴해야하는 것을 잊지말자!
      ...prevTodos,
      [id]:{
        ...prevTodos[id],
        completed: !prevTodos[id].completed,
      },
    }));
  }

  const handleAddTodo = () => {
    const newTodoText = "";
    const todoCount = Object.keys(todos).length; //객체의 키들을 뽑아 배열을 만든 뒤 길이 체크
    if(todoCount >=5){
      console.log("최대 5개의 todo만 추가할 수 있습니다.");
      return;
    }
    
    //todoCount === 0 (falsy)면 1, 아니면 계산해서 값 할당(객체의 키들을 뽑은 뒤 Number 내장함수로 숫자로 변환한 배열 생성, 그리고 이를 스프레드로 뿌려줌)
    //최대값을 계산하는 Math를 사용하기 위함이므로, 숫자형으로 변환한 것!(원래 객체에서의 key값은 전부 문자열 취급)
    const newId = todoCount ? Math.max(...Object.keys(todos).map(Number)) + 1: 1;
    const newTodo = {text: newTodoText, completed: false, isEditing: false};
    
    setTodos((prevTodos)=>({
      ...prevTodos,
      [newId]: newTodo,
    }))
  }

  const handleDeleteTodo = (id) => {
    const updatedTodos = {...todos};
    delete updatedTodos[id]; //updateTodos에서 해당 객체(todolist) 삭제

    //index, 즉 id에 해당하는 부분을 수정하는 로직(재정렬) - 중간에 사라질 수도 있으므로
    //reduce함수는 2개의 인자(리듀서 함수, 초기값 - 누적기가 시작하는 값)
    //리듀서 함수는 
    const reorderedTodos = Object.keys(updatedTodos).reduce((acc, currentKey, idx)=>{
      acc[idx+1]= updatedTodos[currentKey];
      return acc; //현재 acc 갱신
    }
    ,{})//{}는 초기 acc를 의미함

    setTodos(reorderedTodos);
  }

  const handleToggleEdit = (id) =>{
    setTodos((prevTodos)=>({
      ...prevTodos,
      [id]: {
        ...prevTodos[id],
        isEditing: !prevTodos[id].isEditing,
      }
    }));
  }

  //예술! id를 입력받은 듯한 일반함수가 결국은 이벤트 핸들러에 해당하는 함수를 반환하므로 문제가 없어진다.
  //클로저 개념과, 함수를 반환하는 JS 특성을 적극 활용한 코드 예시!
  //또한, 성능의 향상을 위해서는 매번 새로운 함수를 생성하지 않도록 아래와 같은 방식을 사용하자!(메모리 절약)
  const handleChangeText = (id) => (e) => {
    setTodos((prevTodos)=>({
      ...prevTodos,
      [id]: {
        ...prevTodos[id],
        text: e.target.value,
      }
    }))
  }



  return (
    <S.TodoWrapper>
      <S.TodoIconWrapper>
        <S.TodoText>to-do</S.TodoText>
        <S.TodoIcon onClick={handelOpenToggleTodo}/>
      </S.TodoIconWrapper>
      {
        isTodoOpen && <S.TodoListWrapper>
        <S.TodoListLayout>
          <S.TodoListHeader>
            <S.TodoListTitle>목표 작업<IcPlusRed onClick={handleAddTodo}/></S.TodoListTitle>
            <S.TodoListCloseBtn onClick={handelOpenToggleTodo}><IcXRed/></S.TodoListCloseBtn>
          </S.TodoListHeader>

          <S.TodoListContainer>
            {Object.entries(todos).map(([id,todo])=>(
              <S.TodoListBox key={id}>
              <S.TodoListBoxContent>
                {todo.completed? <IcCheckGoal onClick={()=>handleToggleCompleted(id)}/> : <IcUncheckGoal onClick={()=>handleToggleCompleted(id)}/>}
                <S.TodoListBoxTextInput
                  disabled={!todo.isEditing} 
                  onChange={handleChangeText(id)}
                  placeholder={"to-do를 입력해주세요"} 
                  value={todo.text}>
                </S.TodoListBoxTextInput>
              </S.TodoListBoxContent>
              <S.TodoListBoxEdit>
                <S.TodoListBoxEditBtn onClick={()=>handleToggleEdit(id)} />
                <S.TodoListBoxDeleteBtn onClick={()=>handleDeleteTodo(id)}/>
              </S.TodoListBoxEdit>
            </S.TodoListBox>
            ))}
          </S.TodoListContainer>

        </S.TodoListLayout>
      </S.TodoListWrapper>
      }
      
    </S.TodoWrapper>
  )
}

export default Todo
