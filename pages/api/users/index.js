import {getAllUsers, createUser} from '../../../services/userService';

export default async function handler(request, response) {
  if (request.method === 'GET') {
    const data = await getAllUsers();
    return response.status(200).json(data);
  } else if (request.method === 'POST') {
    const newUser = request.body;
    const data = await createUser(newUser);
    return response.status(200).json(data);
  }

  res.status(403).json({message: 'Error: request method not allowed.'});
}
