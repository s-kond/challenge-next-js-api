import {getUserById, deleteUser} from '../../../services/userService';

export default async function handler(request, response) {
  if (request.method === 'GET') {
    const {id} = request.query;
    console.log(id);
    const data = await getUserById(id);
    console.log(data);
    if (data) {
      return response.status(200).json(data);
    } else {
      return response.status(403).json({message: 'Error: No user found.'});
    }
  } else if (request.method === 'DELETE') {
    const {id} = request.query;
    const data = await deleteUser(id);
    return response.status(200).json({message: 'User successfully deleted'});
  }
  res.status(403).json({message: 'Error: request method not allowed.'});
}
