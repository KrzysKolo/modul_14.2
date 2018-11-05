var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'Film o czarodzieju',
     image: 'h.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
      image: 'k.jpg'
  },
    {
    id: 3,
    title: 'Dirty Dancing',
    desc: 'Film o miłościm i tancu',
    image: 'dd.jpg'
  },
  {
    id: 4,
    title: 'Zaplątani',
    desc: 'Film ten jest inspirowany baśnią braci Grimm opowiadającą o dziewczynie zwanej Roszpunką, zamkniętej w wieży przez czarownicę.',
    image: 'z.jpg'
  },
    {
    id: 5,
    title: 'Kot w butach',
    desc: 'Film opowiada o wczesnych przygodach Kota, jeszcze zanim poznał Shreka',
    image: 'kwb.jpg'
  },
  {
    id: 6,
    title: 'Mentalista',
    desc: 'Serial o Patricku Jane, który po stracie córki i żony zabitych przez seryjnego mordercę, znanego jako Red John, zostaje konsultantem pracującym dla Kalifornijskiego Biura Śledczego (CBI). Jego zdolności obserwacyjne pomagają rozwiązywać najtrudniejsze zagadki',
    image: 'm.jpg'
  }
];
var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('img', {src: movie.image},
                         )
    );
});
var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );
ReactDOM.render(element, document.getElementById('app'));