const CACHE_NAME = 'restaurant-cache';
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(function(cache) {
      console.log('Opened cache');
      return cache.addAll([
        '/',
        '/js',
        '/css',
        'data',
        'img'
        ]);
    })
    );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
    .then(function(response) {
              // Cache hit - return response
              if (response) {
                return response;
              }

              // Clone the request
              var fetchRequest = event.request.clone();

              return fetch(fetchRequest).then(
                function(response) {
                  // Check if we received a valid response
                  if(!response || response.status !== 200 || response.type !== 'basic') {
                    return response;
                  }

                  // Clone the response. 
                  var responseToCache = response.clone();

                  caches.open(CACHE_NAME)
                  .then(function(cache) {
                    cache.put(event.request, responseToCache);
                  });

                  return response;
                }
                );
            })
    );
});
