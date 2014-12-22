_.each({
  isAdmin: function(u){
    var user = u || Meteor.user();

    return user && _.contains(user.roles, "admin");
  },
  badgeImage: function(id){
    return Badges.findOne(id).imageUrl;
  }
}, function(fn, name){
  Template.registerHelper(name, fn);
});


