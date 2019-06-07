/* eslint no-use-before-define: 0 */

workbox.precaching.precacheAndRoute(self.__precacheManifest);

const matchCb = ({url, event}) => {
  console.log(url.pathname);
  return (url.pathname === '/todos');
};

workbox.routing.registerRoute(
  matchCb,
  new workbox.strategies.NetworkFirst({
    cacheName: "api-cache"
  })
);
