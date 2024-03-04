// Generated with util/create-component.js
import { Box, Container, useMediaQuery } from "@mui/material";
import MuiGrid from "@mui/material/Unstable_Grid2";
import React from "react";
import { useEllisDonTheme } from "..";

interface GridProps {
  gutter: string | number;
}

const Item = ({ children }: any) => {
  return (
    <Box
      sx={{
        height: "50px",
        width: "100%",
        backgroundColor: "red",
      }}
    >
      {children}
    </Box>
  );
};

export const useBreakPoint = () => {
  const theme = useEllisDonTheme();
  const xs = useMediaQuery(theme.breakpoints.down(theme.breakpoints.values.sm));
  const sm = useMediaQuery(
    theme.breakpoints.between(
      theme.breakpoints.values.sm,
      theme.breakpoints.values.md
    )
  );
  const md = useMediaQuery(
    theme.breakpoints.between(
      theme.breakpoints.values.md,
      theme.breakpoints.values.lg
    )
  );
  const lg = useMediaQuery(
    theme.breakpoints.between(
      theme.breakpoints.values.lg,
      theme.breakpoints.values.xl
    )
  );
  const xl = useMediaQuery(theme.breakpoints.up(theme.breakpoints.values.xl));

  const mq_xs = useMediaQuery(theme.breakpoints.only("xs"));
  const mq_sm = useMediaQuery(theme.breakpoints.only("sm"));
  const mq_md = useMediaQuery(theme.breakpoints.only("md"));
  const mq_lg = useMediaQuery(theme.breakpoints.only("lg"));
  const mq_xl = useMediaQuery(theme.breakpoints.only("xl"));

  // console.log("xs:", xs);
  // console.log("sm:", sm);
  // console.log("md:", md);
  // console.log("lg:", lg);
  // console.log("xl:", xl);

  console.log("mq_xs:", mq_xs);
  console.log("mq_sm:", mq_sm);
  console.log("mq_md:", mq_md);
  console.log("mq_lg:", mq_lg);
  console.log("mq_xl:", mq_xl);

  if (mq_xs) return "xs";
  if (mq_sm) return "sm";
  if (mq_md) return "md";
  if (mq_lg) return "lg";
  if (mq_xl) return "xl";

  // if (xs) return "xs";
  // if (sm) return "sm";
  // if (md) return "md";
  // if (lg) return "lg";
  // if (xl) return "xl";
  return "";
};

const Grid = ({ gutter }: GridProps) => {
  const theme = useEllisDonTheme();
  console.log("theme:", theme);
  const breakpoint = useBreakPoint();
  console.log("breakpoint:", breakpoint);

  const test = true;
  if (test) {
    return (
      <Box>
        <pre>{JSON.stringify(theme.breakpoints.values, null, 2)}</pre>
        <p>Current Breakpoint: {breakpoint}</p>
        <MuiGrid container spacing={2} px={gutter}>
          <MuiGrid xs={6} md={8}>
            <Item>xs=6 md=8</Item>
          </MuiGrid>
          <MuiGrid xs={6} md={4}>
            <Item>xs=6 md=4</Item>
          </MuiGrid>
          <MuiGrid xs={6} md={4}>
            <Item>xs=6 md=4</Item>
          </MuiGrid>
          <MuiGrid xs={6} md={8}>
            <Item>xs=6 md=8</Item>
          </MuiGrid>
        </MuiGrid>
      </Box>
    );
  }

  return (
    <Container
      disableGutters
      sx={{
        background: "green",
      }}
    >
      <MuiGrid container spacing={2}>
        <MuiGrid xs={6} md={8}>
          <Item>xs=6 md=8</Item>
        </MuiGrid>
        <MuiGrid xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </MuiGrid>
        <MuiGrid xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </MuiGrid>
        <MuiGrid xs={6} md={8}>
          <Item>xs=6 md=8</Item>
        </MuiGrid>
      </MuiGrid>
    </Container>
  );
};

Grid.defaultProps = {
  gutter: 2,
};

export default Grid;
