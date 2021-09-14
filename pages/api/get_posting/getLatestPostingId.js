import connectDB from '../../../middleware/mongodb';
import Free from '../../../models/Free';
import Photo from '../../../models/Photo';

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const { board_type } = req.query;
    if (board_type) {
      try {
        switch (board_type) {
          case 'free':
            var posting = await Free.findOne().sort({ _id: -1 }).limit(1);
            break;
          case 'photo':
            var posting = await Photo.find().sort({ _id: -1 }).limit(1);
            break;
        }
        return res.status(200).send(posting.id);
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