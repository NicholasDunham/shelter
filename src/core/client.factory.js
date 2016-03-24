const ClientFactory = function($resource) {
  return $resource('/clients');
};

export default ClientFactory;
