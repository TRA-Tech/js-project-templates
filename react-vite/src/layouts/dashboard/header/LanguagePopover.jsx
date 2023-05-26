import React, { useState } from "react";
import { alpha } from "@mui/material/styles";
import { Box, MenuItem, Stack, IconButton, Popover } from "@mui/material";
import i18n from "../../../i18n";
import { useTranslation } from "react-i18next";

const LANGS = [
  {
    value: "en",
    label: "English",
    icon: "/assets/icons/ic_flag_en.svg",
  },
  {
    value: "tr",
    label: "Türkçe",
    icon: "/assets/icons/ic_flag_tr.svg",
  },
  {
    value: "de",
    label: "German",
    icon: "/assets/icons/ic_flag_de.svg",
  },
  {
    value: "fr",
    label: "French",
    icon: "/assets/icons/ic_flag_fr.svg",
  },

];

const LanguagePopover = () => {
  const [open, setOpen] = useState(null);
  const [iconSelected, setIconSelected] = useState(LANGS[0].value);

  const { t, i } = useTranslation();

  const selectedFlagIcon = LANGS.find((x) => x.value === iconSelected).icon;

  const changeHandler = async (lang) => {
    console.log();
    setIconSelected(lang);
    await i18n.changeLanguage(lang);
    handleClose();
    LanguageSelected();
  };

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            bgcolor: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.focusOpacity
              ),
          }),
        }}
      >
        
        <img src={selectedFlagIcon} alt={LANGS[0].label} />
      </IconButton>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            p: 1,
            mt: 1.5,
            ml: 0.75,
            width: 180,
            "& .MuiMenuItem-root": {
              px: 1,
              typography: "body2",
              borderRadius: 0.75,
            },
          },
        }}
      >
        <Stack spacing={0.75}>
          {LANGS.map((option) => (
            <MenuItem
              key={option.value}
              selected={option.value === LANGS[0].value}
              onClick={() => changeHandler(option.value)}
            >
              <Box
                component="img"
                alt={option.label}
                src={option.icon}
                sx={{ width: 28, mr: 2 }}
              />

              {option.label}
            </MenuItem>
          ))}
        </Stack>
      </Popover>
    </>
  );
};

export default LanguagePopover;
