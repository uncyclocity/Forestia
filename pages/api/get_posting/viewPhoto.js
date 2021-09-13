import connectDB from '../../../middleware/mongodb';
import Photo from '../../../models/Photo';

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const { page } = req.query;
    if (page) {
      try {
        return await Photo.find()
          .sort({ _id: -1 })
          .skip((page - 1) * 15)
          .limit(15)
          .then((data) => {
            return res.status(200).send(data);
          });
      } catch (error) {
        return res.status(500).send(error.message);
      }
    } else {
      res.status(422).send('data_incomplete');
    }
  } else {
    res.status(422).send('req_method_not_supported');
  }
};

export default connectDB(handler);
