import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
} from '@devexpress/dx-react-chart-material-ui';
import { useStyles } from './styles';

const data = [{ "id": "nd0nWySoN9c_qfkE", "time": 1593011027, "description": "Cupkultura", "mcc": 5814, "amount": -15500, "operationAmount": -15500, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 155, "balance": 5468573, "hold": false }, { "id": "R6z0uCr15yHYPO4r", "time": 1593009567, "description": "On Clinic", "mcc": 8099, "amount": -10000, "operationAmount": -10000, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 0, "balance": 5484073, "hold": false }, { "id": "Wl6GqrYM1v1D2BPX", "time": 1593007366, "description": "On Clinic", "mcc": 8099, "amount": -2200, "operationAmount": -2200, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 0, "balance": 5494073, "hold": false }, { "id": "WE_fwoNs02EDra47", "time": 1593003505, "description": "EasyPay", "mcc": 7399, "amount": -29800, "operationAmount": -29800, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 0, "balance": 5496273, "hold": false }, { "id": "yBvF3YPLNpMTA9WY", "time": 1592995703, "description": "KOFE", "mcc": 5812, "amount": -2900, "operationAmount": -2900, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 29, "balance": 5526073, "hold": false }, { "id": "25TDHd6qVOjnSy3G", "time": 1592927103, "description": "Майстерня кави", "mcc": 5814, "amount": -12300, "operationAmount": -12300, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 123, "balance": 5528973, "hold": false }, { "id": "WP0P-3R_-6Jr7BML", "time": 1592926843, "description": "Термінал IBOX", "mcc": 4829, "amount": 150000, "operationAmount": 150000, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 0, "balance": 5541273, "hold": true }, { "id": "UjdwjLKLd4h_DxZ3", "time": 1592852944, "description": "Класс", "mcc": 5411, "amount": -11637, "operationAmount": -11637, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 116, "balance": 5391273, "hold": false }, { "id": "-7kJmLRsfpGFWlht", "time": 1592851363, "description": "WFP.ONTAXIUA", "mcc": 4121, "amount": -8600, "operationAmount": -8600, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 0, "balance": 5402910, "hold": false }, { "id": "ViWVk6gWoRu95Buk", "time": 1592850830, "description": "FOP Baranskyy D.F.", "mcc": 5814, "amount": -21500, "operationAmount": -21500, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 215, "balance": 5411510, "hold": false }, { "id": "CJvqvfhVr2b6OBWO", "time": 1592850810, "description": "FOP Baranskyy D.F.", "mcc": 5814, "amount": -28500, "operationAmount": -28500, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 285, "balance": 5433010, "hold": false }, { "id": "2SOOn6yAzKUYIVMV", "time": 1592839256, "description": "WFP.ONTAXIUA", "mcc": 4121, "amount": -8400, "operationAmount": -8400, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 0, "balance": 5461510, "hold": false }, { "id": "f8ydY90pP4hMJPDZ", "time": 1592827217, "description": "APTEKA 2", "mcc": 5912, "amount": -19760, "operationAmount": -19760, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 0, "balance": 5469910, "hold": false }, { "id": "fFBkVNhrRlP-HSNk", "time": 1592824473, "description": "Майстерня кави", "mcc": 5814, "amount": -9000, "operationAmount": -9000, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 90, "balance": 5489670, "hold": false }, { "id": "508oUaRhYI4mAVFC", "time": 1592775655, "description": "Facebook", "mcc": 7311, "amount": -7070, "operationAmount": -263, "currencyCode": 840, "commissionRate": 0, "cashbackAmount": 0, "balance": 5498670, "hold": false }, { "id": "q4E5xTQTgNWw6UKX", "time": 1592751821, "description": "Класс", "mcc": 5411, "amount": -75708, "operationAmount": -75708, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 757, "balance": 5505740, "hold": false }, { "id": "-OWVZnHs7RH4nChx", "time": 1592656838, "description": "Щомісячний платіж. Витрата у розстрочку від 20.03.2020", "mcc": 4829, "amount": -109478, "operationAmount": -109478, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 0, "balance": 5581448, "hold": true }, { "id": "rcg6mn8yB1zOv5Ks", "time": 1592576717, "description": "Мастерская кофе", "mcc": 5814, "amount": -4000, "operationAmount": -4000, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 40, "balance": 5690926, "hold": false }, { "id": "yJDpLFsgNSZL9ljh", "time": 1592539126, "description": "Facebook", "mcc": 7311, "amount": -6102, "operationAmount": -227, "currencyCode": 840, "commissionRate": 0, "cashbackAmount": 0, "balance": 5694926, "hold": false }, { "id": "WUXt4AOHHIhK5vIb", "time": 1592510042, "description": "ФОП ТІТЄЄВА ІРИНА СЕРГІЇВНА", "mcc": 4829, "amount": -283560, "operationAmount": -283560, "currencyCode": 980, "commissionRate": 5560, "cashbackAmount": 0, "balance": 5701028, "hold": true }, { "id": "S_ybL_zeiWBvx_NC", "time": 1592501321, "description": "GitHub", "mcc": 7372, "amount": -10753, "operationAmount": -400, "currencyCode": 840, "commissionRate": 0, "cashbackAmount": 0, "balance": 5984588, "hold": false }, { "id": "eeiLzICIIW66_C6X", "time": 1592491785, "description": "Prostor", "mcc": 5977, "amount": -14589, "operationAmount": -14589, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 0, "balance": 5995341, "hold": false }, { "id": "eazzkHAaaX20PSpX", "time": 1592491504, "description": "Prostor", "mcc": 5977, "amount": -13515, "operationAmount": -13515, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 0, "balance": 6009930, "hold": false }, { "id": "36svViU0eyi81K2x", "time": 1592490006, "description": "Київстар\n+380986569560", "mcc": 4814, "amount": -10500, "operationAmount": -10500, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 0, "balance": 6023445, "hold": true }, { "id": "CKylJL4UrNK0oiEv", "time": 1592487877, "description": "McDonalds", "mcc": 5814, "amount": -19000, "operationAmount": -19000, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 190, "balance": 6033945, "hold": false }, { "id": "sj2-HPb5orJGbk8b", "time": 1592477935, "description": "ПАТ \"СК \"Українська страхова група\"", "mcc": 4829, "amount": -102081, "operationAmount": -102081, "currencyCode": 980, "commissionRate": 2002, "cashbackAmount": 0, "balance": 6052945, "hold": true }, { "id": "Ln-UNZo-T_QkPwtP", "time": 1592409244, "description": "На Білу картку", "mcc": 4829, "amount": -208000, "operationAmount": -208000, "currencyCode": 980, "commissionRate": 8000, "cashbackAmount": 0, "balance": 6155026, "hold": true }, { "id": "RcBp5xuA7T-8YJg3", "time": 1592408530, "description": "LIQPAY*Filiya GIOC  AT", "mcc": 4112, "amount": -67970, "operationAmount": -67970, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 0, "balance": 6363026, "hold": false }, { "id": "5Rv2oh90qGqGH2Ei", "time": 1592408241, "description": "LIQPAY*Filiya GIOC  AT", "mcc": 4112, "amount": -118640, "operationAmount": -118640, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 0, "balance": 6430996, "hold": false }, { "id": "v353Wn70E3hWGv5m", "time": 1592397073, "description": "Класс", "mcc": 5411, "amount": -34873, "operationAmount": -34873, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 348, "balance": 6549636, "hold": false }, { "id": "sbklYIfH0ePLFld5", "time": 1592394509, "description": "KOFE", "mcc": 5812, "amount": -4500, "operationAmount": -4500, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 45, "balance": 6584509, "hold": false }, { "id": "RFyOBMhIHNuo0pg9", "time": 1592338950, "description": "Онлайн-кинотеатр ivi", "mcc": 7841, "amount": -100, "operationAmount": -100, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 0, "balance": 6589009, "hold": false }, { "id": "hpIC1179bbcqaMQH", "time": 1592308248, "description": "TETCHER", "mcc": 5814, "amount": -26000, "operationAmount": -26000, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 260, "balance": 6589109, "hold": false }, { "id": "tguyusa1z7evfUpp", "time": 1592292224, "description": "My Water Shop", "mcc": 5411, "amount": -15000, "operationAmount": -15000, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 150, "balance": 6615109, "hold": false }, { "id": "1MB-EPyoPXT52605", "time": 1592286371, "description": "MEDICHNIY CENTR", "mcc": 8050, "amount": -43000, "operationAmount": -43000, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 0, "balance": 6630109, "hold": false }, { "id": "P4_B-3WrbPoAgG2p", "time": 1592256653, "description": "Поповнення «На море»", "mcc": 4829, "amount": -260, "operationAmount": -260, "currencyCode": 980, "commissionRate": 10, "cashbackAmount": 0, "balance": 6673109, "hold": true }, { "id": "Qwvf1PKNiUDYHgtr", "time": 1592243581, "description": "LIQPAY*Susha Papa", "mcc": 5812, "amount": -30200, "operationAmount": -30200, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 302, "balance": 6673369, "hold": false }, { "id": "G8z7EYI6gQdR0gWv", "time": 1592238841, "description": "APTEKA 2", "mcc": 5912, "amount": -8800, "operationAmount": -8800, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 0, "balance": 6703569, "hold": false }, { "id": "Vc5jZij36LIhtKGb", "time": 1592236498, "description": "Bulky, Kofe, Liubov", "mcc": 5814, "amount": -8000, "operationAmount": -8000, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 80, "balance": 6712369, "hold": false }, { "id": "CCOiPNoh5HTCjA0Q", "time": 1592236291, "description": "Щомісячний платіж. Витрата у розстрочку від 15.01.2020", "mcc": 4829, "amount": -365503, "operationAmount": -365503, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 0, "balance": 6720369, "hold": true }, { "id": "eDoNvN8fOUsECaUq", "time": 1592190827, "description": "WFP.ONTAXIUA", "mcc": 4121, "amount": -9200, "operationAmount": -9200, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 0, "balance": 4085872, "hold": false }, { "id": "gSV0MW4TIw5ZfQjX", "time": 1592187934, "description": "WFP.ONTAXIUA", "mcc": 4121, "amount": -6900, "operationAmount": -6900, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 0, "balance": 4095072, "hold": false }, { "id": "NGngHeSdniGI8Yy8", "time": 1592140066, "description": "Класс", "mcc": 5411, "amount": -67151, "operationAmount": -67151, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 671, "balance": 4101972, "hold": false }, { "id": "yw1MkjRohQz2sxJ1", "time": 1592072409, "description": "LIQPAY*Double cheese", "mcc": 5812, "amount": -25600, "operationAmount": -25600, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 256, "balance": 4169123, "hold": false }, { "id": "uue6_ApZmJ69VAhg", "time": 1591885889, "description": "Класс", "mcc": 5411, "amount": -300, "operationAmount": -300, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 3, "balance": 4194723, "hold": false }, { "id": "eJDFTZVZqcOBJ3fh", "time": 1591885814, "description": "Класс", "mcc": 5411, "amount": -103392, "operationAmount": -103392, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 1033, "balance": 4195023, "hold": false }, { "id": "fTB_TCjQTMzqfp36", "time": 1591798698, "description": "portmone.com.ua", "mcc": 7311, "amount": -1900, "operationAmount": -1900, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 0, "balance": 4298415, "hold": false }, { "id": "qwqUAyTgTjAnFAVz", "time": 1591796168, "description": "На Білу картку", "mcc": 4829, "amount": -312624, "operationAmount": -312624, "currencyCode": 980, "commissionRate": 12024, "cashbackAmount": 0, "balance": 4300315, "hold": true }, { "id": "Azghg9SRBd3dqkHW", "time": 1591557443, "description": "WFP.ONTAXIUA", "mcc": 4121, "amount": -5900, "operationAmount": -5900, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 0, "balance": 4612939, "hold": false }, { "id": "0137KCCtPiWuQY2K", "time": 1591555031, "description": "WFP.ONTAXIUA", "mcc": 4121, "amount": -5500, "operationAmount": -5500, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 0, "balance": 4618839, "hold": false }, { "id": "WcAjH7kpJCKjP5zw", "time": 1591455478, "description": "WFP.ONTAXIUA", "mcc": 4121, "amount": -5300, "operationAmount": -5300, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 0, "balance": 4624339, "hold": false }, { "id": "Fk6U8ipIXFDUVzyx", "time": 1591441054, "description": "WFP.ONTAXIUA", "mcc": 4121, "amount": -5200, "operationAmount": -5200, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 0, "balance": 4629639, "hold": false }, { "id": "CRlPS9ILi0G7d47l", "time": 1591356166, "description": "Вiд: ПИЛИП I.П. ФОП", "mcc": 4829, "amount": 2900000, "operationAmount": 2900000, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 0, "balance": 4634839, "hold": true }, { "id": "gGhDpxDXk5fijLfN", "time": 1591342887, "description": "Олег Д.", "mcc": 4829, "amount": -208000, "operationAmount": -208000, "currencyCode": 980, "commissionRate": 8000, "cashbackAmount": 0, "balance": 1734839, "hold": true }, { "id": "YAMwACNBemC9NDx6", "time": 1591268903, "description": "Justin", "mcc": 4215, "amount": -69000, "operationAmount": -69000, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 0, "balance": 1942839, "hold": false }, { "id": "0Gh_KZ8GMR1T7E_6", "time": 1591268662, "description": "Майстерня кави", "mcc": 5814, "amount": -8500, "operationAmount": -8500, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 85, "balance": 2011839, "hold": false }, { "id": "EIy_sMfkHYmtCq9r", "time": 1591202863, "description": "IDS Borjomi Ukraine", "mcc": 5411, "amount": -15000, "operationAmount": -15000, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 150, "balance": 2020339, "hold": false }, { "id": "PuY7B5NC5_03et8u", "time": 1591183958, "description": "Майстерня кави", "mcc": 5814, "amount": -7500, "operationAmount": -7500, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 75, "balance": 2035339, "hold": false }, { "id": "mNn3PpphvLNz68o6", "time": 1591168662, "description": "Pulse Gym", "mcc": 7997, "amount": -4500, "operationAmount": -4500, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 0, "balance": 2042839, "hold": false }, { "id": "kKFjEXASoy011sNZ", "time": 1591096590, "description": "Майстерня кави", "mcc": 5814, "amount": -6000, "operationAmount": -6000, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 60, "balance": 2047339, "hold": false }, { "id": "xS6oVgiFgetGbLcj", "time": 1591029380, "description": "Майстерня кави", "mcc": 5814, "amount": -11000, "operationAmount": -11000, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 110, "balance": 2053339, "hold": false }, { "id": "FIMGGDhN4oIZOZgo", "time": 1591027358, "description": "Pulse Gym", "mcc": 7997, "amount": -4500, "operationAmount": -4500, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 0, "balance": 2064339, "hold": false }, { "id": "Fk0uUcm7VR_A5uij", "time": 1591020799, "description": "Pulse Gym", "mcc": 7997, "amount": -53000, "operationAmount": -53000, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 0, "balance": 2068839, "hold": false }, { "id": "i5L5hoRRW9JR8_MI", "time": 1591003142, "description": "Виведення кешбеку 111.15₴", "mcc": 4829, "amount": 8947, "operationAmount": 8947, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 0, "balance": 2121839, "hold": true }, { "id": "8875T1CpZKiOs7ex", "time": 1590946973, "description": "Класс", "mcc": 5411, "amount": -25437, "operationAmount": -25437, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 254, "balance": 2112892, "hold": false }, { "id": "jFhQmhpstx5O43H-", "time": 1590765742, "description": "YouTube", "mcc": 5968, "amount": -14900, "operationAmount": -14900, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 0, "balance": 2138329, "hold": false }, { "id": "BDJ2rkuMcMnNlf_f", "time": 1590758025, "description": "Класс", "mcc": 5411, "amount": -50894, "operationAmount": -50894, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 508, "balance": 2153229, "hold": false }, { "id": "-7IsOXo3JbYztpg_", "time": 1590601090, "description": "Пекарефф", "mcc": 5499, "amount": -4300, "operationAmount": -4300, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 43, "balance": 2204123, "hold": false }, { "id": "5X0-b_133CGo8kH1", "time": 1590597630, "description": "Аспирин", "mcc": 5912, "amount": -17920, "operationAmount": -17920, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 179, "balance": 2208423, "hold": false }, { "id": "ceSq8i71gSbqFwUw", "time": 1590597307, "description": "Сергій К.", "mcc": 4829, "amount": -78000, "operationAmount": -78000, "currencyCode": 980, "commissionRate": 3000, "cashbackAmount": 0, "balance": 2226343, "hold": true }, { "id": "gwrJCEv5B5jGkSea", "time": 1590594345, "description": "Аспирин", "mcc": 5912, "amount": -20000, "operationAmount": -20000, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 200, "balance": 2304343, "hold": false }, { "id": "X0o3zUxiDaeHHqin", "time": 1590593622, "description": "Vodafone\n+380501916559", "mcc": 4814, "amount": -18500, "operationAmount": -18500, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 0, "balance": 2324343, "hold": true }, { "id": "Sy-GI2U8XdYjZG8J", "time": 1590551740, "description": "Netflix", "mcc": 7841, "amount": -29555, "operationAmount": -999, "currencyCode": 978, "commissionRate": 0, "cashbackAmount": 0, "balance": 2342843, "hold": false }, { "id": "VgkLmoMmI44x0z0K", "time": 1590533563, "description": "LIQPAY*PayPong TELECOM", "mcc": 4816, "amount": -15450, "operationAmount": -15450, "currencyCode": 980, "commissionRate": 0, "cashbackAmount": 0, "balance": 2372398, "hold": false }, { "id": "g0E2K56HZ3nAHgx_", "time": 1590468915, "description": "Apple", "mcc": 5735, "amount": -2676, "operationAmount": -99, "currencyCode": 840, "commissionRate": 0, "cashbackAmount": 0, "balance": 2387848, "hold": false }];

const dates = new Map();

data.forEach(({ time, amount }) => {
  const m = amount / 100;
  const s = {
    time: new Date(time * 1000).getDate(),
    amountMinus: m < 0 ? m : 0,
    amountPlus: m > 0 ? m : 0,
  };
  const item = dates.get(s.time);
  s.amountMinus += item ? item.amountMinus : 0;
  s.amountPlus += item ? item.amountPlus : 0;
  dates.set(s.time, s);
});

const cleanData: any[] = [];
dates.forEach((value) => {
  cleanData.push(value);
})

export const MoneyChart: React.FC = () => {
  const classes = useStyles();
  console.log(cleanData);
  return (
    <Paper className={classes.paper}>
      <Chart
        data={cleanData}
      >
        <ArgumentAxis />
        <ValueAxis />

        <LineSeries valueField="amountMinus" argumentField="time" color="red" />
        <LineSeries valueField="amountPlus" argumentField="time" color="green" />
      </Chart>
    </Paper>
  );
}