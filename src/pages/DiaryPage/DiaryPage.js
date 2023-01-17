import ContainerLayout from 'components/Container/Container';
import DairyAddProductForm from 'components/DairyAddProductForm/DairyAddProductForm';
import DairyProductList from 'components/DairyProductList/DairyProductList';

import RightSideBar from 'components/RightSideBar/RightSideBar';
import React from 'react';

const DiaryPage = () => {
  return (
    <ContainerLayout>
      {/* <DiaryDateСalendar /> */}
      <DairyAddProductForm />
      <DairyProductList />
      <RightSideBar />
    </ContainerLayout>
  );
};

export default DiaryPage;
