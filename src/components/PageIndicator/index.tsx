import * as S from "./styles";
import { Link } from "react-scroll";

const PageIndicator = () => {
    return (
        <S.Container>
            <S.List>
                <S.Item>
                    <Link
                        to="Hero"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        <S.Circle></S.Circle>
                    </Link>
                </S.Item>
                <S.Item>
                    <Link
                        to="Projects"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        <S.Circle></S.Circle>
                    </Link>
                </S.Item>
                <S.Item>
                    <Link
                        to="Skills"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        <S.Circle></S.Circle>
                    </Link>
                </S.Item>
            </S.List>
        </S.Container>
    );
};

export default PageIndicator;
