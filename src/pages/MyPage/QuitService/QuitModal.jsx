import * as QM from "./QuitModal.styled";

const QuitModal = ({ onHide, onExit }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onHide();
    }
  };

  return (
    <>
      <QM.Wrapper onClick={handleBackdropClick}>
        <QM.QuitModal >
          <QM.QuitModalBody>
            <h4>정말 탈퇴하시겠어요?</h4>
            <p>탈퇴하면 정보를 복구할 수 없어요</p>
            <QM.QuitModalFooter>
              <QM.ReturnButton onClick={onHide}>돌아가기</QM.ReturnButton>
              <QM.QuitButton onClick={onExit}>탈퇴하기</QM.QuitButton>
            </QM.QuitModalFooter>
          </QM.QuitModalBody>
        </QM.QuitModal>
      </QM.Wrapper>
    </>
  );
};

export default QuitModal;
