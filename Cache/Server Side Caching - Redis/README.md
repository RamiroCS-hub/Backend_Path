### EXAMPLE EXPLANATION
This example is not even nearly of a real cache implementation but show how having a cache database can improve the response latency of our application. We can see this difference in the /users and the /cache, whereas the first endpoint get the users from another API the second endpoint look for the users in the cache, resulting in a better performance and in a very low latency


PD: Obviously you have to implement some caching strategy for caching the data. In this example this not exists.