import DairyAddProductForm from 'components/DairyAddProductForm/DairyAddProductForm';
import DairyProductList from 'components/DairyProductList/DairyProductList';

import RightSideBar from 'components/RightSideBar/RightSideBar';
import React from 'react';

const DiaryPage = () => {
  return (
    <div>
      <div>
        {/* <DiaryDateСalendar /> */}
        <DairyAddProductForm />
        <DairyProductList />
        <RightSideBar />
      </div>
    </div>
  );
};

export default DiaryPage;
