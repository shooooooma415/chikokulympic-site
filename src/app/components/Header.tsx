"use client";
import { useState } from "react";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import LanguageIcon from "@mui/icons-material/Language";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useLanguage } from "../contexts/LanguageContext";
import { useTranslation } from "../hooks/useTranslation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();
  return (
    <>
      {/* 右上にMUIのIconButtonでハンバーガー */}
      <IconButton
        color="primary"
        aria-label="メニューを開く"
        onClick={() => setOpen(true)}
        sx={{
          position: "fixed",
          top: 24,
          right: 24,
          zIndex: 1400,
          bgcolor: "#fff",
          boxShadow: 3,
          borderRadius: "50%",
          width: 56,
          height: 56,
          "&:hover": { bgcolor: "#f3e8ff" },
          display: open ? "none" : "flex",
        }}
      >
        <MenuIcon fontSize="large" />
      </IconButton>
      {/* サイドパネル Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: 340,
            maxWidth: "100%",
            p: 3,
            pt: 5,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
          },
        }}
      >
        <IconButton
          aria-label="閉じる"
          onClick={() => setOpen(false)}
          sx={{ position: "absolute", top: 16, right: 16, color: "grey.500" }}
        >
          <CloseIcon fontSize="large" />
        </IconButton>
        {/* ロゴ */}
        <div className="flex items-center gap-2 mb-10 mt-8">
          <span className="text-2xl font-bold text-purple-700">🏃‍♂️</span>
          <span className="text-xl font-bold text-gray-800">
            遅刻リンピック
          </span>
        </div>
        <div className="flex-1 flex flex-col gap-8">
          <Link
            href="/"
            className="text-xl font-bold text-gray-800 hover:text-purple-600 transition-colors"
            onClick={() => setOpen(false)}
          >
            {t("home")}
          </Link>
          <Link
            href="/about"
            className="text-xl font-bold text-gray-800 hover:text-purple-600 transition-colors"
            onClick={() => setOpen(false)}
          >
            {t("about")}
          </Link>
          <Link
            href="/tech"
            className="text-xl font-bold text-gray-800 hover:text-purple-600 transition-colors"
            onClick={() => setOpen(false)}
          >
            {t("tech")}
          </Link>
          <Link
            href="/detail"
            className="text-xl font-bold text-gray-800 hover:text-purple-600 transition-colors"
            onClick={() => setOpen(false)}
          >
            {t("detail")}
          </Link>
          <hr className="my-2 border-gray-200" />
          <a
            href="#"
            className="font-bold text-gray-700 hover:text-purple-600 flex items-center gap-1"
          >
            {t("faq")} <span className="text-xs">↗</span>
          </a>
          <div className="mt-4 flex flex-col gap-4">
            <Button
              variant="outlined"
              fullWidth
              startIcon={<LanguageIcon />}
              sx={{ fontWeight: "bold", borderRadius: 999, py: 1.2 }}
              onClick={() => setLanguage(language === "ja" ? "en" : "ja")}
            >
              {language === "ja" ? t("english") : t("japanese")}
            </Button>
            <div className="flex flex-col gap-2">
              <span className="text-xs text-gray-500 font-semibold">
                {t("download")}
              </span>
              <div className="flex gap-2">
                <Button
                  variant="contained"
                  color="inherit"
                  sx={{
                    minWidth: 0,
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    bgcolor: "#fff",
                    color: "#000",
                    fontWeight: "bold",
                    fontSize: "0.875rem",
                  }}
                  href="#"
                >
                  App Store
                </Button>
                <Button
                  variant="contained"
                  color="inherit"
                  sx={{
                    minWidth: 0,
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    bgcolor: "#fff",
                    color: "#000",
                    fontWeight: "bold",
                    fontSize: "0.875rem",
                  }}
                  href="#"
                >
                  Google Play
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <span className="text-xs text-gray-500 font-semibold">
                {t("followUs")}
              </span>
              <div className="flex gap-2">
                <Button
                  variant="outlined"
                  color="inherit"
                  startIcon={<XIcon />}
                  sx={{ borderRadius: 999, fontWeight: "bold" }}
                  href="https://x.com/nknshoma0415"
                >
                  X
                </Button>
                <Button
                  variant="outlined"
                  color="inherit"
                  startIcon={<GitHubIcon />}
                  sx={{ borderRadius: 999, fontWeight: "bold" }}
                  href="https://github.com/shooooooma415"
                >
                  GitHub
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
}
