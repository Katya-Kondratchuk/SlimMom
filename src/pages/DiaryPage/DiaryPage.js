import ContainerLayout from 'components/Container/Container';
import DairyAddProductForm from 'components/DairyAddProductForm/DairyAddProductForm';
import DairyProductList from 'components/DairyProductList/DairyProductList';
import RightSideBar from 'components/RightSideBar/RightSideBar';
import DiaryDateСalendar from 'components/DiaryDateСalendar/DiaryDateСalendar';
import { useState } from 'react';
import {
  deleteProduct,
  getDayProducts,
  postProduct,
} from 'services/api/base_api';
// import { object } from 'prop-types';

const DiaryPage = () => {
  const [products, setProducts] = useState([]);
  const [date, setDate] = useState('');
  console.log(products);

  const handleDateChange = date => {
    // console.log(date);
    const backendDate = new Date(date).toISOString().split('T')[0];
    setDate(backendDate);
    // console.log(backendDate);
  };

  const handelSubmit = object => {
    // console.log(object);

    const newProduct = {
      date: date,
      productId: object.id,
      weight: +object.weight,
    };
    // console.log(newProduct);
    postProduct(newProduct).then(res => {
      // const new = [res.eatenProduct];
      setProducts(prevProducts => [
        ...prevProducts,
        ...[
          {
            ...(res?.day || res?.newDay),
            ...res.eatenProduct,
            dayId: res.day?.id || res.newDay?.id,
          },
        ],
      ]);

      console.log(res);
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
    console.log(object);
    deleteProduct(object).then(res => {
      console.log(res);
    });
    getDayProducts(date).then();
  };
  return (
    <ContainerLayout>
      <div>
        <DiaryDateСalendar onDateChange={handleDateChange} />
        <DairyAddProductForm onSubmitting={handelSubmit} />
        {products.length === 0 ? (
          'нету нечего'
        ) : (
          <DairyProductList poducts={products} onDeleteProduct={handleDelete} />
        )}
        <RightSideBar />
      </div>
    </ContainerLayout>
  );
};

export default DiaryPage;
