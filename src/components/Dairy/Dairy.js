import DairyAddProductForm from 'components/Dairy/DairyAddProductForm/DairyAddProductForm';
import DairyProductList from 'components/Dairy/DairyProductList/DairyProductList';
import { RightSideBar } from 'components/RightSideBar/RightSideBar';
import DiaryDateСalendar from 'components/Dairy/DiaryDateСalendar/DiaryDateСalendar';
import { useEffect, useState } from 'react';

import { Box } from '@mui/system';
import { MessageStyled } from './DairyProductList/DairyProductList.styled';
import {
  deleteProduct,
  getDayProducts,
  postProduct,
} from 'services/api/base_api';

import { Stack } from '@mui/material';

const Dairy = () => {
  const [products, setProducts] = useState([]);
  const [date, setDate] = useState('');
  const [currentDayId, setCurrentDayId] = useState('');
  const [summaryDay, setSummaryDay] = useState({});
  const [isHidden, setIsHidden] = useState(false);

  // console.log(products);
  // console.log(currentDayId);
  // console.log(date);

  useEffect(() => {
    if (date === '') {
      return;
    }
    getDayProducts({ date: date }).then(res => {
      const newDayId = res.id;
      const newEatenProducts = res.eatenProducts;

      setSummaryDay(res.daySummary ?? { ...res, date: date });

      setCurrentDayId(newDayId ?? '');
      setProducts(newEatenProducts ?? []);
    });
  }, [date]);

  const handelHideComponents = value => {
    setIsHidden(value);
  };
  const handleDateChange = date => {
    const backendDate = new Date(date).toISOString().split('T')[0];
    setDate(backendDate);
  };

  const handelSubmitPost = object => {
    const newProduct = {
      date: date,
      productId: object.id,
      weight: +object.weight,
    };

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
    <Stack
      direction={{ xs: 'column', md: 'column', lg: 'row' }}
      sx={{ gap: '113px', m: '0 auto' }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: { xs: '0px', lg: '253px' },
        }}
      >
        <Box
          sx={{
            margin: { xs: '0 auto', md: '0' },
            // marginRight: { xs: '0px', lg: '113px' },
          }}
        >
          {!isHidden && <DiaryDateСalendar onDateChange={handleDateChange} />}

          <Box
            sx={{
              display: {
                xs: 'flex',
                md: 'block',
              },
              flexDirection: 'column-reverse',
            }}
            component="div"
          >
            <DairyAddProductForm
              onSubmitting={handelSubmitPost}
              onHiddenClick={handelHideComponents}
            />
            {!isHidden &&
              (products.length === 0 ? (
                <MessageStyled>
                  There are no products on the selected date
                </MessageStyled>
              ) : (
                <DairyProductList
                  poducts={products}
                  onDeleteProduct={handleDelete}
                  dayId={currentDayId}
                />
              ))}
          </Box>
        </Box>
      </Box>
      <RightSideBar summaryDayInfo={summaryDay} />
    </Stack>
  );
};

export default Dairy;
