import * as S from "./styles";

const PageIndicator = () => {
    return (
        <S.Container>
            <S.List>
                <a href="#Home">
                    <S.Item>
                        <S.Circle></S.Circle>
                    </S.Item>
                </a>
                <a href="#Projects">
                    <S.Item>
                        <S.Circle></S.Circle>
                    </S.Item>
                </a>
                <a href="#Skills">
                    <S.Item>
                        <S.Circle></S.Circle>
                    </S.Item>
                </a>
            </S.List>
        </S.Container>
    );
};

export default PageIndicator;
