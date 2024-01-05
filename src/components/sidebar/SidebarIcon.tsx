import React from 'react';
import { NavLink } from 'react-router-dom';
import { ListItem, Avatar, Typography } from '@mui/material';

type SideBarIconProps = {
  to: string;
  typographyText: string;
  fontSize?: string;
};
const SideBarIcon: React.FC<SideBarIconProps> = ({ to, typographyText, fontSize = '10px' }) => {
  const resolveLinkClass = ({ isActive }: { isActive: boolean }): string => {
    return isActive ? 'link link__active' : 'link';
  };
  return (
    <ListItem sx={{ display: 'grid', placeContent: 'center' }}>
      <NavLink to={to} className={resolveLinkClass}>
        <Avatar variant="square" className="avatar"></Avatar>
        <Typography fontSize={fontSize} className="typography">
          {typographyText}
        </Typography>
      </NavLink>
    </ListItem>
  );
};

export default SideBarIcon;
