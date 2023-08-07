const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function handler(req, res) {
  try {
    const category = req.query.category;
    const data = await getProductByCategory(category);
    res.send({
      success: true,
      data,
    });
  } catch (error) {
    console.log(error);
    res.send({
      success: false,
      status: 500,
      data: error,
    });
  }
}

async function getProductByCategory(id) {
  const productCollection = client.db('pc-builder').collection('products');
  const product = await productCollection
    .findOne({ category: category })
    .catch((err) => {
      throw new Error(err);
    });
  return product;
}

export default handler;
