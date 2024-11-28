# GamesGlobal Technical test
 
## App 
In the React with TypeScript application, Material-UI was used as the primary design library, as per requirements. However, to reduce dependency on a single third-party library and ensure flexibility for future technology changes, I wrapped almost all MUI components with custom component wrappers.

This approach abstracts the dependency, allowing us to switch to a different library with minimal impact on the application. It ensures that changes at the design-system level won’t require extensive modifications to individual components. 

Also, I added a few unit tests to the Search component, because it seem to be only one with some sort of business logic. However, it is still almost impossible to write good test when the component is statefull, I would suggest to finish the tests with Playwright or Cypress, to ensure the best quality as possible.

Technologies used; React, TypeScript, MUI, Vite, Vitest

## API
In the API side of this, following the insctructions I am retriving the data from the disk. I added the [ResponseCache](https://learn.microsoft.com/en-us/aspnet/core/performance/caching/response?view=aspnetcore-9.0) since it is not necessary to over engineer such a small system. Ideally, in a real world scenario, Redis could be a great fit for something like this. However, if the system needs to heavily use the searchbar, we could go with ElasticSearch.

I didn't created any unit tests for the API because I really didn't see a case for it. It is fair to say that if I would cache it manually, I would do it in the Service Layer, creating a Caching Service class to handle it, caching data by some sort of key, and it would be a great fit for a unit test. 

## Another considerations
I prioritized flexibility with technologies, focusing on scalable approaches that make sense for the early stages of an application while avoiding premature optimization.

## Design system
Well, it is hard to create a system design based on small requirements, so I tried to be consise on with it was being asked. So, no queues since there is no case for it with the information I have.

My system design represent the same system but made for a good amount of users. The main idea is to cache as much as possible and distribute it by regions. 

For client assets I would use CDNs for mostly JS bundles, and CSS, and I would not load balancer a client, since is just a view/client.

For the API/Node orchestration I would use K8s, to scale up and down depending on traffic. I would consider horizontal scalling over vertical as the primarly focus.

![image](https://github.com/user-attachments/assets/57b3b112-854e-412f-b8fa-f02148ab09b9)
