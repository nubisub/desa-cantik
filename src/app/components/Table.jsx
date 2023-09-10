import * as React from "react";
import { useEffect, useState } from "react";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";

const data = [
  {
    NIK: "246.10.249.100/12",
    Kepala: "Nyssa Hillitt",
    Alamat: "61 Vidon Street",
  },
  {
    NIK: "10.55.85.253/5",
    Kepala: "Abram Friedlos",
    Alamat: "05054 Crest Line Terrace",
  },
  {
    NIK: "30.104.33.156/30",
    Kepala: "Anjela Castard",
    Alamat: "34473 Jana Plaza",
  },
  {
    NIK: "29.162.133.78/23",
    Kepala: "Berta Lalley",
    Alamat: "58 Sherman Street",
  },
  {
    NIK: "254.90.235.192/23",
    Kepala: "Sukey Dome",
    Alamat: "018 Hoffman Hill",
  },
  {
    NIK: "194.17.77.231/8",
    Kepala: "Guilbert Straine",
    Alamat: "7995 Coleman Pass",
  },
  {
    NIK: "211.235.154.175/18",
    Kepala: "Esdras Reeks",
    Alamat: "1 Lighthouse Bay Circle",
  },
  {
    NIK: "90.57.98.128/7",
    Kepala: "Adriana Roake",
    Alamat: "0 Eastwood Trail",
  },
  {
    NIK: "74.228.214.12/20",
    Kepala: "Ingeborg Elleyne",
    Alamat: "19 Sutherland Street",
  },
  {
    NIK: "133.91.162.246/31",
    Kepala: "Alexine Fearnehough",
    Alamat: "14 Monument Terrace",
  },
  {
    NIK: "211.246.189.29/11",
    Kepala: "Nessie Fabbro",
    Alamat: "2294 Magdeline Hill",
  },
  {
    NIK: "208.111.191.136/5",
    Kepala: "Gianni Duval",
    Alamat: "0946 Butterfield Alley",
  },
  {
    NIK: "60.163.86.215/22",
    Kepala: "Otis Regnard",
    Alamat: "1761 Westridge Pass",
  },
  {
    NIK: "232.25.152.85/19",
    Kepala: "Enrika Roycroft",
    Alamat: "5270 Onsgard Parkway",
  },
  {
    NIK: "29.129.246.97/10",
    Kepala: "Pru Coolahan",
    Alamat: "6203 Little Fleur Center",
  },
  {
    NIK: "83.104.90.29/9",
    Kepala: "Hugo Dawkes",
    Alamat: "420 Hooker Pass",
  },
  {
    NIK: "205.250.228.117/2",
    Kepala: "Colette Blogg",
    Alamat: "8 Jenna Hill",
  },
  {
    NIK: "173.122.206.54/22",
    Kepala: "Gwenny Libbis",
    Alamat: "18927 Fuller Hill",
  },
  {
    NIK: "171.153.223.196/9",
    Kepala: "Irvine Valencia",
    Alamat: "9810 Fair Oaks Road",
  },
  {
    NIK: "44.252.41.245/21",
    Kepala: "Kristan Reach",
    Alamat: "18 Mendota Lane",
  },
  {
    NIK: "96.203.74.12/2",
    Kepala: "Jemima Duddell",
    Alamat: "1 Lake View Center",
  },
  {
    NIK: "65.148.13.4/11",
    Kepala: "Raychel Chavey",
    Alamat: "376 Bunting Place",
  },
  {
    NIK: "13.127.14.134/8",
    Kepala: "Reina Danihel",
    Alamat: "9391 Clove Pass",
  },
  {
    NIK: "154.37.102.167/27",
    Kepala: "Larine Yearnes",
    Alamat: "1 Oak Lane",
  },
  {
    NIK: "79.49.195.211/20",
    Kepala: "Kayle Pulhoster",
    Alamat: "22940 Sachs Street",
  },
  {
    NIK: "62.143.45.227/15",
    Kepala: "Cheslie Banat",
    Alamat: "3 Fieldstone Avenue",
  },
  {
    NIK: "54.112.235.219/10",
    Kepala: "Cathrine Fallawe",
    Alamat: "2 Arapahoe Point",
  },
  {
    NIK: "188.253.66.164/7",
    Kepala: "Rosanne Krebs",
    Alamat: "230 Marcy Avenue",
  },
  {
    NIK: "29.144.35.243/4",
    Kepala: "Tim Maltster",
    Alamat: "77 Hallows Junction",
  },
  {
    NIK: "106.96.73.164/28",
    Kepala: "Welch Stenning",
    Alamat: "465 Acker Parkway",
  },
  {
    NIK: "156.139.45.190/19",
    Kepala: "Doloritas Staley",
    Alamat: "01713 Westridge Point",
  },
  {
    NIK: "206.115.71.136/18",
    Kepala: "Wynn Harce",
    Alamat: "469 Warbler Drive",
  },
  {
    NIK: "141.242.206.224/31",
    Kepala: "Lissie Booley",
    Alamat: "1 Elmside Pass",
  },
  {
    NIK: "87.20.245.213/22",
    Kepala: "Melodee Merlin",
    Alamat: "89739 Hayes Circle",
  },
  {
    NIK: "136.143.114.52/7",
    Kepala: "Burnaby Warbys",
    Alamat: "5 Duke Avenue",
  },
  {
    NIK: "119.91.163.179/6",
    Kepala: "Reade Cromer",
    Alamat: "43 Eastwood Street",
  },
  {
    NIK: "123.5.139.103/4",
    Kepala: "Cammy Coils",
    Alamat: "9128 Nova Point",
  },
  {
    NIK: "139.228.58.144/20",
    Kepala: "Pris Abreheart",
    Alamat: "9860 Elgar Circle",
  },
  {
    NIK: "165.120.144.240/8",
    Kepala: "Sabrina Gaish",
    Alamat: "9 Northport Plaza",
  },
  {
    NIK: "32.150.8.209/16",
    Kepala: "Oates Sharram",
    Alamat: "0 Oxford Hill",
  },
  {
    NIK: "14.244.238.104/26",
    Kepala: "Alvinia Wanley",
    Alamat: "52 1st Junction",
  },
  {
    NIK: "126.110.176.154/14",
    Kepala: "Beryl Kennion",
    Alamat: "772 Becker Terrace",
  },
  {
    NIK: "221.254.159.90/2",
    Kepala: "Floris Pettingall",
    Alamat: "5633 Anzinger Trail",
  },
  {
    NIK: "203.14.235.142/15",
    Kepala: "Marylee Deetch",
    Alamat: "3046 Anniversary Place",
  },
  {
    NIK: "117.208.192.28/5",
    Kepala: "Alisander Pauler",
    Alamat: "3881 Mcbride Point",
  },
  {
    NIK: "202.145.58.207/8",
    Kepala: "Eustace Giacomini",
    Alamat: "280 Parkside Parkway",
  },
  {
    NIK: "0.216.116.120/3",
    Kepala: "Korney Matten",
    Alamat: "7513 Chinook Way",
  },
  {
    NIK: "131.157.111.128/17",
    Kepala: "Dorris Heard",
    Alamat: "133 Nevada Point",
  },
  {
    NIK: "34.87.240.233/25",
    Kepala: "Simonette Burghall",
    Alamat: "91692 Dryden Drive",
  },
  {
    NIK: "84.233.0.156/12",
    Kepala: "Norby Rosbottom",
    Alamat: "93 Mcbride Parkway",
  },
  {
    NIK: "109.234.154.9/4",
    Kepala: "Farica Goodbarne",
    Alamat: "95903 Independence Terrace",
  },
  {
    NIK: "105.137.95.108/31",
    Kepala: "Jacinta Artingstall",
    Alamat: "5 Loomis Terrace",
  },
  {
    NIK: "10.172.141.141/25",
    Kepala: "Reeva Girardey",
    Alamat: "8162 Mendota Avenue",
  },
  {
    NIK: "101.3.125.227/28",
    Kepala: "Glory Baldocci",
    Alamat: "5 Crest Line Center",
  },
  {
    NIK: "170.233.65.122/11",
    Kepala: "Allyn Hamill",
    Alamat: "2847 Lukken Point",
  },
  {
    NIK: "121.149.176.49/3",
    Kepala: "Jacquenetta Trittam",
    Alamat: "265 Dryden Hill",
  },
  {
    NIK: "113.201.204.75/6",
    Kepala: "Anatole Sonier",
    Alamat: "280 Reindahl Terrace",
  },
  {
    NIK: "11.25.216.171/12",
    Kepala: "Ula Kiossel",
    Alamat: "2 Morrow Center",
  },
  {
    NIK: "113.59.7.123/23",
    Kepala: "Alayne Leyre",
    Alamat: "80510 Stang Junction",
  },
  {
    NIK: "20.113.204.181/29",
    Kepala: "Koral Statefield",
    Alamat: "37623 5th Street",
  },
];
export default function TablePKH({ search }) {
  const [rowData, setRowData] = useState(data);
  useEffect(() => {
    if (search) {
      setRowData();
      //   filter with NIK and kepala keluarga and alamat
      const filteredData = data.filter((item) => {
        return (
          item.NIK.toLowerCase().includes(search.toLowerCase()) ||
          item.Kepala.toLowerCase().includes(search.toLowerCase()) ||
          item.Alamat.toLowerCase().includes(search.toLowerCase())
        );
      });
      setRowData(filteredData);
    } else {
      setRowData(data);
    }
  }, [search]);
  return (
    <Sheet
      className="OrderTableContainer"
      variant="outlined"
      sx={{
        display: { xs: "none", sm: "initial" },
        width: "100%",
        borderRadius: "sm",
        flexShrink: 1,
        overflow: "auto",
        minHeight: 0,
      }}
    >
      <Table
        aria-labelledby="tableTitle"
        stickyHeader
        hoverRow
        sx={{
          "--TableCell-headBackground": "var(--joy-palette-background-level1)",
          "--Table-headerUnderlineThickness": "1px",
          "--TableRow-hoverBackground": "var(--joy-palette-background-level1)",
          "--TableCell-paddingY": "4px",
          "--TableCell-paddingX": "8px",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                width: 60,
                padding: "12px 18px",
                fontWeight: "500",
                fontSize: "1.1em",
              }}
            >
              No
            </th>
            <th
              style={{
                width: 140,
                padding: "12px 6px",
                fontWeight: "500",
                fontSize: "1.1em",
              }}
            >
              NIK
            </th>
            <th
              style={{
                width: 140,
                padding: "12px 6px",
                fontWeight: "500",
                fontSize: "1.1em",
              }}
            >
              Kepala Keluarga
            </th>
            <th
              style={{
                width: 240,
                padding: "12px 6px",
                fontWeight: "500",
                fontSize: "1.1em",
              }}
            >
              Alamat
            </th>
          </tr>
        </thead>
        <tbody>
          {rowData.map((row, index) => (
            <tr key={index + 1}>
              <td>
                <Typography sx={{ pl: "16px", fontWeight: "md" }}>
                  {index + 1}
                </Typography>
              </td>
              <td>
                <Typography>{row.NIK}</Typography>
              </td>
              <td>
                <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                  <Avatar size="sm">
                    {row.Kepala.split(" ").map((item) => item[0])}
                  </Avatar>
                  <div>
                    <Typography>{row.Kepala}</Typography>
                  </div>
                </Box>
              </td>
              <td>
                <Typography sx={{ textTransform: "capitalize" }}>
                  {row.Alamat}
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Sheet>
  );
}
