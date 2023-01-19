import DairyAddProductForm from 'components/DairyAddProductForm/DairyAddProductForm';
import DairyProductList from 'components/DairyProductList/DairyProductList';
import RightSideBar from 'components/RightSideBar/RightSideBar';
import DiaryDateСalendar from 'components/DiaryDateСalendar/DiaryDateСalendar';
import { useEffect, useState } from 'react';
import {
  deleteProduct,
  getDayProducts,
  postProduct,
} from 'services/api/base_api';
import { MessageStyled } from 'components/DairyProductList/DairyProductList.styled';
import { StyledContainer } from 'components/Main/Main.styled';
import UserMenu from 'components/Header/UserMenu';
import { useSelector } from 'react-redux';
import { selectAuthIsLoggedIn } from 'redux/auth/authSelectors';
// import { object } from 'prop-types';

const DiaryPage = () => {
  const [products, setProducts] = useState([]);
  const [date, setDate] = useState('');
  const [currentDayId, setCurrentDayId] = useState('');
  const [summaryDay, setSummaryDay] = useState({});
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  // console.log(products);
  // console.log(currentDayId);
  // console.log(date);

  useEffect(() => {
    if (date === '') {
      return;
    }
    getDayProducts({ date: date }).then(res => {
      console.log(res);
      const newDayId = res.id;
      const newEatenProducts = res.eatenProducts;
      // console.log(newDayId);
      setSummaryDay(res.daySummary ?? { ...res, date: date });

      setCurrentDayId(newDayId ?? '');
      setProducts(newEatenProducts ?? []);
    });
  }, [date]);

  const handleDateChange = date => {
    // console.log(date);
    const backendDate = new Date(date).toISOString().split('T')[0];
    setDate(backendDate);
    // console.log(backendDate);
  };

  const handelSubmitPost = object => {
    // console.log(object);

    const newProduct = {
      date: date,
      productId: object.id,
      weight: +object.weight,
    };
    // console.log(newProduct);
    postProduct(newProduct).then(res => {
      // console.log(res);

      if (res.newDay) {
        setCurrentDayId(res.newDay.id);
        setProducts(prev => [...prev, ...[res.eatenProduct]]);
        setSummaryDay(res.newSummary);
      } else {
        setProducts(res.day.eatenProducts);
        setSummaryDay(res.daySummary);
      }

      // const new = [res.eatenProduct];
      // setProducts(prevProducts => [
      //   ...prevProducts,
      //   ...[
      //     {
      //       ...(res?.day || res?.newDay),
      //       ...res.eatenProduct,
      //       dayId: res.day?.id || res.newDay?.id,
      //     },
      //   ],
      // ]);
    });
    //     {
    //   "date": "2020-12-31",
    //   "productId": "5d51694802b2373622ff552c",
    //   "weight": 100
    // }
    // console.log(newProduct);
    // setProducts(prevProducts => [...prevProducts, ...newProduct]);
  };

  const handleDelete = object => {
    // console.log(object);
    deleteProduct(object).then(res => {
      console.log(res);
    });
    getDayProducts({ date: date }).then(res => {
      const newEatenProducts = res.eatenProducts;
      setProducts(newEatenProducts ?? []);
      setSummaryDay(res.daySummary);
    });
  };

  return (
    <StyledContainer>
      <div style={{ display: 'flex' }}>
        <div>
          <DiaryDateСalendar onDateChange={handleDateChange} />
          <DairyAddProductForm onSubmitting={handelSubmitPost} />
          {products.length === 0 ? (
            <MessageStyled>
              There are no products on the selected date
            </MessageStyled>
          ) : (
            <DairyProductList
              poducts={products}
              onDeleteProduct={handleDelete}
              dayId={currentDayId}
            />
          )}
        </div>
        <div>
          {isLoggedIn && (
            <UserMenu styles={{ xs: 'none', md: 'none', lg: 'flex' }} />
          )}
          <RightSideBar summaryDayInfo={summaryDay} />
        </div>
      </div>
    </StyledContainer>
  );
};

export default DiaryPage;
