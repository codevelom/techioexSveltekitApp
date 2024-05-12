export const RandomStringGenerator = (stringLenth : number) => {

    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < stringLenth; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    var shuffled = '';
    var array = result.split('');
    while (array.length) {
      var index = Math.floor(Math.random() * array.length);
      shuffled += array.splice(index, 1);
    }

  return shuffled;
}