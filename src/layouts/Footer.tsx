import { Box, Container, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Link from "next/link";
import { FC } from "react";

interface FooterLinkProps {
  text: string;
  href: string;
}

const FooterLink: FC<FooterLinkProps> = ({ text, href }) => {
  return (
    <Link href={href}>
      <a>
        <Typography variant="body2" fontSize={12} sx={{
          "&:hover": {
            textDecoration: "underline",
          }
        }}>
          {text}
        </Typography>
      </a>
    </Link>
  );
};

export const Footer = () => {
  return (
    <Box
      sx={{
        py: "60px",
        backgroundColor: "#f5f5f7",
      }}
    >
      <Container>
        <Typography variant="h6" fontSize={16}>
          Kraikub
        </Typography>
        <Typography variant="body2" fontSize={14} fontWeight={300}>
          Copyright © 2022 Nutchanon Chantrasup. All rights reserved.
        </Typography>
        <Grid my="30px" container rowGap={8}>
          <Grid item xs={12} sm={3}>
            <Stack spacing={1}>
              <Typography variant="body1" fontSize={12} color="#000">
                Websites
              </Typography>
              <FooterLink text="Home" href="/"/>
              <FooterLink text="Products" href="/products"/>

            </Stack>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Stack spacing={1}>
              <Typography variant="body1" fontSize={12} color="#000">
                Articles
              </Typography>
              <FooterLink text="Why Kraikub?" href="/"/>
              <FooterLink text="About us" href="/products"/>
              <FooterLink text="Privacy Policy" href="/products"/>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Stack spacing={1}>
              <Typography variant="body1" fontSize={12} color="#000">
                Services
              </Typography>
              <FooterLink text="Kraikub ID" href="https://id.kraikub.com"/>
              <FooterLink text="OAuth 2.0" href="https://app.kraikub.com"/>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Stack spacing={1}>
              <Typography variant="body1" fontSize={12} color="#000">
                Developers
              </Typography>
              <FooterLink text="OAuth2 Documentation" href="/products"/>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
