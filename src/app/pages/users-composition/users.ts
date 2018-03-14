export class Node {
  color: any;
  label: any;
  attributes: any;
  y: any;
  x: any;
  id: any;
  size: any;
}

const labelData: string[] = ['  12.06%', '  9.42%', '  7.90%', '  6.64%', '  6.07%', '  4.61%', '  4.25%',
  '  4.14%', '  4.07%', ' 4.01%'];
const labelDataN: string[] = ['软件应用', '影视影月', '咨询', '教育培训', '医疗健康', '游戏', '餐饮美食',
  '休闲爱好', '家电数码', '汽车'];

export class Users {
  nodes: Node[];
}

export const USERS: Users[] = [
  {
    nodes: [{
      'color': '#1984c7',
      'label': labelDataN[0] + '\n' + '\n' + labelData[0],
      'attributes': {},
      'y': 41.25936,
      'x': 157.57562,
      'id': 'async',
      'size': 123.161194,
    }, {
      'color': '#8419c7',
      'label': labelDataN[1] + '\n' + '\n' + labelData[1],
      'attributes': {},
      'y': 241.89249,
      'x': -1047.57906,
      'id': 'request',
      'size': 114.54965,
    }, {
      'color': '#c71969',
      'label': labelDataN[2] + '\n' + '\n' + labelData[2],
      'attributes': {},
      'y': -734.4221,
      'x': 1075.53079,
      'id': 'underscore',
      'size': 100.0,
    }, {
      'color': '#c71919',
      'label': labelDataN[3] + '\n' + '\n' + labelData[3],
      'attributes': {},
      'y': -230.14833,
      'x': -1644.2716,
      'id': 'express',
      'size': 99.608772,
    }, {
      'color': '#9fc719',
      'label': labelDataN[4] + '\n' + '\n' + labelData[4],
      'attributes': {},
      'y': 629.6494,
      'x': 657.2629,
      'id': 'pkginfo',
      'size': 98.698538,
    }, {
      'color': '#19c719',
      'label': labelDataN[5] + '\n' + '\n' + labelData[5],
      'attributes': {},
      'y': 171.80579,
      'x': 1599.53815,
      'id': 'optimist',
      'size': 98.4046,
    }, {
      'color': '#c78419',
      'label': labelDataN[6] + '\n' + '\n' + labelData[6],
      'attributes': {},
      'y': -700.89026,
      'x': 81.49971,
      'id': 'coffee-script',
      'size': 94.031462,
    }, {
      'color': '#19c7b9',
      'label': labelDataN[7] + '\n' + '\n' + labelData[7],
      'attributes': {},
      'y': -682.1726,
      'x': -479.44443,
      'id': 'commander',
      'size': 93.21858,
    }, {
      'color': '#3419c7',
      'label': labelDataN[8] + '\n' + '\n' + labelData[8],
      'attributes': {},
      'y': 522.375,
      'x': -1889.2416,
      'id': 'mongodb',
      'size': 91.237192,
    }, {
      'color': '#1a4d4a',
      'label': labelDataN[9] + '\n' + '\n' + labelData[9],
      'attributes': {},
      'y': -265.6326,
      'x': 694.03375,
      'id': 'colors',
      'size': 90.359425,
    },

      // 背景
      {
        'color': '#c71919',
        'label': '',
        'attributes': {},
        'y': 120.37976,
        'x': -1510.59204,
        'id': 'socket.io',
        'size': 8.818306,
      }, {
        'color': '#1984c7',
        'label': '',
        'attributes': {},
        'y': 378.15536,
        'x': -2150.2018,
        'id': 'mongoose',
        'size': 8.81118,
      }, {
        'color': '#c76919',
        'label': '',
        'attributes': {},
        'y': -380.16626,
        'x': 118.30771,
        'id': 'lodash',
        'size': 8.935852,
      }, {
        'color': '#c79f19',
        'label': '',
        'attributes': {},
        'y': -224.0287,
        'x': 317.77667,
        'id': 'mkdirp',
        'size': 8.713282,
      }, {
        'color': '#c71919',
        'label': '',
        'attributes': {},
        'y': 294.88266,
        'x': -1933.4234,
        'id': 'connect',
        'size': 8.574871,
      }, {
        'color': '#c719b9',
        'label': '',
        'attributes': {},
        'y': 815.4766,
        'x': -378.0424,
        'id': 'node-uuid',
        'size': 8.488974,
      }, {
        'color': '#c719b9',
        'label': '',
        'attributes': {},
        'y': 56.938953,
        'x': -1895.56586,
        'id': 'redis',
        'size': 8.475237,
      }, {
        'color': '#69c719',
        'label': '',
        'attributes': {},
        'y': -389.02567,
        'x': -423.78125,
        'id': 'q',
        'size': 8.54566,
      }, {
        'color': '#b9c719',
        'label': '',
        'attributes': {},
        'y': 34.348167,
        'x': -284.14108,
        'id': 'mime',
        'size': 8.858301,
      }, {
        'color': '#c79f19',
        'label': '',
        'attributes': {},
        'y': -542.05096,
        'x': 502.02698,
        'id': 'glob',
        'size': 8.88873,
      }, {
        'color': '#c71919',
        'label': '',
        'attributes': {},
        'y': 264.84995,
        'x': -421.52237,
        'id': 'ejs',
        'size': 8.298051,
      }, {
        'color': '#9f19c7',
        'label': '',
        'attributes': {},
        'y': -75.5553,
        'x': -1380.5015,
        'id': 'debug',
        'size': 8.923333,
      }, {
        'color': '#c71919',
        'label': '',
        'attributes': {},
        'y': -449.40155,
        'x': -173.24167,
        'id': 'jade',
        'size': 8.031315,
      }, {
        'color': '#19b9c7',
        'label': '',
        'attributes': {},
        'y': 695.1258,
        'x': 881.2038,
        'id': 'winston',
        'size': 8.845781,
      }, {
        'color': '#c78419',
        'label': '',
        'attributes': {},
        'y': -620.4443,
        'x': -686.76886,
        'id': 'stylus',
        'size': 8.020013,
      }, {
        'color': '#199fc7',
        'label': '',
        'attributes': {},
        'y': 649.42224,
        'x': 320.47504,
        'id': 'through',
        'size': 8.14173,
      }, {
        'color': '#1984c7',
        'label': '',
        'attributes': {},
        'y': -792.2076,
        'x': -1998.14185,
        'id': 'moment',
        'size': 8.180507,
      }],
  },
];

