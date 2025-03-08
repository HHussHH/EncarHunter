import {FC, ReactNode} from "react";
import {NavBar} from "@/widgets/ui/NavBar/NavBar.tsx";
import "./Container.scss";
import {Button} from "@/shared/ui";
import {useNavigate} from "react-router-dom";

interface IContainerProps {
  children: ReactNode
  isNav?: boolean
}

export const Container:FC<IContainerProps> = ({children,isNav = true}) => {
  //@ts-ignore
  const padBottom = window.Telegram.WebApp.safeAreaInset.bottom
  const navigate = useNavigate()

  return (
	<div className="Container" style={{
	  paddingBottom:`${ padBottom > 0 ? !isNav ? padBottom + 20 : padBottom + 82 : isNav ? 34 + 82: 34 + 20 }px`}}>
	  {children}
	  {isNav && <NavBar/> }
	  {!isNav &&
		<div className="Container__btn">
					<Button cls={"Container__btn"} size={'big'} theme={"blue"} onClick={() => navigate("/cars")}>
						Вернуться к объявлениям
					</Button>
		</div>}
	</div>
  );
};

