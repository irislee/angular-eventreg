eventsApp.factory('eventData', function () {

  return {
    event: {
      name: 'Angular Boot Camp',
      date: '1/1/2019',
      time: '10:30 am',
      location: {
        address: 'Google Headquarters',
        city: 'Mountain View',
        province: 'CA'
      },
      imageUrl: '/img/angularjs-logo.png',
      sessions: [
        {
          name: 'Directives Masterclass',
          creatorName: 'Bob',
          duration: 1,
          level: 'Advanced',
          abstract: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          upVoteCount: 0
        },
        {
          name: 'Scopes for fun and profit',
          creatorName: 'John',
          duration: 2,
          level: 'Introductory',
          abstract: 'Accusamus consectetur iure, sequi rem voluptas impedit dolore.',
          upVoteCount: 0
        },
        {
          name: 'Well Behaved Controllers',
          creatorName: 'Molly',
          duration: 4,
          level: 'Intermediate',
          abstract: 'Nemo adipisci incidunt iure iusto tenetur voluptatibus ducimus.',
          upVoteCount: 0
        }
      ]
    }
  };

});