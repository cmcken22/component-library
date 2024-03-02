import { Box } from "@mui/material";
import { action } from "@storybook/addon-actions";
import { ComponentStory } from "@storybook/react";
import React from "react";
import Typography from "../Typography";

export default {
  title: "Colors",
};

function isDarkColor(hexCode) {
  // Remove '#' if present
  hexCode = hexCode.replace(/^#/, "");

  // Convert hex to RGB
  var r = parseInt(hexCode.substring(0, 2), 16) / 255;
  var g = parseInt(hexCode.substring(2, 4), 16) / 255;
  var b = parseInt(hexCode.substring(4, 6), 16) / 255;

  // Calculate relative luminance
  var luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

  // If luminance is less than 0.5, color is considered dark
  return luminance < 0.46;
}

import { Theme as MuiTheme, useTheme as useMuiTheme } from "@mui/material";

interface Theme extends Omit<MuiTheme, "palette"> {
  palette: Omit<MuiTheme["palette"], "grey">;
}

const useTheme = () => {
  const theme = useMuiTheme();
  return theme as Theme;
};

// export default useTheme;

const Template: ComponentStory<any> = (args) => {
  // for (let k in Colors) {
  //   console.log(k, Colors[k]);
  // }
  const theme = useTheme();
  console.log("theme:", theme);

  return (
    <>
      {Object.keys(theme.palette)?.map((key, index) => {
        // const color = Colors[key];
        const color = theme.palette[key];
        if (typeof color !== "object" || key === "action") return null;
        // console.log("key:", key);
        // console.log("color:", color);

        // return null;
        return (
          <Box>
            <Typography variant="h4">{key}</Typography>
            <Box
              sx={{
                maxWidth: "800px",
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                py: 3,
              }}
            >
              {Object.keys(color)?.map((colorKey, index) => {
                const colorValue = color[colorKey];
                if (colorValue === "#00FFFFFF") return null;
                const isDark = isDarkColor(colorValue);
                return (
                  <Box
                    sx={{
                      flexShrink: 0,
                      mb: 1,
                      overflow: "hidden",
                    }}
                    onClick={() =>
                      action("colorKey")(
                        `${key}.${colorKey}`,
                        colorValue,
                        isDark
                      )
                    }
                  >
                    <Box
                      sx={{
                        p: 1,
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor: colorValue,
                        borderRadius: "4px",
                        width: "80px",
                        height: "80px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mb: 0.5,
                        backgroundColor: colorValue,
                      }}
                    >
                      <Typography
                        variant="errorMessage"
                        sx={{
                          textAlign: "center",
                          width: "100%",
                          display: "block",
                          textOverflow: "ellipsis",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                        }}
                        color={isDark ? "white" : "black"}
                      >
                        {colorValue}
                      </Typography>
                    </Box>
                    <Typography
                      variant="errorMessage"
                      sx={{
                        textAlign: "center",
                        width: "100%",
                        display: "block",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {colorKey}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>
        );
      })}
    </>
  );
};

export const AllColors = Template.bind({});
AllColors.args = {};
AllColors.argTypes = {};
