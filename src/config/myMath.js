class myMath {
   static randomChart() {
      var text = "admin_";
      var possible =
         "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (var i = 0; i < 5; i++) {
         text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
   }
}

export default myMath;
