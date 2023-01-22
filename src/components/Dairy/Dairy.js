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
import { CustomLoaderStyled } from './DairyLoader/DairyLoader.styled';
import { toast } from 'react-toastify';

const Dairy = () => {
  const [products, setProducts] = useState([]);
  const [date, setDate] = useState('');
  const [currentDayId, setCurrentDayId] = useState('');
  const [summaryDay, setSummaryDay] = useState({});
  const [isHidden, setIsHidden] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (date === '') {
      return;
    }
    setIsLoading(true);
    getDayProducts({ date: date }).then(res => {
      setTimeout(() => {
        const newDayId = res.id;
        const newEatenProducts = res.eatenProducts;

        setSummaryDay(res.daySummary ?? { ...res, date: date });

        setCurrentDayId(newDayId ?? '');
        setProducts(newEatenProducts ?? []);
        setIsLoading(false);
      }, 1000);
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
      if (res.newDay) {
        setCurrentDayId(res.newDay.id);
        setProducts(prev => [...prev, ...[res.eatenProduct]]);
        setSummaryDay(res.newSummary);
      } else {
        setProducts(res.day.eatenProducts);
        setSummaryDay(res.daySummary);
      }
    });
  };

  const handleDelete = object => {
    deleteProduct(object).then(res => {});
    getDayProducts({ date: date }).then(res => {
      const newEatenProducts = res.eatenProducts;
      setProducts(newEatenProducts ?? []);

      setSummaryDay(res.daySummary);
    });
    toast('Product removed successfully', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 500,
      theme: 'light',
      icon: '🚽',
      toastId: 'yes',
      pauseOnHover: false,
    });
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: { xs: '0px', lg: '253px' },
        }}
      >
        <Stack direction={{ xs: 'column', md: 'column', lg: 'row' }}>
          <Box
            sx={{
              margin: { xs: '0 auto', md: '0' },
              marginRight: { xs: '0px', lg: '93px' },
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
              {/* <CustomLoaderStyled /> */}
              {isLoading && products.length === 0 ? (
                <CustomLoaderStyled />
              ) : (
                !isHidden &&
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
                ))
              )}
            </Box>
          </Box>
          <div>
            <RightSideBar summaryDayInfo={summaryDay} />
          </div>
        </Stack>
      </Box>
    </>
  );
};

export default Dairy;
