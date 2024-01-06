import React, { useMemo } from 'react';

import List from '@mui/material/List';
import { Box } from '@mui/material';

import { getUserFromToken } from '../../auth/authService';
import SideBarIcon from './SidebarIcon.tsx';
import SettingsIcon from '@mui/icons-material/Settings';
import PaymentsIcon from '@mui/icons-material/Payments';
import BusinessIcon from '@mui/icons-material/Business';
import GroupsIcon from '@mui/icons-material/Groups';
import DraftsIcon from '@mui/icons-material/Drafts';

const Sidebar = (): JSX.Element => {
  const user = useMemo(() => getUserFromToken(), []);

  return (
    <nav className="sidebar">
      <List style={{ position: 'sticky', top: '0' }}>
        {/*<ListItem sx={{ display: 'grid', placeContent: 'center' }}>*/}
        {/*  <NavLink to="/calendar" className={resolveLinkClass}></NavLink>*/}
        {/*</ListItem>*/}
        <Box sx={{ mt: 1 }}>
          <SideBarIcon to={'/publications'} typographyText={'Publications'}>
            <DraftsIcon fontSize="large" />
          </SideBarIcon>
          <SideBarIcon to={'/bills'} typographyText={'Bills'}>
            <PaymentsIcon fontSize="large" />
          </SideBarIcon>
          <SideBarIcon to={'/settings'} typographyText={'Settings'}>
            <SettingsIcon fontSize="large" />
          </SideBarIcon>
          {user?.role === 'ADMIN' && (
            <>
              <SideBarIcon to={'/buildings'} typographyText={'Buildings'}>
                <BusinessIcon fontSize="large" />
              </SideBarIcon>
              <SideBarIcon to={'/residents'} typographyText={'Residents'}>
                <GroupsIcon fontSize="large" />
              </SideBarIcon>
            </>
          )}
        </Box>
      </List>
    </nav>
  );
};

export default Sidebar;
