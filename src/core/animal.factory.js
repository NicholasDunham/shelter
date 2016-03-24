const AnimalFactory = function($resource) {
  return $resource('/animals');
};

export default AnimalFactory;
