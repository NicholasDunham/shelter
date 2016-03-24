const ClientFactory = function($resource) {
  return $resource('/clients/:clientId');
};

export default ClientFactory;

