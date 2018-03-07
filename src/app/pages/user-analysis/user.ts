export class UserInterest {
  rank: number;
  name: string;
  proportion: any;
}

export class APPtimeAnalysis {
  Dtime: any[];
  Dlen: any[];
  Mtime: any[];
  Mlen: any[];
}

export class User {
  userId: any;
  // 日使用手机时长分析
  aPPtimeAnalysis: APPtimeAnalysis;
// 兴趣分布分析
  UserIntersets: UserInterest[];
}

export const USER: User[] = [
  {
    userId: 0,
    aPPtimeAnalysis: {
      Dtime: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45',
        '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45'],
      Dlen: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
      Mtime: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45',
        '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45'],
      Mlen: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
    },
    UserIntersets: [
      {rank: 1, name: '软件应用', proportion: 15},
      {rank: 2, name: '影视音乐', proportion: 5},
      {rank: 3, name: '资讯', proportion: 15},
      {rank: 4, name: '医疗健康', proportion: 15},
      {rank: 5, name: '教育培训', proportion: 10},
      {rank: 6, name: '餐饮美食', proportion: 5},
      {rank: 7, name: '旅游酒店', proportion: 10},
      {rank: 8, name: '家电数码', proportion: 12},
      {rank: 9, name: '游戏', proportion: 8},
      {rank: 10, name: '书籍阅读', proportion: 5}],
  },
  {
    userId: 1,
    aPPtimeAnalysis: {
      Dtime: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45',
        '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45'],
      Dlen: [30, 28, 25, 26, 20, 30, 55, 50, 40, 39, 38, 90, 40, 50, 60, 75, 80, 70, 60, 40],
      Mtime: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45',
        '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45'],
      Mlen: [30, 28, 25, 26, 20, 30, 55, 50, 40, 39, 38, 90, 40, 50, 60, 75, 80, 70, 60, 40],
    },
    UserIntersets: [
      {rank: 1, name: '软件应用', proportion: 15},
      {rank: 2, name: '影视音乐', proportion: 5},
      {rank: 3, name: '资讯', proportion: 15},
      {rank: 4, name: '医疗健康', proportion: 15},
      {rank: 5, name: '教育培训', proportion: 10},
      {rank: 6, name: '餐饮美食', proportion: 5},
      {rank: 7, name: '旅游酒店', proportion: 10},
      {rank: 8, name: '家电数码', proportion: 12},
      {rank: 9, name: '游戏', proportion: 8},
      {rank: 10, name: '书籍阅读', proportion: 5}],
  },
];
