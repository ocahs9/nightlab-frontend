import { del, get, patch, post } from "@apis/index";
import { IcPlusRed, IcXRed } from "@assets/svgs/index";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import * as S from "./Todo.styled";

const Todo = () => {
  const [isTodoOpen, setIsTodoOpen] = useState(false);
  const location = useLocation();
  const newTodoIds = location.state?.newTodoIds || []; //전달받은 새로 생성된 todo의 id를 배열로 가져옴
  //추후 api 요청으로 받아온걸로 세팅할 예정 - 아래는 그냥 더미 예시(어차피 렌더링 안됨)
  const [todos, setTodos] = useState({
    1: {text: '0721 목표작업', completed: false, isEditing: false },
    2: {text: '0721 목표작업', completed: false, isEditing: false },
    3: {text: '0721 목표작업', completed: false, isEditing: false },
    4: {text: '0721 목표작업', completed: false, isEditing: false },
    5: {text: '0721 목표작업', completed: false, isEditing: false },
  })

  useEffect(()=>{
    console.log("하이하이",todos);
  },[todos])

  //마운트 시 조회한 값으로 렌더링
  useEffect(()=>{
    todoGetApi();
  },[])

  const todoGetApi = async() => {
    try{
      const response = await get("/api/todo");
      
      //api 명세랑 또 달라 ㅜㅜ 결국 내가 수정
      const apiTodo = response.data;
      const filteredApiTodo = apiTodo.filter((todo)=>newTodoIds.includes(todo.id));
      
      const formattedApiTodo = filteredApiTodo.reduce((acc,{id, text, completed})=> {
        acc[id] = {text, completed, isEditing: false};
        return acc;
      },{});
      
      setTodos(formattedApiTodo); //로컬 todos 업데이트
    }catch(error){
      console.error(error);
    }
  }

  const todoCreateApi = async() => {
    const formattedTodos = Object.values(todos).map((todo)=>({
      text: todo.text
    }));
    try{
      const response = await post("/api/todo", {
        todo: formattedTodos
      });
      //아마 여기서 넘겨주는 id를 활용해서 객체를 세팅해야함
      console.log(response);
    }catch(error){
      console.log("정상적으로 등록되지 않았습니다.")
      console.error(error);
    }
  }

  const todoEditApi = async(id)=> {
    const formattedTodos = {};
    formattedTodos["text"] = todos[id].text;
    formattedTodos["completed"] = todos[id].completed;
    try{
      const response = await patch(`/api/todo/${id}`, formattedTodos);
      console.log(response);
      
    }catch(error){
      console.error(error);
    }
  }

  const todoDeleteApi = async(id)=> {
    try{
      const response = await del(`/api/todo/${id}`);
      console.log(response);
      
    }catch(error){
      console.error(error);
    }
  }

  const todoCompletedPatchApi = async(id) => {
    try{
      const response = await patch(`/api/todo/checkbox/${id}`);
      console.log(response);
      
    }catch(error){
      console.error(error);
    }
  }
  
  /*
  const handleCreateTodo = () => {
    todoCreateApi();
  }*/

    /*
  const handleTodoEdit = (id) => () =>{
    todoEditApi(id);
  }*/

  /*
  const handleTodoCompletedEdit = (id) => () =>{
    todoCompletedPatchApi(id);
  }*/

    /*
  const handleTodoDelete = (id) => () => {
    todoDeleteApi(id);
  }*/


  

  useEffect(()=>{
    
  },[])

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
    todoCompletedPatchApi(id); //api 요청도 보냄
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
    //이제 이 new Id, newTodo 부분을 api 요청 받아온 걸로 세팅하는 로직으로 변경해야할 수 있음.
    const newTodo = {text: newTodoText, completed: false, isEditing: false};
    
    setTodos((prevTodos)=>({
      ...prevTodos,
      [newId]: newTodo,
    }))
    todoCreateApi(); //api 요청 보냄
  }

  const handleDeleteTodo = (id) => {
    const updatedTodos = {...todos};
    delete updatedTodos[id]; //updateTodos에서 해당 객체(todolist) 삭제

    //index, 즉 id에 해당하는 부분을 수정하는 로직(재정렬) - 중간에 사라질 수도 있으므로
    //reduce함수는 2개의 인자(리듀서 함수, 초기값 - 누적기가 시작하는 값)
    //리듀서 함수는 
    /*
    const reorderedTodos = Object.keys(updatedTodos).reduce((acc, currentKey, idx)=>{
      acc[idx+1]= updatedTodos[currentKey];
      return acc; //현재 acc 갱신
    }
    ,{})//{}는 초기 acc를 의미함*/

    todoDeleteApi(id); //삭제 api 요청도 보냄 
    setTodos(updatedTodos);
    
  }

  const handleToggleEdit = (id) =>{
    setTodos((prevTodos)=>({
      ...prevTodos,
      [id]: {
        ...prevTodos[id],
        isEditing: !prevTodos[id].isEditing,
      }
    }));

    //만약 수정완료시에 눌렀을경우 -> 수정 api 요청도 같이 보냄
    if(todos[id].isEditing){
      todoEditApi(id);
    }
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
            <S.TodoListTitle>목표 작업<IcPlusRed style={{ cursor: 'pointer' }}  onClick={handleAddTodo}/></S.TodoListTitle>
            <S.TodoListCloseBtn onClick={handelOpenToggleTodo}><IcXRed/></S.TodoListCloseBtn>
          </S.TodoListHeader>

          <S.TodoListContainer>
            {Object.entries(todos).map(([id,todo])=>(
              <S.TodoListBox key={id}>
              <S.TodoListBoxContent>
                <S.TodoListBoxCheckButton onClick={()=>handleToggleCompleted(id)} $isCompleted={todo.completed}/>
                <S.TodoListBoxTextInput
                  disabled={!todo.isEditing} 
                  $editing={todo.isEditing}
                  onChange={handleChangeText(id)}
                  placeholder={"to-do를 입력해주세요"} 
                  value={todo.text}>
                </S.TodoListBoxTextInput>
              </S.TodoListBoxContent>
              <S.TodoListBoxEdit>
                <S.TodoListBoxEditBtn $red={todo.isEditing} onClick={()=>handleToggleEdit(id)} />
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
