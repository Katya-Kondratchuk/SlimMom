import ContainerLayout from 'components/Container/Container';
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
// import { object } from 'prop-types';

const DiaryPage = () => {
  const [products, setProducts] = useState([]);
  const [date, setDate] = useState('');
  const [currentDayId, setCurrentDayId] = useState('');
  // console.log(products);
  // console.log(currentDayId);
  // console.log(date);

  useEffect(() => {
    if (date === '') {
      return;
    }
    getDayProducts({ date: date }).then(res => {
      // console.log(res);
      const newDayId = res.id;
      const newEatenProducts = res.eatenProducts;
      // console.log(newDayId);

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
      } else {
        setProducts(res.day.eatenProducts);
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
    });
  };
  return (
    <ContainerLayout>
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
        <RightSideBar />
      </div>
    </ContainerLayout>
  );
};

export default DiaryPage;
