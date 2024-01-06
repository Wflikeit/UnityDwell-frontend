import { useState } from 'react';
import Popover from '@mui/material/Popover';
import { LoggedInUser, TOKEN_KEY } from "../../auth/authService.ts";
import { useAuth0 } from "@auth0/auth0-react";
import { randomColorFor } from "../../values/colors.ts";
import { AppRoutes } from "../../types/routes.ts";




export default function ProfilePhotoWrapper({ user }: { user: LoggedInUser }) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const {logout} = useAuth0()
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogoutClick = () => {
    sessionStorage.removeItem(TOKEN_KEY)
    logout({ logoutParams: { returnTo: window.location.origin + AppRoutes.LOGIN_PAGE } });
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const avatarColor = randomColorFor(user?.email as string);

  const [name, surname] = user.email.toUpperCase().split('@')[0].split('.');

  return (
    <div className="icon__wrapper">
      <button className="photo__wrapper" style={{ backgroundColor: `${avatarColor}` }} onClick={handleClick}>
        {name.charAt(0) + surname.charAt(0)}
      </button>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{
          marginTop: '1.3rem',
          borderRadius: '1rem !important',
        }}
      >
        <button className="sign__out__button" onClick={handleLogoutClick}>
          Sign out
        </button>
      </Popover>
    </div>
  );
}
