import DairyAddProductForm from 'components/DairyAddProductForm/DairyAddProductForm';
import DairyProductList from 'components/DairyProductList/DairyProductList';
import DiaryDateСalendar from 'DiaryDateСalendar/DiaryDateСalendar';
import RightSideBar from './RightSideBar';

export default function DiaryPage() {
  return (
    <div>
      <DiaryDateСalendar />
      <DairyAddProductForm />
      <DairyProductList />
      <RightSideBar />
    </div>
  );
}
