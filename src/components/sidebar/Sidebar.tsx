import React, { useMemo } from 'react';
import List from '@mui/material/List';

import { Box } from '@mui/material';

import { getUserFromToken } from '../../auth/authService';
import SideBarIcon from './SidebarIcon.tsx';

const Sidebar = () => {
  const user = useMemo(() => getUserFromToken(), []);

  return (
    <nav className="sidebar">
      <List style={{ position: 'sticky', top: '0' }}>
        {/*<ListItem sx={{ display: 'grid', placeContent: 'center' }}>*/}
        {/*  <NavLink to="/calendar" className={resolveLinkClass}></NavLink>*/}
        {/*</ListItem>*/}
        <Box sx={{ mt: 1 }}>
          <SideBarIcon to={'/publications'} typographyText={'Publications'} />
          <SideBarIcon to={'/bills'} typographyText={'Bills'} />
          <SideBarIcon to={'/settings'} typographyText={'Settings'} />
          {user?.role === 'ADMIN' && (
            <>
              <SideBarIcon to={'/buildings'} typographyText={'Buildings'} />
              <SideBarIcon to={'/residents'} typographyText={'Residents'} />
            </>
          )}
        </Box>
      </List>
    </nav>
  );
};

export default Sidebar;
