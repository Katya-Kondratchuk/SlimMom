import DairyAddProductForm from 'components/DairyAddProductForm/DairyAddProductForm';
import DairyProductList from 'components/DairyProductList/DairyProductList';
import RightSideBar from 'components/RightSideBar/RightSideBar';
import DiaryDateСalendar from 'components/DiaryDateСalendar/DiaryDateСalendar';
import { useState } from 'react';

const DiaryPage = () => {
  const [products, setProducts] = useState(initial);

  const handleDateChange = date => {
    // console.log(date);
    const backendDate = new Date(date).toISOString().split('T')[0];
    console.log(backendDate);
  };

  const handelSubmit = e => {
    e.preventDefault();
    const productName = e.target.elements.product.value.trim();
    const productGrams = e.target.elements.grams.value.trim();

    const newProduct = [
      {
        id: new Date(),
        title: { ru: productName },
        weight: productGrams,
        calories: 999,
      },
    ];
    console.log(newProduct);
    setProducts(prevProducts => [...prevProducts, ...newProduct]);
    e.target.reset();
  };
  return (
    <div>
      <div>
        <DiaryDateСalendar onDateChange={handleDateChange} />
        <DairyAddProductForm onSubmitting={handelSubmit} />
        <DairyProductList poducts={products} />
        <RightSideBar />
      </div>
    </div>
  );
};

export default DiaryPage;

const initial = [
  {
    id: 1,
    weight: 100,
    title: {
      ru: 'Меланж яичный',
      ua: 'Меланж яєчний',
    },
    calories: 157,
  },
  {
    id: 12,
    weight: 100,
    title: {
      ru: 'Мясо',
      ua: 'Мясо',
    },
    calories: 157,
  },
  {
    id: 11,
    weight: 100,
    title: {
      ru: 'Курица',
      ua: 'Курица',
    },
    calories: 157,
  },
  {
    id: 31,
    weight: 100,
    title: {
      ru: 'Мармелад',
      ua: 'Мармелад',
    },
    calories: 157,
  },
  {
    id: 71,
    weight: 100,
    title: {
      ru: 'Шоколад',
      ua: 'Шоколад',
    },
    calories: 17,
  },
  {
    id: 3231,
    weight: 100,
    title: {
      ru: 'Гречка',
      ua: 'Гречка',
    },
    calories: 197,
  },
  {
    id: 19,
    weight: 100,
    title: {
      ru: 'Картошка фри',
      ua: 'Картошка фри',
    },
    calories: 135,
  },
  {
    id: 331,
    weight: 100,
    title: {
      ru: 'Шашлик',
      ua: 'Шашлик',
    },
    calories: 157,
  },
  {
    id: 17,
    weight: 100,
    title: {
      ru: 'Хватит жрать',
      ua: 'Хватит жрать',
    },
    calories: 997,
  },
  {
    id: 3321,
    weight: 100,
    title: {
      ru: 'Устал',
      ua: 'Устал',
    },
    calories: 888,
  },
];
