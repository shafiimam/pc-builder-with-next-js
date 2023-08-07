const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function getProducts(req, res) {
  try {
    await client.connect();
    let products = [];
    const productsCollection = client.db('pc-builder').collection('products');
    if (req.method === 'GET' && req.query.featured === 'true') {
      products = await getFeaturedProducts(productsCollection);
      res.send({
        success: true,
        status: 200,
        data: products,
      });
    } else {
      products = await productsCollection.find({}).toArray();
      res.send({
        success: true,
        status: 200,
        data: products,
      });
    }
    
  } catch (error) {
    res.send({
      success: false,
      status: 500,
      data: error,
    });
  }
}

async function getFeaturedProducts(productsCollection) {
  return await productsCollection
    .aggregate([{ $sample: { size: 10 } }, { $set: { featured: true } }])
    .toArray();
}

export default getProducts;
