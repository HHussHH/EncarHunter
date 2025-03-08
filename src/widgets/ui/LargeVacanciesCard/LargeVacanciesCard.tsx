import "./LargeVacanciesCard.scss";
import {FC, Fragment, ReactNode} from "react";
import {PositionDetails} from "@/shared/ui";
import {ICars} from "@/entities/cars/api/CarsPage.type.ts";
interface ILargeVacanciesCardProps extends ICars {
  children?: ReactNode,
  isMap?:boolean,
}

export const LargeVacanciesCard:FC<ILargeVacanciesCardProps> = (props) => {
  const {isMap = true,children} = props
  return (<h1>large</h1>)
{/*<>*/}
{/*  <p className={"LargeCard__createdAt"}>{createdAt}</p>*/}
{/*  <section className="LargeCard" key={paymentType}>*/}
{/*	<div className="LargeCard__body">*/}
{/*	  <div className="LargeCard__content">*/}
{/*		<span className="LargeCard__price">От {paymentAmount.toLocaleString("ru-RU")} руб / куб</span>*/}
{/*		<h2 className="LargeCard__title">*/}
{/*		  {workType.join(", ")}*/}
{/*		</h2>*/}
{/*		{selectsOption.length > 0 && <ul className="LargeCard__details">*/}
{/*		  {*/}
{/*			selectsOption.map((opt) => (*/}
{/*			  <Fragment key={opt}>*/}
{/*				<PositionDetails>{opt}</PositionDetails>*/}
{/*			  </Fragment>*/}
{/*			))*/}
{/*		  }*/}
{/*				</ul>}*/}
{/*		<p className={"LargeCard__description"}>{description}</p>*/}
{/*	  </div>*/}
{/*	  {*/}
{/*		isMap &&   <div id="map" className='LargeCard__map'>*/}
{/*					<YandexMap behaviors={[]} location={{zoom:11,center:coordinates}}/>*/}
{/*				</div>*/}
{/*	  }*/}
{/*	</div>*/}
{/*	<footer className={"LargeCard__footer"}>*/}
{/*		{children}*/}
{/*	</footer>*/}
{/*  </section>*/}
{/*</>*/}
};

