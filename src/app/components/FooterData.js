import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";

export const data = [
  {
    socialName: "Facebook",
    socialLink: "https://slemankab.bps.go.id/",
    socialIcon: (
      <FacebookIcon
        sx={{
          color: "#e5e5e5",
          "&:hover": {
            color: "#4267B2",
          },
        }}
      />
    ),
  },
  {
    socialName: "Instagram",
    socialLink: "https://www.instagram.com/bpskabsleman/",
    socialIcon: (
      <InstagramIcon
        sx={{
          color: "#e5e5e5",
          "&:hover": {
            color: "#C13584",
          },
        }}
      />
    ),
  },
  {
    socialName: "Twitter",
    socialLink: "https://slemankab.bps.go.id/",
    socialIcon: (
      <TwitterIcon
        sx={{
          color: "#e5e5e5",
          "&:hover": {
            color: "#1DA1F2",
          },
        }}
      />
    ),
  },
  {
    socialName: "Website",
    socialLink: "https://slemankab.bps.go.id/",
    socialIcon: (
      <LanguageIcon
        sx={{
          color: "#e5e5e5",
          "&:hover": {
            color: "#9485ff",
          },
        }}
      />
    ),
  },
];
