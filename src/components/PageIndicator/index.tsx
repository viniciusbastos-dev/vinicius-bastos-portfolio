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
                        <S.Row>
                            <S.Text>Home</S.Text>
                            <S.Circle></S.Circle>
                        </S.Row>
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
                        <S.Row>
                            <S.Text>Projects</S.Text>
                            <S.Circle></S.Circle>
                        </S.Row>
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
                        <S.Row>
                            <S.Text>Skills</S.Text>
                            <S.Circle></S.Circle>
                        </S.Row>
                    </Link>
                </S.Item>
            </S.List>
        </S.Container>
    );
};

export default PageIndicator;
