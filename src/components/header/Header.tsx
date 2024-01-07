import React, { useMemo } from 'react';

import { getUserFromToken } from '../../auth/authService.ts';
import ProfilePhotoWrapper from '../layout/ProfilePhotoWrapper.tsx';

const Header = (): React.JSX.Element => {
  const user = useMemo(() => getUserFromToken(), []);
  return (
    <header className="layout__header" style={{ backgroundColor: 'rgba(236, 235, 255, 1)' }}>
      <ProfilePhotoWrapper user={user} />
    </header>
  );
};

export default Header;
