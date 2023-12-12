const mongoose = requie("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: {
    type: String,
    enum: [
      {
        title: "Fashion and Clothing",
        image:
          "https://i.pinimg.com/236x/ca/37/ac/ca37acb148874d7d17f2fd6ceaadf870.jpg",
      },
      {
        title: "Electronics",
        image:
          "https://i.pinimg.com/236x/c8/ed/45/c8ed455ce98412eda5838f0313ef4350.jpg",
      },
      {
        title: "Home and Decor",
        image:
          "https://i.pinimg.com/236x/a5/c4/b5/a5c4b56c47e4a3b8a51b4dcd70e934b5.jpg",
      },
      {
        title: "Beauty and Personal Care",
        image:
          "https://i.pinimg.com/236x/ec/de/72/ecde723f88699145f6205ef4c5b120b4.jpg",
      },
    ],
  },
});
