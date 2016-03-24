const AnimalFactory = function($resource) {
  return $resource('/animals/:animalId');
};

export default AnimalFactory;
