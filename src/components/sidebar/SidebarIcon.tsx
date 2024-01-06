import React, { ReactElement } from "react";

import { NavLink } from 'react-router-dom';
import { ListItem, Avatar, Typography } from '@mui/material';

type SideBarIconProps = {
  to: string;
  typographyText: string;
  fontSize?: string;
  children?: ReactElement; // Allow children of any type
};

const SideBarIcon: React.FC<SideBarIconProps> = ({ to, typographyText, fontSize = '10px', children }) => {
  const resolveLinkClass = ({ isActive }: { isActive: boolean }): string => {
    return isActive ? 'link link__active' : 'link';
  };

  return (
    <ListItem sx={{ display: 'grid', placeContent: 'center' }}>
      <NavLink to={to} className={resolveLinkClass}>
        <Avatar variant="square" className="avatar">
          {children}
        </Avatar>
        <Typography fontSize={fontSize} className="typography">
          {typographyText}
        </Typography>
      </NavLink>
    </ListItem>
  );
};

export default SideBarIcon;
