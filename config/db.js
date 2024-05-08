import mongoose from "mongoose";


const connectTomongo = async () => {

  const res = await mongoose.connect(
    `${process.env.URI}/blogapp`);
  if (res) {
    console.log(`\n MongoDB connected || DB HOST :`, res.connection.host);
  } else {
    console.log("Connection error");
  }
};

export default connectTomongo;
