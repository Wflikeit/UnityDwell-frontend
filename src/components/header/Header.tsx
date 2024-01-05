import React, { useMemo } from 'react';

import { getUserFromToken } from "../../auth/authService.ts";
import ProfilePhotoWrapper from "../layout/ProfilePhotoWrapper.tsx";


const Header = () => {
  const user = useMemo(() => getUserFromToken(), []);
  return (
    <header className="layout__header">
      <ProfilePhotoWrapper user={user} />
    </header>
  );
};

export default Header;
