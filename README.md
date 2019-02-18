# TRIANGLE TRACKER
#### The application uses lengths to determine if a triangle is scalene ,isosclese ,equilateral or not a triangle, FEB 15 2019
#### By **Shirley Keter**
## Description
The triangle tracker determines whether a triangle is equilateral, isoscelese , scalene or not a triangle.The user enters in the length of the base , height and hypotenus .

## Setup/Installation Requirements
* This is a great place
* to list setup instructions
* in a simple
* easy-to-understand
* format
{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? Do I need to install any dependencies? How should I set up my databases? Is there other code this app depends on?}
##BDD

|   BEHAVIOUR      | INPUT     | OUTPUT      |
|------------------|-----------|-------------|          
|base = height     |  6,6,6    | equilateral |          
| =hypotenus       |           |             |   
|------------------|-----------|-------------|          
|base = height or  |  6,6,5    | isoscelese  |
|height = hypotenus|           |             |
|orbase = hypotenus|           |             |  
|------------------|-----------|-------------|
|base+height<      | 4,2,1     | not a       |
|hypotenus         | 2+1<4     | triangle    |
|height+hypotenus< |           |             |
|<base             |           |             |
|base+hypotenus<   |           |             |
|<height           |           |             |
|------------------|-----------|-------------|
|no sides are equal| 6,4,8     |scalene      |                                   
|------------------|-----------|-------------|
No known Bugs.
## Technologies Used
Built using:HTML ,JavaScript ,CSS
## Support and contact details
Incase of issues and questions contact shirleyketer@gmail.com
### License
MIT License

Copyright (c) 2019 Shirley Keter
