import mongoose from "mongoose";

const uri =
  "mongodb+srv://harry:harry1997@cluster0.tmqvhdt.mongodb.net/?appName=Cluster0";

async function main() {
  await mongoose.connect(uri);
}

main()
  .then((res) => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Connected to MongoDB failed");
  });
