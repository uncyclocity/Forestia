import connectDB from '../../../middleware/mongodb';
import Free from '../../../models/Free';
import Photo from '../../../models/Photo';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { boardType, id } = req.body;
    if (boardType && id >= 0) {
      try {
        if (boardType === 'free') {
          await Free.deleteOne({ id });
        } else if (boardType === 'photo') {
          await Photo.deleteOne({ id });
        }
        return res.status(200).send();
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