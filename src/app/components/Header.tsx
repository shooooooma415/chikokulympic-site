"use client";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import LanguageIcon from "@mui/icons-material/Language";
import XIcon from "@mui/icons-material/X";

export default function Header() {
  const [open, setOpen] = useState(false);
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
          <a
            href="/"
            className="text-xl font-bold text-gray-800 hover:text-purple-600 transition-colors"
          >
            ホーム
          </a>
          <a
            href="/about"
            className="text-xl font-bold text-gray-800 hover:text-purple-600 transition-colors"
          >
            概要
          </a>
          <a
            href="/tech"
            className="text-xl font-bold text-gray-800 hover:text-purple-600 transition-colors"
          >
            技術スタック
          </a>
          <a
            href="/detail"
            className="text-xl font-bold text-gray-800 hover:text-purple-600 transition-colors"
          >
            内容詳細
          </a>
          <hr className="my-2 border-gray-200" />
          <a
            href="#"
            className="font-bold text-gray-700 hover:text-purple-600 flex items-center gap-1"
          >
            よくあるご質問 <span className="text-xs">↗</span>
          </a>
          <div className="mt-4 flex flex-col gap-4">
            <Button
              variant="outlined"
              fullWidth
              startIcon={<LanguageIcon />}
              sx={{ fontWeight: "bold", borderRadius: 999, py: 1.2 }}
            >
              日本語
            </Button>
            <div className="flex flex-col gap-2">
              <span className="text-xs text-gray-500 font-semibold">
                DOWNLOAD
              </span>
              <div className="flex gap-2">
                <Button
                  variant="contained"
                  color="inherit"
                  sx={{ minWidth: 0, p: 0, borderRadius: 2, bgcolor: "#fff" }}
                  href="#"
                  startIcon={
                    <img
                      src="/appstore.svg"
                      alt="App Store"
                      style={{ height: 24 }}
                    />
                  }
                >
                  App Store
                </Button>
                <Button
                  variant="contained"
                  color="inherit"
                  sx={{ minWidth: 0, p: 0, borderRadius: 2, bgcolor: "#fff" }}
                  href="#"
                  startIcon={
                    <img
                      src="/googleplay.svg"
                      alt="Google Play"
                      style={{ height: 24 }}
                    />
                  }
                >
                  Google Play
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <span className="text-xs text-gray-500 font-semibold">
                FOLLOW US
              </span>
              <Button
                variant="outlined"
                color="inherit"
                startIcon={<XIcon />}
                sx={{ borderRadius: 999, fontWeight: "bold" }}
                href="#"
              >
                X
              </Button>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
}
