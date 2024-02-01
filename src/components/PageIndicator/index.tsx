import * as S from "./styles";
import { Link } from "react-scroll";

const PageIndicator = () => {

    return (
        <S.Container>
            <S.List>
                <S.Item>
                    <Link
                        activeClass="active"
                        to="Home"
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
                        activeClass="active"
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
                        activeClass="active"
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
