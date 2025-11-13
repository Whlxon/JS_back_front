import { useState } from "react";
import { Box, Container, Typography, useTheme } from "@mui/material";
import "./Header.css";

interface HeaderProps {
  title: string;
  version: number;
  handleHeaderClick: () => void;
}

const Header = ({ title, version, handleHeaderClick }: HeaderProps) => {
  const [menuPrinted, setMenuPrinted] = useState(false);
  const theme = useTheme();

  const handleClick = () => {
    console.log(`value of menuPrinted before click: ${menuPrinted}`);
    setMenuPrinted(!menuPrinted);
    handleHeaderClick();
  };

  return (
    <Box 
    component="header"
    sx={{
      px: 2,
      backgroundColor:
        theme.palette.mode === "light"
          ? theme.palette.primary.light
          : theme.palette.primary.dark,
      color: (theme) => theme.palette.primary.contrastText,
    }}
    onClick={handleClick}>
      <Container maxWidth="sm">
        <Typography variant="h1">
          {menuPrinted ? `${title}... and rarely do we hate it!` : title}
        </Typography>
        <Typography variant="h2">version: {version}</Typography>
      </Container>
    </Box>
  );
};

export default Header;
