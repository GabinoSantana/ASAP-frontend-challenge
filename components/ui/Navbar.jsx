import NextLink from "next/link";
import {
  AppBar,
  Badge,
  Button,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";

export const Navbar = () => {
  return (
    <AppBar>
      <Toolbar sx={{ backgroundColor: "#f15957" }}>
        <NextLink href="/" passHref style={{ textDecoration: "none" }}>
          <Link component={"span"} display="flex" alignItems="center">
            <Typography variant="h6">React |</Typography>
            <Typography sx={{ ml: 0.5 }}>Test App</Typography>
          </Link>
        </NextLink>
      </Toolbar>
    </AppBar>
  );
};
