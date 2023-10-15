import { useParams } from 'react-router-dom'
import { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailTour, getCurrentUser } from "../../redux/actions";
import { detailTourSelector, currentUserSelector } from "../../redux/selector";

function NewOrder() {
  let { tourId } = useParams();
  const [amountMember, setAmountMember] = useState(1);
  const [totalCost, setTotalCost] = useState(0)

  const dispatch = useDispatch();
  const detailTour = useSelector(detailTourSelector);
  const currentUser = useSelector(currentUserSelector);

  useEffect(() => {
    dispatch(getDetailTour(tourId))
    dispatch(getCurrentUser())
    console.log(currentUser);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Fragment>
      <h1>NEW ORDER</h1>
      <div className="order-container">
        <div className="order-left">
          <div className="pay-info-title info-title">PAYMENT INFO</div>
        </div>
        <div className="order-right">
          <div className="tour-info-title info-title">TOUR INFO</div>
          <div className="tour-name">{detailTour.name}</div>
          <div className="tour-info-text">Start date: {detailTour.start_date}</div>
          <div className="tour-info-text">End date: {detailTour.end_date}</div>
          <div className="tour-info-text">Amount member: {amountMember}</div>
          <div className="total-cost">Total cost: {totalCost}</div>
        </div>
      </div>
    </Fragment>
  )
}

export default NewOrder;
