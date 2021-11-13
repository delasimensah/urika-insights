//mui
import { ListItemButton, ListItemText } from "@mui/material";

const MenuItem = ({ children, onClick, title }) => {
  return (
    <ListItemButton
      onClick={onClick}
      disableRipple
      classes={{
        root: "hover:bg-gray-50/20 py-5 pl-5",
      }}
    >
      <ListItemText primary={title} classes={{ root: "uppercase text-lg" }} />
      {children}
    </ListItemButton>
  );
};

export default MenuItem;
