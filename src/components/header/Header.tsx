import { useMemo } from 'react';

// import ProfilePhotoWrapper from '../layout/ProfilePhotoWrapper';
import { getUserFromToken } from "../../auth/authService.ts";


const Header = () => {
  const user = useMemo(() => getUserFromToken(), []);
  return (
    <header className="layout__header">
      {/*<ProfilePhotoWrapper user={user} />*/}
    </header>
  );
};

export default Header;
