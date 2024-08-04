import { IcCheckGoal, IcPlusRed, IcUncheckGoal, IcXRed } from "@assets/svgs/index";
import * as S from "./Todo.styled";

const Todo = () => {
  const test = true;

  return (
    <S.TodoWrapper>
      <S.TodoIconWrapper>
        <S.TodoText>to-do</S.TodoText>
        <S.TodoIcon/>
      </S.TodoIconWrapper>
      <S.TodoListWrapper>
        <S.TodoListLayout>
          <S.TodoListHeader>
            <S.TodoListTitle>목표 작업<IcPlusRed/></S.TodoListTitle>
            <S.TodoListCloseBtn><IcXRed/></S.TodoListCloseBtn>
          </S.TodoListHeader>
          <S.TodoListContainer>
            <S.TodoListBox>
              <S.TodoListBoxContent>
                {test? <IcCheckGoal/> : <IcUncheckGoal/>}
                <S.TodoListBoxText>0721 목표작업</S.TodoListBoxText>
              </S.TodoListBoxContent>
              <S.TodoListBoxEdit>
                <S.TodoListBoxEditBtn/>
                <S.TodoListBoxDeleteBtn/>
              </S.TodoListBoxEdit>
            </S.TodoListBox>

            <S.TodoListBox>
              <S.TodoListBoxContent>
                {test? <IcCheckGoal/> : <IcUncheckGoal/>}
                <S.TodoListBoxText>0721 목표작업</S.TodoListBoxText>
              </S.TodoListBoxContent>
              <S.TodoListBoxEdit>
                <S.TodoListBoxEditBtn/>
                <S.TodoListBoxDeleteBtn/>
              </S.TodoListBoxEdit>
            </S.TodoListBox>

            <S.TodoListBox>
              <S.TodoListBoxContent>
                {test? <IcCheckGoal/> : <IcUncheckGoal/>}
                <S.TodoListBoxText>0721 목표작업</S.TodoListBoxText>
              </S.TodoListBoxContent>
              <S.TodoListBoxEdit>
                <S.TodoListBoxEditBtn/>
                <S.TodoListBoxDeleteBtn/>
              </S.TodoListBoxEdit>
            </S.TodoListBox>

            <S.TodoListBox>
              <S.TodoListBoxContent>
                {test? <IcCheckGoal/> : <IcUncheckGoal/>}
                <S.TodoListBoxText>0721 목표작업</S.TodoListBoxText>
              </S.TodoListBoxContent>
              <S.TodoListBoxEdit>
                <S.TodoListBoxEditBtn/>
                <S.TodoListBoxDeleteBtn/>
              </S.TodoListBoxEdit>
            </S.TodoListBox>

            <S.TodoListBox>
              <S.TodoListBoxContent>
                {test? <IcCheckGoal/> : <IcUncheckGoal/>}
                <S.TodoListBoxText>0721 목표작업</S.TodoListBoxText>
              </S.TodoListBoxContent>
              <S.TodoListBoxEdit>
                <S.TodoListBoxEditBtn/>
                <S.TodoListBoxDeleteBtn/>
              </S.TodoListBoxEdit>
            </S.TodoListBox>
          </S.TodoListContainer>

        </S.TodoListLayout>
      </S.TodoListWrapper>
    </S.TodoWrapper>
  )
}

export default Todo
