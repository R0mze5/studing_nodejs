const debug = process.env.DEBUG ? console.log : function () {};

debug('выведет в консоль если переменная окружения DEBUG ===1 ');
