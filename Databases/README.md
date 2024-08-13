### MORE ABOUT DATABASES

#### ACID - Atomicity, consistency, isolation and durability
* Atomicity
  - Atomicity refers to the fact that the database transactions has to be finished completely or the DB has to be reverted to the same state
  - What is a transaction? A transaction is a single unit of work that can contain one query or multiple queries. If one query fail, the entire transaction fail
* Consistency
  - Consistency refers to ensure that the data has the correct state. The correct state is determined by the constraints that we declared. An example of this is for example if we define that one field cannot be null the database has to ensure that that field has never a null state
* Isolation
  - Isolation refers to the control of the concurrency. This means that if there are multiple same time queries the database has to treat this as sequential queries to verify in each query the consistency of the database.
* Durability
  - Refers to save transactions and data in a non volatile memory
Most or almost all the ORMs take charge of the ACID principle. For example Prisma, https://www.prisma.io/docs/orm/prisma-client/queries/transactions#read-modify-write.

#### N + 1 PROBLEM
The N + 1 problem appears when the app make a N number of queries being N a number that can change any time. To explain this come to see the next example:
  Imagine we have a users and a posts table, each user has a post related to him. To retrieve the user with his post our app make first a query to retrieve all the users, and then make for each user a query to the posts table looking for the post related to that user. This is called the N + 1 problem. Why? Because we have N querys that in this case represents the number of users plus 1 query to retrieve all the users.
How can we solve the N + 1 problem? Simply, that we can do is to do 2 simple querys, 1 for retrieving all the users, and one for retriving all the post. Then we can filter the posts manually with a **for of** for example.
Why the N + 1 problem is a problem? Think about an app that has a thousands of users if our app has to make a query for each user the latency and the resources consumed by our app will be enormous. In the other hand if we make it manually we will ever only have to do 2 queries.