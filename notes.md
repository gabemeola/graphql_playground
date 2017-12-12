# Notes

start time: 7:40pm Tuesday  
end time: 11:40pm Tuesday

Not 100% percent complete.
  
### Missing
- batching
- caching
- Delete Mutations
- Update and Create Mutations on Teachers, Books, and Classes


### Examples
- [Fetching First Student](http://localhost:8080/graphql?query=%7B%0A%20%20student%20(id%3A%201)%20%7B%0A%20%20%20%20name%0A%20%20%7D%0A%7D)  
- [Fetching All Teachers](http://localhost:8080/graphql?query=%7B%0A%20%20teachers%20%7B%0A%20%20%20%20name%0A%20%20%20%20id%0A%20%20%7D%0A%7D)  
- [Creating a New Student](http://localhost:8080/graphql?query=mutation%20%7B%0A%20%20setStudent(name%3A%20%22Gabe%20Meola%22)%20%7B%0A%20%20%20%20id%0A%20%20%20%20name%0A%20%20%7D%0A%7D)  
- [Updating a Student Name](http://localhost:8080/graphql?query=mutation%20M%7B%0A%20%20setStudent(name%3A%20%22Hagrid%20Goes%20Back%20to%20School%22%2C%20id%3A%203)%20%7B%0A%20%20%20%20id%0A%20%20%20%20name%0A%20%20%7D%0A%7D%0A%0Aquery%20Q%7B%0A%20%20students%20%7B%0A%20%20%20%20name%0A%20%20%7D%0A%7D&operationName=Q)  
- [Fetching All Classes w/ Students, Books, and Teachers](http://localhost:8080/graphql?query=%7B%0A%20%20classes%20%7B%0A%20%20%20%20name%0A%20%20%20%20teachers%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%7D%0A%20%20%20%20books%20%7B%0A%20%20%20%20%20%20title%0A%20%20%20%20%7D%0A%20%20%20%20students%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)
