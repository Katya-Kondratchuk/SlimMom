import { Typography } from '@mui/material';
import ContainerLayout from 'components/Container/Container';
import { LinkBack, NotFoundBg, NotFoundWrapper } from './NotFoundPage.styled';

const NotFoundPage = () => {
  return (
    <ContainerLayout>
      <NotFoundWrapper>
        <Typography
          variant="h2"
          sx={{
            textTransform: 'uppercase',
            mb: '20px',
          }}
        >
          Not Found Page
        </Typography>
        <LinkBack to="/">Go home</LinkBack>
      </NotFoundWrapper>
      <NotFoundBg />
    </ContainerLayout>
  );
};

export default NotFoundPage;
